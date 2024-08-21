// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['A', 'B', 'C'];
let boolArr: Array<boolean> = [true, false, false];

// 배열 요소 타입 다양할 경우
let multiArr: (string | number)[] = [1, 'A', 2, 'B'];

// 다차원일 경우
let doubleArr1: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
let doubleArr2: (number | boolean)[][] = [
  [1, 2, true],
  [true, 5, 6],
];

// 튜플
// : 고정적인 형태 필요할 때
// 길이와 타입 고정 경우
let tuple1: [number, number] = [1, 2];
tuple1 = [2, 3, 4]; // 배열 길이 맞지 않으면 오류

// 길이와 타입 다를 경우
let tuple2: [number, string] = [1, 'A'];
tuple2 = ['1', 'A', 2]; // 에러

// 다차원일 경우
let tuple3: [number, string, number][] = [
  [1, 'B', 3],
  [4, 'D', 5],
];
tuple3 = [
  [1, 'B', 3],
  ['C', 'D', 5],
]; // 형 다르면 에러
