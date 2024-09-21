// 1. 문제 이해
/*
  배열, 정수 인자를 받음
  배열의 요소 합이 정수보다 크거나 같으며 정수와 가장 인접한 값의 배열 합 요소의 길이를 반환
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
  total, start, end, minLen 변수 초기화.
  start 변수가 배열의 길이보다 클 때까지 반복.
  total 합이 sum보다 작고 end가 배열의 길이보다 작으면, end를 오른쪽으로 이동, total에 값을 더함.
  total 합이 sum과 같거나 크면, end - start 뺀 minLen을 구하고 start를 오른쪽으로 이동, total에서 값을 뺌.
  total 합이 sum보다 작고 end가 배열의 끝에 도달하면 반복 종료.
  minLen이 Infinity인 경우 0을 반환하고, 그렇지 않으면 minLen을 반환.
*/


// 4. 해결 / 단순화
function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end += 1;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start += 1;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray
/*
     ([2, 3, 1, 2, 4, 3], 7)

total  2  5  6  8  6  9  6  9  8  2  5     
start  0  0  0  0  1  1  2  2  3  4  5
end    1  2  3  4  4  5  5  6  6  6  6
minLen          4        3     3  2  
*/
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray
/*
     ([2, 1, 6, 5, 4], 9)

total  2  3  9  7  12 11 5  9  4
start        0  1  1  2  3  3  4
end    1  2  3  3  4  4  4  5  5
minLen          3     3  2     2
*/


// 5. 수정하기