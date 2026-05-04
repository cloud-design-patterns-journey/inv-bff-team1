import { Injectable, Logger } from '@nestjs/common';
import { StockItemsApi } from './stock-items.api';
import { StockItemModel } from '../../models';
import { get } from 'superagent';
import { ConfigService } from '@nestjs/config';
import * as CircuitBreaker from 'opossum';

class StockItem {
    'id'?: string;
    'manufacturer'?: string;
    'picture'?: string;
    'name'?: string;
    'price'?: number;
    'stock'?: number;
}

@Injectable()
export class StockItemsService implements StockItemsApi {
    private readonly logger = new Logger(StockItemsService.name);
    private readonly breaker: CircuitBreaker;

    constructor(private configService: ConfigService) {
        const timeout = this.configService.get<number>('CIRCUIT_BREAKER_TIMEOUT', 3000);

        this.breaker = new CircuitBreaker(this.fetchStockItems.bind(this), {
            timeout,
            errorThresholdPercentage: 50,
            resetTimeout: 10000,
        });

        this.breaker.on('open', () => this.logger.warn('Circuit breaker OUVERT — service indisponible'));
        this.breaker.on('halfOpen', () => this.logger.log('Circuit breaker SEMI-OUVERT — test en cours'));
        this.breaker.on('close', () => this.logger.log('Circuit breaker FERMÉ — service rétabli'));
        this.breaker.fallback(() => []);
    }

    async listStockItems(): Promise<StockItemModel[]> {
        const items = await this.breaker.fire() as StockItem[];
        return this.mapStockItems(items);
    }

    private async fetchStockItems(): Promise<StockItem[]> {
        const serviceUrl = this.configService.get<string>('SERVICE_URL');
        const res = await get(`${serviceUrl}/stock-items`).set('Accept', 'application/json');
        return res.body;
    }

    mapStockItems(data: StockItem[]): StockItemModel[] {
        return data.map(this.mapStockItem);
    }

    mapStockItem(item: StockItem): StockItemModel {
        return {
            id: item.id,
            name: item.name,
            stock: item.stock,
            unitPrice: item.price,
            picture: item.picture ?? 'https://via.placeholder.com/32.png',
            manufacturer: item.manufacturer,
        };
    }
}
