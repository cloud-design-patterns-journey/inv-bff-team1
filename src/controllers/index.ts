import { HelloWorldController } from "./hello-world";
import { StockItemsController } from "./stock-items.controller";
import { StockItemsRequestController } from "./stock-items.request.controller";
import { StockItemsResponseController } from "./stock-items.response.controller";

export * from "./hello-world";

export * from "./stock-items.request.controller";
export * from "./stock-items.response.controller";

export const controllers = [
  HelloWorldController,
  StockItemsController,
  StockItemsRequestController,
  StockItemsResponseController,
];
