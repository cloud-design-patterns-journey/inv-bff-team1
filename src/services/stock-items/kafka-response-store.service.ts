import { Injectable } from "@nestjs/common";

@Injectable()
export class KafkaResponseStoreService {
  private responses = new Map<string, any>();

  setResponse(correlationId: string, response: any) {
    this.responses.set(correlationId, response);
  }

  getResponse(correlationId: string) {
    return this.responses.get(correlationId);
  }
}
