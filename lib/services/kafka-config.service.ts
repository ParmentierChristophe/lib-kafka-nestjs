import { Injectable, Inject } from '@nestjs/common';
import { Kafka, KafkaConfig as KafkaJsOptions } from 'kafkajs';
import { KafkaOptions } from '../interfaces/kafka.options';

@Injectable()
export class KafkaConfigService {
  private kafkaInstance: Kafka;

  constructor(@Inject('KAFKA_OPTIONS') private kafkaOptions: KafkaOptions) {
    const config: KafkaJsOptions = {
      clientId: this.kafkaOptions.clientId,
      brokers: this.kafkaOptions.brokers,
      // Ajoutez d'autres configurations si nécessaire
    };

    this.kafkaInstance = new Kafka(config);
  }

  get instance(): Kafka {
    return this.kafkaInstance;
  }
}
