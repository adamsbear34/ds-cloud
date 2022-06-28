import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class ClientService {
  constructor(@InjectQueue('ds-transactions') private dsTrnQueue: Queue) {}

  async addTransactionToQueue(data: { sum: number; bayId: string }) {
    await this.dsTrnQueue.add(
      {
        data: data,
      },
      { jobId: data.bayId },
    );
  }

  async getDataInQueue(id: string) {
    const job = this.dsTrnQueue.getJob(id);
    let res = null;
    const data = job.then((job) => {
      res = job.data;
      job.remove();
    });
    return res;
  }
}
