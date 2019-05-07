export class UnreachableError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export type NeverChecker<T> = [T] extends [never] ? string : never;

export function unreachable<T>(checkedValue: T, message?: NeverChecker<T>): never {
  throw (
    message
      ? new UnreachableError(message)
      : new TypeError(`Unexpected value: ${JSON.stringify(checkedValue)}`)
  );
}
