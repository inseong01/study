// 유틸리티(2)
// Pick, Omit, Record
interface User {
  id: string;
  pwd: number;
  name?: string;
}
// Pick<> : 객체 프로퍼티 중에서 입력한 프로퍼티를 선택하여 객체 생성
let a: Pick<User, 'id'> = {
  id: 'qwer',
  // 나머지 입력 안해도 오류 X
};
type CopyPick<K, V extends keyof K> = {
  // K: key, V: value
  // V를 K의 키 값으로 확장(+범위 제한)
  [key in V]: K[key];
};

// Omit<> : 객체 프로퍼티 중에서 입력한 프로퍼티만 생략한 객체 생성
let b: Omit<User, 'id'> = {
  pwd: 123,
  // 나머지 입력 안해도 오류 X
};
type CopyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 1. Pick<User, Exclude<keyof User, 'id'>>
// 2. Pick<User, Exclude<'id' | 'pwd', 'id'>>
// 3. Pick<User, 'pwd'>

// Record<> : 객체 프로퍼티 키-값 반복 생성한 객체 타입 생성
type makeType = Record<'user1' | 'user2', { id: string; pwd: number }>;
/**
 * {
 *    user1: {
 *      id: string,
 *      pwd: number
 *    },
 *    user2: {
 *      id: string,
 *      pwd: number
 *    }
 * }
 */
type CopyRecord<K extends keyof any, V> = {
  [key in K]: V;
};
