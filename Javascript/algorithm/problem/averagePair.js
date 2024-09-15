// 1. 문제 이해
/*
  배열의 쌍(2개 값)의 평균이 목표 평균과 같은 값이 있는지 확인여부
  평균값 x2 한 값으로 배열의 쌍 더한 값 확인

  시간 O(n)
  공간 O(1)
*/

// 2. 구체적 예시
/*
  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false
*/

// 3. 세분화
/*
  평균값 x2 변수 선언
  기준값 선언
  변동값 선언

  배열 순회, 기준값이 배열 길이 초과 전까지(while)
    합 일치하는 값 있으면 true 반환
    변동값++
    변동값이 배열길이 초과하면 기준값++, 변동값=기준값+1

  false 반환
*/

// 4. 해결 / 단순화
function averagePair(arr, avg) {
  if (arr.length === 0) return false;

  const avgSum = avg * 2;
  let standardIdx = 0;
  let i = 1;

  while (standardIdx < arr.length - 1) {
    if (arr[standardIdx] + arr[i] === avgSum) return true;
    i += 1;
    if (i > arr.length) {
      standardIdx += 1;
      i = standardIdx + 1
    }
  }
  return false
}

// 5. 수정하기
// 조건문 이어가기
function averagePair2(arr, avg) {
  if (arr.length === 0) return false;

  const avgSum = avg * 2;
  let standardIdx = 0;
  let i = 1;

  while (standardIdx < arr.length - 1) {
    if (arr[standardIdx] + arr[i] === avgSum) return true;
    else if (i > arr.length) {
      standardIdx += 1;
      i = standardIdx + 1
    } else {
      i += 1;
    }
  }
  return false
}

// 정렬된 배열, O(n)
function averagePair3(arr, avg) {
  if (arr.length === 0) return false;

  const avgSum = avg * 2;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === avgSum) return true;
    else if (sum > avgSum) end -= 1;
    else start += 1;
  }
  return false
}


console.log(averagePair3([1, 2, 3], 2.5)) // true
console.log(averagePair3([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair3([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair3([], 4)) // false