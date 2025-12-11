import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('health')
  @HttpCode(200) // Força explicitamente o status 200 (opcional, pois já é padrão)
  checkHealth() {
    return; // Retorna corpo vazio. O NestJS envia apenas o status 200.
  }
}
