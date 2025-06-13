import { Provider } from "@nestjs/common";
import { provider as helloWorldProvider } from "./hello-world";
import {
  StockItemsMockService,
  StockItemsApi,
  provider as stockItemsProvider,
  KafkaProducerService,
  KafkaConsumerService,
  KafkaResponseStoreService,
} from "./stock-items";

export * from "./hello-world";

export const providers: Provider[] = [
  helloWorldProvider,
  stockItemsProvider,
  KafkaProducerService,
  KafkaConsumerService,
  KafkaResponseStoreService,
];
export { StockItemsApi, StockItemsMockService };
