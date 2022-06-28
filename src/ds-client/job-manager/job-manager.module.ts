import { Module } from '@nestjs/common';
import { JobManagerService } from './job-manager.service';

@Module({
  imports: [],
  controllers: [],
  providers: [JobManagerService],
  exports: [JobManagerService],
})
export class JobManagerModule {}
