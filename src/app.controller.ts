import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DsClinetService } from './ds-client/ds-clinet.service';
import { RegisterDeviceRequest } from './ds-client/device/dto/register-device.request';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dsClientService: DsClinetService,
  ) {}
}
