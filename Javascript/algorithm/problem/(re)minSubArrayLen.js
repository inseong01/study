// 1. 문제 이해
/*
  배열, 정수 인자를 받음
  배열의 요소 합이 정수보다 크거나 같으며 정수와 가장 인접한 값의 배열 합 길이를 반환
  합이 정수보다 작은 경우 0 반환

  시간 O(n) 공간 O(1)
*/


// 2. 구체적 예시
/*
  minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
  minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
  minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
  minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/


// 3. 세분화
/*
    배열 요소 합 개수 값 선언

    배열 요소 합 계산
    
    정수보다 작으면 넘어감      

    정수와 같으면
      배열 요소 길이 반환

    비교 변수 선언
    
    합한 값이 비교 값보다 작으면
      배열 요소 합 비교값 할당
      배열 요소 길이 저장
    크면 넘어감    
          
    배열 요소 합 개수++

    함수 반환

    [2, 3, 1, 2, 4, 3], 7
  1  2  3  1  2  4  3
  2     5  4  3  6  7   return 2
  3        6  6  7  9
  4           8  10 10

*/
/*
  total, start, end, minLen 변수 초기화.
  start가 배열의 길이보다 작을 때까지 반복.
  현재 윈도우의 합이 sum보다 작고 end가 배열의 길이보다 작으면, end를 오른쪽으로 이동, total에 값을 더함.
  현재 윈도우의 합이 sum 이상이면, minLen을 업데이트하고 start를 오른쪽으로 이동, total에서 값을 뺌.
  현재 합이 sum보다 작지만 end가 배열의 끝에 도달하면 반복 종료.
  minLen이 Infinity인 경우 0을 반환하고, 그렇지 않으면 minLen을 반환.
*/


// 4. 해결 / 단순화
function minSubArrayLen(arr, num) {
  let sum = 0;
  let count = 1;
  let standard = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return count;
  }

  function repeat(arr, num, count) {
    for (let i = 0; i < count; i++) {
      sum += arr[i];
      standard = sum;
    }

    for (let i = 0; i < arr.length; i++) {
      if (sum === num) return count;
      if (sum < num) continue;
      sum = sum - arr[i] + arr[i + count];
    }
  }
  return repeat(arr, num, ++count);
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray


// 5. 수정하기
// 주어진 정수보다 큰 조건