interface IJob<T> {
  enqueue(item: T): void;

  dequeue(): T | undefined;

  size(): number;
}
