import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const job = await this.dsTrnQueue.getJob(id);

    if (!job)
      throw new HttpException(
        `Job with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );

    const reponse = { job: job.data };
    job.remove();
    return reponse;
  }
}
