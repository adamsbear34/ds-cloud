import { OnGlobalQueueCompleted, OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Job } from 'bull';

@Processor('ds-transactions')
export class ClientProcessor {
  @Process()
  async handleTransaction(job: Job) {
    console.log('Starting transaction');
    console.log(job.data);
    console.log('Finishing transaction');
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }


}
