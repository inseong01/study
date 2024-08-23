// 사용자 정의 타입 가드
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // animal is Dog : 사용자 정의 타입 가드, 타입 보장
  return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if (isCat(animal)) {
    // 고양이
  }
}
const animal1 = {
  name: '11',
  isScratch: false,
};
warning(animal1);
