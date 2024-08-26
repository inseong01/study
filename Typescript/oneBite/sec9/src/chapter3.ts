// infer
// 특정 타입 추론 문법
// R은 T의 타입을 추론, T가 R의 서브타입이면 R 아니면 never
type Returntype<T> = T extends () => infer R ? R : never;
type FunA = () => string;
type FunB = () => number;

let a: Returntype<FunA>; // a: string
let b: Returntype<FunB>; // b: number
let c: Returntype<number>; // c: never
