import { Controller, Post, Body } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { KafkaProducerService } from "../services/stock-items/kafka-producer.service";

@Controller("stock-items/request")
export class StockItemsRequestController {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  @Post()
  async requestStockItems(@Body() body: any) {
    const correlationId = uuidv4();
    await this.kafkaProducer.send("stock-items-requests", {
      correlationId,
      payload: body,
    });
    return { correlationId };
  }
}
