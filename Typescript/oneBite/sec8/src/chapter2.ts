// keyof 연산자
// 객체 타입의 모든 key 추출
// keyof 타입 / keyof typeof 변수
interface person {
  name: string;
  id: number;
}
let person1: person = {
  name: 'Aeo',
  id: 1,
};
function personInfo(person: person, key: keyof person) {
  // key: name | id
  console.log(person[key]);
}

personInfo(person1, 'name'); // 'Aeo'
