import { Injectable } from '@nestjs/common';
import { Producer } from 'kafkajs';
import { KafkaConfigService } from './kafka-config.service';

@Injectable()
export class KafkaProducerService {
  private producer: Producer;

  constructor(private kafkaConfigService: KafkaConfigService) {
    this.producer = this.kafkaConfigService.instance.producer();
  }

  async send(topic: string, message: any) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await this.producer.disconnect();
  }
}
