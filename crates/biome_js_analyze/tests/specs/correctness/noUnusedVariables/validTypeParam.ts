export function f<T extends U, U>(a: T) {
    return a;
}
export class C<T1, T2> {
    readonly prop: T1;
    method(a: T2) { return a; }
}
export type Alias<T> = { arr: T[] };
export type Mapped = { [K in keyof number]: K };
export type Inferred<T> = T extends (infer I)[] ? Set<I> : Set<unknown>;