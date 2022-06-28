import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { DsClinetService } from './ds-clinet.service';
import { DeviceService } from './device/device.service';
import { RegisterDeviceRequest } from './device/dto/register-device.request';
import { AddJobRequest } from './dto/add-job.request';

@Controller('client/')
export class DsClientController {
  constructor(
    private readonly dsClientService: DsClinetService,
    private readonly deviceService: DeviceService,
  ) {}

  @Post('device')
  registerDevice(@Body() registerDeviceRequest: RegisterDeviceRequest) {
    return this.deviceService.registerDevice(registerDeviceRequest);
  }

  @Post('job')
  addJobByDeviceId(@Body() addJobRequest: AddJobRequest) {
    return this.deviceService.addJobByDeviceId(
      addJobRequest.deviceId,
      addJobRequest.jobManagerId,
      addJobRequest.item,
    );
  }

  @Get('job/:deviceId/:mngId')
  getJobFromManager(
    @Param('deviceId') deviceId: string,
    @Param('mngId') mngId: string,
    @Headers() headers,
  ) {
    const status = headers.p_status;
    if (status == 0) {
      return this.deviceService.getJobFromManager(deviceId, mngId);
    } else {
      return { error: 'Bay is busy' };
    }
  }

  @Get('device')
  getAllDevices() {
    return this.deviceService.findAllDevices();
  }
}
