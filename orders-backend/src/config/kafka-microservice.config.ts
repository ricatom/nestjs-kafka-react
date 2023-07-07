import { KafkaOptions, Transport } from '@nestjs/microservices';

export const kafkaMicroserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'orders',
      brokers: ['orders.dev:9092']
    },
    consumer: {
      groupId: 'orders-consumer',
      allowAutoTopicCreation: true,
      retry: {
        maxRetryTime: 60000, // 1 minute
        initialRetryTime: 1000, // 1 second
        factor: 2, // exponential backoff
        multiplier: 1.5, // random jitter to avoid all retries happening at the same time
        retries: 5
      }
    },
    run: {
      autoCommit: true
    }
  }
};
