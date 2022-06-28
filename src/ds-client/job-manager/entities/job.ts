export class Job implements IJob {
  private storage: any[] = [];
  private jobId: string;

  constructor(private capacity: number = Infinity, id: string) {
    this.jobId = id;
  }

  enqueue(item: any): void {
    if (this.size() === this.capacity) {
      throw Error('Queue has reached max capacity, you cannot add more items');
    }
    this.storage.push(item);
  }

  dequeue(): any | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  getJobId(): string {
    return this.jobId;
  }
}
