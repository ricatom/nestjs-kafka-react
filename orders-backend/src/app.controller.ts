import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import {
  EventPattern,
  Payload
} from '@nestjs/microservices';
import env from './env';
import { OrdersService } from './orders/orders.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly orderService: OrdersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern(env.kafka.topicOrder)
  async handleOrderCreated(@Payload() payload) {
    try {
      this.orderService.create(payload);
      Logger.log(`Order created ${JSON.stringify(payload)}`)
    } catch (error) {
      Logger.error(error, 'Order error'); 
    }
  }
}
