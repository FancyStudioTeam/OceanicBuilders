export class Builder<T> {
  readonly data: Partial<T>;

  constructor(data: Partial<T>) {
    this.data = data;
  }
}
