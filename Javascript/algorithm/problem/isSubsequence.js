// 1. 문제 이해
/*
  두 문자열을 받아 첫 번째 문자열이 두 번째 문자열의 일부에 포함되어 있는지 여부
  첫 번째 문자열은 순서대로 두 번째 문자열에 포함되어야 함

  시간 O(n + m)
  공간 O(1)
*/

// 2. 구체적 예시
/*
  isSubsequence('hello', 'hello world'); // true
  isSubsequence('sing', 'sting'); // true
  isSubsequence('abc', 'abracadabra'); // true
  isSubsequence('abc', 'acb'); // false (order matters)
*/


// 3. 세분화
/*
  기준값 선언
  변동값 선언

  기준값이 두 번째 문자열 - 첫 번째 문자열 길이 만큼 순회(while)
    sing  string
    0     0      
     1     123   
      2       4 
       3       5

    첫 번째 문자열 요소와 두 번째 문자열 소요가 같으면 기준값++, 변동값++
    첫 번째 문자열 요소와 두 번째 문자열 소요가 다르면 변동값++

    기준값이 첫 번째 문자열 순회 완료하면 true 반환
    변동값이 두 번째 문자열 길이를 초과하면 false 반환

  true 반환
*/


// 4. 해결 / 단순화
function isSubsequence(str_1, str_2) {
  let standardIdx = 0;
  let idx = 0;

  while (standardIdx <= str_2.length) {
    if (str_1[standardIdx] === str_2[idx]) {
      standardIdx += 1;
      idx += 1;
    } else {
      idx += 1;
    }

    if (standardIdx === str_1.length) return true;
    if (idx > str_2.length) return false;
  }
  return false;
}


// 5. 수정하기
// while 수정
function isSubsequence2(str_1, str_2) {
  let standardIdx = 0;
  let idx = 0;

  while (idx <= str_2.length) {
    if (standardIdx === str_1.length) return true;
    if (str_1[standardIdx] === str_2[idx]) standardIdx += 1;
    idx += 1;
  }
  return false;
}

// 재귀함수
function isSubsequence3(str_1, str_2) {
  // 첫번째 요소 비교 같으면 str_1, str_2 잘라서 다음 요소 확인
  // 다르면 str_2 잘라서 반환
  // str_1 길이가 0이면 true
  // str_2 길이가 0이면 false

  if (str_1.length === 0) return true;
  if (str_2.length === 0) return false;
  if (str_1[0] === str_2[0]) {
    return isSubsequence3(str_1.slice(1), str_2.slice(1))
  }
  return isSubsequence3(str_1, str_2.slice(1))
}

console.log(isSubsequence3('hello', 'hello world')); // true
console.log(isSubsequence3('sing', 'sting')); // true
console.log(isSubsequence3('abc', 'abracadabra')); // true
console.log(isSubsequence3('abc', 'acb')); // false (order matters)