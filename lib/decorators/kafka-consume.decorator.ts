import { SetMetadata } from '@nestjs/common';

export const KAFKA_CONSUME_METADATA_KEY = Symbol('KAFKA_CONSUME_METADATA_KEY');

export const Consume = (topic: string) => {
  return SetMetadata(KAFKA_CONSUME_METADATA_KEY, topic);
};

// @Injectable()
// export class IntegrationConsumer implements OnModuleInit {
//   constructor(private kafkaConsumer: KafkaConsumerService) {}

//   @Consume('adeo-dev-europe-west1-APP-OFFER-REPOSITORY-ALL-ALL-P1-C1-OFFER-INTEGRATION-V2')
//   handleMessage(message: any) {
//     console.log(`Received message: ${message.value}`);
//   }

//   onModuleInit() {
//     const target = this.handleMessage;
//     const topic = Reflect.getMetadata(KAFKA_CONSUME_METADATA_KEY, target);

//     if (topic) {
//       this.kafkaConsumer.subscribeToTopic(topic, this.handleMessage.bind(this));
//     }
//   }
// }
