import { Job } from '../jobs/job';

export class Device implements IDevice {
  readonly jobs: Job[] = [];
  private id: string;
  private size: number;

  constructor(size: number, id: string) {
    this.size = size;
    this.id = id;
  }

  getCapacity(): number {
    return this.jobs.length;
  }

  createJob(id: string) {
    const job = new Job(Infinity, id);
    this.addJob(job);
  }

  addJob(item: Job) {
    if (this.size === this.getCapacity()) {
      throw new Error(
        'Device has reached max capacity, you cannot add more jobs',
      );
    }
    this.jobs.push(item);
  }

  removeJob(id: string) {
    const index = this.jobs
      .map((job) => {
        return job.getJobId();
      })
      .indexOf(id);

    this.jobs.slice(index, 1);
  }

  getDeviceId() {
    return this.id;
  }
}
