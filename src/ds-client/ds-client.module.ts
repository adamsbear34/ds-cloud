import { Module } from '@nestjs/common';
import { DsClinetService } from './ds-clinet.service';
import { DsClientController } from './ds-client.controller';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DeviceModule],
  controllers: [DsClientController],
  providers: [DsClinetService],
})
export class DsClientModule {}
