/*
    1. 주어진 인수에 중복 수가 있는 지 참/거짓 반환

    2. 구체적 예시
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 

    3. 세분화
      1. 빈도수 세기
        1. 나머지 인자로 배열 선언
        2. 빈도수 계산 (반복문)
            프로퍼티 값이 2 이상이면 true 반환
        3. false 반환

      2. 다중 포인터 
        1. 반복문
          첫번째 두번째 요소 포함여부           
            있으면
              true 반환
          
            [1] [2] >> [2] [3] >> [3] [4]
            1 != 2 >> 12 != 3 >> 123 != 4 

        2. false 반환
*/

// 4. 
//    빈도수 세기
function areThereDuplicates(...arr) {
  const obj = {};

  for (let key of arr) {
    obj[key] = ++obj[key] || 1;
    if (obj[key] >= 2) return true;
  }

  return false;
}
//    다중 포인터
function areThereDuplicates(...arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (String(arr[i]).includes(String(arr[i + 1]))) return true;
    arr[i + 1] += String(arr[i]);
  }
  return false;
}
//    수정
function areThereDuplicates(...arr) {
  let start = 0
  let next = 1;

  while (start < arr.length) {
    // start번과 next~arr.length까지 비교
    // 일치하면 true 반환    
    // start++
    // next가 arr.length 넘으면 start++, next = start+1
    if (arr[start] === arr[next]) return true;
    next += 1;

    if (next > arr.length) {
      start += 1;
      next = start + 1
    }
  }

  return false;
}
//    다른 방법
function areThereDuplicates(...arr) {
  return new Set(arr).size !== arr.length
}

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 3, 5, 2, 3, 1)) // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true