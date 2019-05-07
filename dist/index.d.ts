export declare class UnreachableError extends Error {
    constructor(message: string);
}
export declare type NeverChecker<T> = [T] extends [never] ? string : never;
export declare function unreachable<T>(checkedValue: T, message?: NeverChecker<T>): never;
