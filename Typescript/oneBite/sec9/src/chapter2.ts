// 분산적인 조건부 타입
type SwitchType1<T> = T extends number ? string : number;

let a: SwitchType1<string>;
let b: SwitchType1<string | boolean | number>;

// 1단계
// SwitchType<string>;
// SwitchType<boolean>;
// SwitchType<number>;

// 2단계
// number |
// number |
// string

/**
 * 특정타입 제거
 */
// T가 U의 서브타입이면(같으면) never, 아니면 T
type SwitchType2<T, U> = T extends U ? never : T;

let c: SwitchType2<string | number | boolean, string>;

// 1단계
// SwitchType2<string, string>
// SwitchType2<number, string>
// SwitchType2<boolean, string>

// 2단계
// never |
// number |
// boolean
// never는 공집합으로 사라짐
// 공집합: 원소가 하나도 없는 집합
// number | boolean
export {};
