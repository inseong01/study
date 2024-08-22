// 객체타입 추론
let a = 1; // a: number
let b = 'b'; // b: string

// any 추론
let e; // e: any
e = 7;
e.toFixed(); // e: number
e = 'string';
e.toUpperCase(); // e: string

// const는 literal 타입으로 추론할 때 있음
const c = 2; // c: 2
const d = 'd'; // d: "d"
const isTrue = true; // isTrue: true

const arr = [1, 'string']; // arr: (number | string)[]
const obj = { key: 'value' }; // obj: { key: "value" }
const fn = () => {}; // fn: void
