import { Order } from 'src/orders/entities/order.entity';
import { DataSourceOptions } from 'typeorm';
import env from 'src/env';


export const config: DataSourceOptions = {
    type: 'postgres',
    host: env.postgres.host,
    port: env.postgres.port,
    username: env.postgres.user,
    password: env.postgres.password,
    synchronize: env.postgres.synchronize || false, // Obs: use synchronize: true somente em desenvolvimento.
    database: env.postgres.db,
    entities: [Order],
    logging: false,
};