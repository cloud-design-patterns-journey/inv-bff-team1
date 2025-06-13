import { Injectable, OnModuleInit } from "@nestjs/common";
import { Kafka, Consumer } from "kafkajs";
import { KafkaResponseStoreService } from "./kafka-response-store.service";

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(private readonly responseStore: KafkaResponseStoreService) {}

  async onModuleInit() {
    this.kafka = new Kafka({
      clientId: "inv-bff",
      brokers: ["my-cluster-kafka-brokers:9092"],
    });
    this.consumer = this.kafka.consumer({ groupId: "inv-bff-group" });
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: "stock-items-responses",
      fromBeginning: false,
    });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        if (message.value) {
          const data = JSON.parse(message.value.toString());
          if (data.correlationId) {
            this.responseStore.setResponse(data.correlationId, data.payload);
          }
        }
      },
    });
  }
}
