// object
let dog: {
  name: string;
  color: string;
} = {
  name: '돌돌이',
  color: 'brown',
};

// ?, 선택적 항목
let person: {
  id?: number; // 있으면 number, 없으면 없음
  name: string;
} = {
  id: 1,
  name: 'Queen',
};

person = {
  name: 'Ann',
};

// readonly
let config: {
  readonly apiKey: string;
} = {
  apiKey: '123qweasdzx',
};
config.apiKey = 'qweasdzxc123'; // 변경 안 되도록, 오류 발생
