export declare type NeverChecker<T> = [T] extends [never] ? any : never;
export declare function unreachable<T>(checkedValue: T, errorValue?: NeverChecker<T>): never;
