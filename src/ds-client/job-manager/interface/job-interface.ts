interface IJob {
  enqueue(item: any): void;

  dequeue(): any | undefined;

  size(): number;
}
