import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { OrdersService } from './orders/orders.service';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Order]),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
