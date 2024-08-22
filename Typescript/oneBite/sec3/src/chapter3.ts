// 대수
type Animal = {
  name: string;
  color: string;
};
type Food = {
  name: string;
  price: number;
  taste: string;
};

type Or = Animal | Food; // 둘 중 한 객체타입 이상 만족(합집합)
let animalFood1: Or = {
  name: '',
  color: '',
};

type Both = Animal & Food; // 모든 객체타입 만족(교집합)
let animalFood2: Both = {
  name: '',
  color: '',
  price: 0,
  taste: '',
};
