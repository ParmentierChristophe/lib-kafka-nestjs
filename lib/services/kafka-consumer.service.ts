import { Injectable, OnModuleInit } from '@nestjs/common';
import { Consumer } from 'kafkajs';
import { KafkaConfigService } from './kafka-config.service';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private consumer: Consumer;

  constructor(private kafkaConfigService: KafkaConfigService) {
    this.consumer = this.kafkaConfigService.instance.consumer({
      groupId: 'nestjs-group',
    });
  }

  async onModuleInit() {
    await this.consumer.connect();
    // TODO: Ajouter la logique d'abonnement aux topics
  }

  async subscribeToTopic(topic: string, onMessage: Function) {
    await this.consumer.subscribe({ topic });
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        onMessage(message);
      },
    });
  }

  async onModuleDestroy() {
    await this.consumer.disconnect();
  }
}
