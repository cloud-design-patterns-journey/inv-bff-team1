import { Controller, Get, HttpException } from "@nestjs/common";
import { AuthenticatedUser } from "nest-keycloak-connect";
import { StockItemsApi } from "../services";

@Controller("stock-items")
export class StockItemsController {
  constructor(private readonly service: StockItemsApi) {}

  @Get()
  async listStockItems(@AuthenticatedUser() user: any): Promise<any[]> {
    try {
      console.log("User KC Id:", user.sub);
      return await this.service.listStockItems();
    } catch (err) {
      throw new HttpException(err, 502);
    }
  }
}
