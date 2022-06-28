import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { JobManagerModule } from '../job-manager/job-manager.module';

@Module({
  imports: [JobManagerModule],
  controllers: [],
  providers: [DeviceService],
  exports: [DeviceService]
})
export class DeviceModule {}
