export type NeverChecker<T> = [T] extends [never] ? any : never;

export function unreachable<T>(checkedValue: T, errorValue?: NeverChecker<T>): never {
  throw errorValue || new TypeError(`Unexpected value: ${JSON.stringify(checkedValue)}`);
}
