interface IDevice {
  createJob(id: string): void;
  addJob(item: Job): void;
  removeJob(id: string): void;
  getCapacity(): number;
}
