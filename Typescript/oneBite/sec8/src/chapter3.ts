// 맵드 타입
// 기존 객체 타입을 새로운 객체 타입 생성 (type으로 생성)
interface Person {
  id: number;
  pwd: number;
}
type NewPerson = {
  [key in keyof Person]?: Person[key];
};

function updatePerson(value: NewPerson) {}

let person1: Person = {
  id: 1,
  pwd: 111,
};
updatePerson({ id: 2 }); // id, pwd 모두 안 적어도 됨
