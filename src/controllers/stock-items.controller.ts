import { Controller } from "@nestjs/common";
import { StockItemsApi } from "../services";

@Controller("stock-items")
export class StockItemsController {
  constructor(private readonly service: StockItemsApi) {}
}
