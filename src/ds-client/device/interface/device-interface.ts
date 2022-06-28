import { Job } from '../../job-manager/entities/job';

interface IDevice {
  createJob(id: string): void;
  addJob(item: Job): void;
  removeJob(id: string): void;
  getCapacity(): number;
}
