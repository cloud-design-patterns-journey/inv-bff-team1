import { Controller, Get, Param, NotFoundException } from "@nestjs/common";
import { KafkaResponseStoreService } from "../services/stock-items/kafka-response-store.service";

@Controller("stock-items/response")
export class StockItemsResponseController {
  constructor(private readonly responseStore: KafkaResponseStoreService) {}

  @Get(":correlationId")
  async getResponse(@Param("correlationId") correlationId: string) {
    const response = this.responseStore.getResponse(correlationId);
    if (!response) {
      throw new NotFoundException("Response not ready");
    }
    return response;
  }
}
