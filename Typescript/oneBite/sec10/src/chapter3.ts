// 유틸리티(3)
// Exclude, Extract, ReturnType

// Exclude<T, U>
// T에서 U 제외
type ExcludeType = Exclude<string | boolean, string>;

// T가 U의 서브타입이면 never 아니면 T
type CopyExclude<T, U> = T extends U ? never : T;

// Extract<T, U>
// T에서 U만 추출
type ExtractType = Extract<string | number, number>;

// T가 U의 서브타입이면 T 아니면 never
type CopyExtract<T, U> = T extends U ? T : never;

// ReturnType<T, U>
// 함수의 반환값 추출
function fn() {
  return 'Hi';
}
type ReturnTypeType = ReturnType<typeof fn>;

// 함수의 T가 U의 서브타입이면 T 아니면 never
type CopyReturnType<T extends (...ary: any) => any> = T extends (...ary: any) => infer R ? R : never;
