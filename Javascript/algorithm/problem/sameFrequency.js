// 1. 두 개의 양의 정수가 서로 같은 자릿수 인지 참/거짓 반환
// 2. 
//    sameFrequency(182,281) // true
//    sameFrequency(34,14) // false
//    sameFrequency(3589578, 5879385) // true
//    sameFrequency(22,222) // false
// 3. 
/*
    1. length가 서로 다르면 false
    2. 객체 생성, 자릿수 프로퍼티 빈도수 계산 (반복문)
    3. 객체 프로퍼티 서로 비교 (반복문)
*/

// 4. 해결 / 단순화
function sameFrequency(num1, num2) {
  const firstNum = String(num1);
  const secondNum = String(num2);

  const firstObj = {};
  const secondObj = {};

  for (let key of firstNum) {
    firstObj[key] = ++firstObj[key] || 1;
  }
  for (let key of secondNum) {
    secondObj[key] = ++secondObj[key] || 1;
  }

  for (let key in firstObj) {
    if (firstObj[key] !== secondObj[key]) return false;
  }
  return true;
}


// 5. 수정하기



console.log(sameFrequency(22, 222)) // false
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true