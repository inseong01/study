/**
 * map, forEach 직접 만들기
 */

// map
// : 배열, 콜백함수, 배열 반환, 형 변환 가능
function map<T, U>(arr: T[], callback: (value: T) => U) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
let map1 = map([1, 2, 3], (value) => value + '0');
let map2 = map(['1', '2', '3'], (value) => parseInt(value) - 1);

// forEach
// : 배열, 콜백함수, undefined 반환, 형 변환 가능
function forEach<T>(arr: T[], callback: (value: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
let forEach1 = forEach([1, 2, 3], (value) => console.log(value + 2));
let forEach2 = forEach(['1', '2', '3'], (value) => console.log(parseInt(value) - 2));
