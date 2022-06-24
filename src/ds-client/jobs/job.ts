class Job<T> implements IJob<T> {
  private storage: T[] = [];
  private jobId: string;

  constructor(private capacity: number = Infinity, id: string) {
    this.jobId = id;
  }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Queue has reached max capacity, you cannot add more items');
    }
    this.storage.push(item);
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  getJobId(): string {
    return this.jobId;
  }
}
