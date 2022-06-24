interface IDevice<T> {
  createJob(id: string): void;
  addJob(item: Job<T>): void;
  removeJob(id: string): void;
  getCapacity(): number;
}
