// 함수 타입의 호환성
// 기준: 반환값 타입, 매개변수 타입(개수 같을 때, 다를 때)

// 반환값 타입
type A = () => number; // number
type B = () => 10; // number literal

let a: A = () => 100;
let b: B = () => 10;

a = b;
// b = a; // 타입 관계 에러, (슈퍼-서브)

// 매개변수 타입
// 1. 타입 개수 같을 때
type C = (value: number) => void; // number
type D = (value: 10) => void; // literal

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 에러, literal -> number (업캐스팅)
d = c;

// 설명
type Animal = {
  // 슈퍼(1)
  name: string;
};
type Dog = {
  // 서브(2)
  name: string;
  color: string;
};

let animalFn = (animal: Animal) => {};
let dogFn = (dog: Dog) => {};

// animalFn = dogFn; // 속성 차이 에러
dogFn = animalFn;

// 2. 타입 개수 다를 때
type E = (a: number, b: string) => void;
type F = (a: number) => void;

let e: E = (a, b) => {};
let f: F = (a) => {};

e = f;
// f = e; // 매개변수 타입 개수 차이 에러

/**
 * 공변성
 * A가 B의 서브타입이면 T<A>는 T<B>의 서브타입이다.
 * >> 일반적인 상황
 *
 * 반공변성
 * A가 B의 서브타입이면 T<B>는 T<A>의 서브타입이다.
 * >> 매개변수로 전달된 경우, 함수 반환값은 공변성
 * >> 매개변수: 넓음 -> 좁음 O, 반환값: 좁음 -> 넓음 O
 *
 * 이변성
 * A가 B의 서브타입이면 T<A> <-> T<B> 되는 경우.
 *
 * 불변성
 * A가 B의 서브타입이더라도 T<A> <-> T<B> 안되는 경우.
 */
