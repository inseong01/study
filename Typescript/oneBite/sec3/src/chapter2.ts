// 객체 타입 호환
// 조건, 프로퍼티가 적은 객체가 슈퍼타입
type Book = {
  name: string;
  price: number;
};
type SmallBook = {
  name: string;
  price: number;
  page: number;
};

let book1: Book;
let book2: SmallBook = {
  name: 'QQQ',
  price: 10000,
  page: 200,
};

book1 = book2;
// book2 = book1; // 부모 -> 자식 오류

// 프로퍼티 초과 검사
// 정의된 객체 타입에서 프로퍼티가 추가되면 오류 발생
let book3: Book = {
  name: 'WWW',
  price: 3000,
  // page: 100 // 초과 프로퍼티 오류
};
