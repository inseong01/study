// 제네릭 인터페이스 & 제네릭 타입 별칭
// 제네릭 변수 선언으로 유연하게 인터페이스 활용 가능
/**
 * 1. 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}
let keyPair1: KeyPair<string, number> = {
  key: 'number',
  value: 111,
};

/**
 * 2. 인덱스 시그니처
 */
interface Map<V> {
  [key: string]: V;
}
let Map1: Map<number> = {
  key: 123,
};
let Map2: Map<string> = {
  key: 'qwer',
};

/**
 * 3. 제네릭 타입 별칭
 */
// 타입 좁히기 없이 간략하게 작성가능
// 매개변수 대상 설정 가능
interface Developer {
  type: 'developer';
}
interface Student {
  type: 'student';
}
interface User<T> {
  name: string;
  profile: T;
}

let user1: User<Student> = {
  name: 'Won',
  profile: {
    type: 'student',
  },
};
let user2: User<Developer> = {
  name: 'Ann',
  profile: {
    type: 'developer',
  },
};

function who(user: User<Student>) {
  console.log(`Hi ${user.name}`);
}
who(user1);
// who(user2); // Error, 할당되지 않은 타입
