// 조건부 타입
// extends와 삼항연산자 활용
interface Pwd {
  pwd: number;
}
interface Id {
  id: string;
}
type Info = Id extends Pwd ? number : string;
// Id는 Pwd로 확장되지 않음으로 Info는 string이다

/**
 * 제네릭 사용 (+ 오버로드 활용)
 */
// 반환값 타입 설정 가능
function fn<T>(value: T): T extends string ? string : number;
function fn(value: any) {
  if (typeof value === 'string') {
    return value; // value: string
  } else {
    return value; // value: any
  }
}
