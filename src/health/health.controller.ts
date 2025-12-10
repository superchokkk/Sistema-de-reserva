import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  
  @Get()
  check() {
    // Resposta simples, igual aos microsserviços
    return { status: 'ok', service: 'gateway' };
  }
}