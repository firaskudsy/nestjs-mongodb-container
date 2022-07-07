import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('DEBUG: ~ file: app.controller.ts ~ line 10 ~ AppController ~ getHello ~ string');
    return this.appService.getHello();
  }
}
