import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DsClinetService } from './ds-client/ds-clinet.service';
import { RegisterDeviceRequest } from './ds-client/dto/register-device.request';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dsClientService: DsClinetService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  registerDevice(@Body() registerDeviceRequest: RegisterDeviceRequest) {
    return this.dsClientService.registerDevice(registerDeviceRequest);
  }

}
