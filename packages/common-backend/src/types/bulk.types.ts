export type BulKTransform<T> = {
  [P in keyof T]: { [P in keyof T]: T[P][] };
}[keyof T];
