export class BaseBuilder<T> {
  data: Partial<T>;

  constructor(data?: Partial<T>) {
    this.data = data ?? {};
  }

  toJSON(inArray: true): [T];
  toJSON(inArray?: false): T;
  toJSON(inArray = false): T | T[] {
    const data = this.data as T;

    return inArray ? [data] : data;
  }
}
