import { Provider } from "@nestjs/common";

import { StockItemsApi } from "./stock-items.api";
import { StockItemsMockService } from "./stock-items-mock.service";
import { StockItemsService } from "./stock-items.service";
import { KafkaProducerService } from "./kafka-producer.service";
import { KafkaConsumerService } from "./kafka-consumer.service";
import { KafkaResponseStoreService } from "./kafka-response-store.service";

export {
  StockItemsMockService,
  StockItemsApi,
  StockItemsService,
  KafkaProducerService,
  KafkaConsumerService,
  KafkaResponseStoreService,
};

export const provider: Provider = {
  provide: StockItemsApi,
  useClass: StockItemsService,
};
