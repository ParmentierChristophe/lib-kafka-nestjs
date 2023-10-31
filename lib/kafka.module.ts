import { Module, DynamicModule } from '@nestjs/common';
import { KafkaCoreModule } from './kafka-core.module';
import { KafkaOptions } from './interfaces/kafka.options';
import { KafkaProducerService } from './services/kafka-producer.service';
import { KafkaConsumerService } from './services/kafka-consumer.service';

@Module({})
export class KafkaModule {
  static forRoot(options: KafkaOptions): DynamicModule {
    return {
      module: KafkaModule,
      imports: [KafkaCoreModule.forRoot(options)],
      providers: [KafkaProducerService, KafkaConsumerService],
      exports: [KafkaProducerService, KafkaConsumerService],
    };
  }

  //   static forFeature(topics?: string[]): DynamicModule {
  //     const providers = [];
  //     if (topics && topics.length) {
  //       providers.push({
  //         provide: 'KAFKA_TOPICS',
  //         useValue: topics,
  //       });
  //     }
  //     return {
  //       module: KafkaModule,
  //       providers,
  //       exports: providers,
  //     };
  //   }
}
