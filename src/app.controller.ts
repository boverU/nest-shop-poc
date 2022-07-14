import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/hello/:id')
  getHello(@Param('id') id: number): string {
    return this.appService.getHello(id);
  }
}
