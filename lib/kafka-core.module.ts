import { Module, DynamicModule, Global } from '@nestjs/common';
import { KafkaOptions } from './interfaces/kafka.options';
import { KafkaConfigService } from './services/kafka-config.service';

@Global()
@Module({})
export class KafkaCoreModule {
  static forRoot(options: KafkaOptions): DynamicModule {
    const providers = [
      {
        provide: 'KAFKA_OPTIONS',
        useValue: options,
      },
      KafkaConfigService,
    ];

    return {
      module: KafkaCoreModule,
      providers: providers,
      exports: [KafkaConfigService, ...providers],
    };
  }
}
