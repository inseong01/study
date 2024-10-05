// 1. 문제 이해
/*
  값이 몇 번째에 위치하는지 인덱스 반환
  값이 배열 안에 존재하지 않으면 -1을 반환

  - linearSearch 
  배열과 값을 받음
  indexOf() 사용제한

  - binarySearch
  정렬된 배열과 값을 받음

  - naiveSearch
  두 개의 문자열 받음
  첫번째 문자열에서 두번째 문자열이 포함된 갯수 반환 
*/


// 2. 구체적 예시
/*
  linearSearch([10, 15, 20, 25, 30], 15) // 1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
  linearSearch([100], 100) // 0
  linearSearch([1,2,3,4,5], 6) // -1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
  linearSearch([100], 200) // -1

  binarySearch([1,2,3,4,5],2) // 1
  binarySearch([1,2,3,4,5],3) // 2
  binarySearch([1,2,3,4,5],5) // 4
  binarySearch([1,2,3,4,5],6) // -1
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10) // 2
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95) // 16
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100) // -1

  naiveSearch('abcde', 'bc') // 1
*/


// 3. 세분화
/*
  - linearSearch
  1. 배열 요소 하나씩 반복 확인
      없으면 -1
      있으면 반복한 순서 반환

  - binarySearch
  1. 배열 길이의 중간 반복 확인
    1.1.  값이 배열 요소보다 작으면 시작지점 이동
          값이 배열 요소보다 크면 끝지점 이동
    1.2.  값이 있으면 반복 횟수 반환
  2. 반복 끝나면 -1

  - naiveSearch
  'a  b  c  d  e', 'bc'
   0  1  2  3  4
   b  b  c  b  b
   x  o  o  x  x  >> 1


  1. 문자열 서로 비교
    1.1. 첫번째 문자열 요소와 두번째 문자열 첫 요소 비교
        동일하면 
          첫번째 문자열 다음 요소와 두번째 문자열 다음 요소 비교
        그렇지 않으면
          첫번째 문자열 다음 요소와 두번째 문자열 첫 요소 비교
    1.2. 두번째 문자열이 있다면 count 증가
  2. 반복문 끝나면 count 반환
*/


// 4. 해결 / 단순화
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i
  }

  return -1
}

function binarySearch(arr, value) {
  let i = 0;
  let start = 0;
  let end = arr.length; // index 중앙 위치를 위해 배열 길이 할당

  while (i < arr.length) {
    let idx = parseInt((start + end) / 2);

    if (arr[idx] > value) {
      end = idx;
    } else if (arr[idx] < value) {
      start = idx;
    }

    if (arr[idx] === value) return idx;
    i += 1;
  }
  return -1;
}

function naiveSearch(str1, str2) {
  let start = 0;
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[start]) start += 1;
    else start = 0;

    if (start === str2.length) count += 1;
  }
  return count
}


// 5. 수정하기
function naiveSearch(str1, str2) {
  let count = 0;

  for (let i = 0; i <= str1.length - str2.length; i++) {
    let match = true;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) count += 1;
  }
  return count
}

console.log(naiveSearch('qawerasdzxcqasdeqa', 'qa'));

/*
  <=
  str1의 마지막 부분 검사 허용

  !== {}
  반복문을 통과해야 온전한 ture 반환, 그렇지 않으면 false
  if문 밖에 배치하면 첫 글자만 일치해도 count 증가됨

  원래코드
  수정된 코드와 동일하게 시간복잡도는 O(n^2)
  원래코드는 반복을 한 번만 수행 하지만 str2를 하나씩 확인함으로 for문 중첩과 동일한 시간복잡도를 가짐  

*/