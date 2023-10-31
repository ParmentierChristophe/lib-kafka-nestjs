import { SetMetadata } from '@nestjs/common';

export const KAFKA_PRODUCE_METADATA_KEY = 'KAFKA_PRODUCE_METADATA_KEY';

export const Produce = (topic: string) =>
  SetMetadata(KAFKA_PRODUCE_METADATA_KEY, topic);

// @Injectable()
// export class SnapshotService {
//   constructor(private kafkaProducer: KafkaProducerService) {}

//   @Produce('adeo-dev-europe-west1-APP-OFFER-REPOSITORY-ALL-ALL-P1-C1-OFFER-SNAPSHOT-PUBLICATION-V5')
//   sendToSnapshot(content: string): any {
//     return content;
//   }
// }
