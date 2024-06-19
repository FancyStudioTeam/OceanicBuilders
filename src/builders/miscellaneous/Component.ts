export class Component<T> {
  readonly data: Partial<T>;

  constructor(data: Partial<T>) {
    this.data = data;
  }
}
