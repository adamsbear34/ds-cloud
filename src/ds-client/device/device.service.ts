import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Device } from './entity/device';
import { RegisterDeviceRequest } from './dto/register-device.request';
import { JobManagerService } from '../job-manager/job-manager.service';

@Injectable()
export class DeviceService {
  private storage: Device[] = [];

  constructor(private jobManagerService: JobManagerService) {}

  registerDevice(registerDeviceRequest: RegisterDeviceRequest) {
    try {
      const device = new Device(
        registerDeviceRequest.deviceSize,
        registerDeviceRequest.id,
      );

      registerDeviceRequest.jobIds.forEach((id) => {
        const job = this.jobManagerService.registerJobManager(id, Infinity);
        device.addJob(job);
      });

      this.storage.push(device);
      return device;
    } catch (e) {
      return new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  addJobByDeviceId(deviceId: string, jobManagerId: string, item: any) {
    const device = this.storage.find((item) => item.getDeviceId() === deviceId);
    if (!device)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );
    const job = device.jobs.find((job) => job.getJobId() === jobManagerId);
    if (!job)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    job.enqueue(item);

    return job;
  }

  getJobFromManager(deviceId: string, jobManagerId: string) {
    const device = this.storage.find((item) => item.getDeviceId() === deviceId);
    if (!device)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );
    const job = device.jobs.find((job) => job.getJobId() === jobManagerId);
    if (!job)
      throw new HttpException(
        'Device with this id not found',
        HttpStatus.NOT_FOUND,
      );

    const item = job.dequeue();

    return item;
  }

  findAllDevices() {
    return this.storage;
  }
}
