import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDeviceRequest } from './dto/register-device.request';
import { Device } from './device/device';
import { Job } from './jobs/job';

@Injectable()
export class DsClinetService {
  private storage: Device[] = [];

  registerDevice(registerDeviceRequest: RegisterDeviceRequest) {
    const device = new Device(
      registerDeviceRequest.size,
      registerDeviceRequest.id,
    );
    this.storage.push(device);
    return this.storage;
  }

  registerJob(deviceId: string, size: number, id: string) {
    const device = this.storage.find((item) => item.getDeviceId() === deviceId);

    if (!device)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    const job = new Job(size, id);

    device.addJob(job);
    return device;
  }

  addJob(deviceId: string, jobId: string, item: any) {
    const device = this.storage.find((item) => item.getDeviceId() === deviceId);
    if (!device)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    const job = device.jobs.find((job) => job.getJobId() === jobId);
    if (!job)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    job.enqueue(item);

    return job;
  }

  getCurrentJobs(deviceId: string) {
    const device = this.storage.find((item) => item.getDeviceId() === deviceId);
    if (!device)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    return device.jobs;
  }

  getAllJobs(deviceId: string) {
    return this.storage;
  }
}
