import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Job } from './entities/job';

@Injectable()
export class JobManagerService {
  registerJobManager(id: string, size: number) {
    const job = new Job(size, id);
    return job;
  }
}
