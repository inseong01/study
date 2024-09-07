// 1. 주어진 배열에서 두번째로 주어진 값 만큼 배열 요소 순서대로 계산한 값이 가장 큰 숫자를 구한다
// 2.
//    [[1, 1, 2, 3, 3, 4], 2] // 7
//    [[], 3] // null
// 3.
//    1. 중첩 반복문으로 순회 n^2
//    2. 구해진 첫 값에서 오른쪽으로 이동하면 추가된 인덱스는 더하고 제외된 인덱스는 뺀다.
//      2.1. 합, 임시 변수 선언
//      2.2. 첫 합 구하기 (반복문)
//      2.3. 첫번째 이후 제외된 값 빼고 새로운 값 더한 숫자 구하며 전 값과 크기 비교 (반복문)
//            [1, 2, 3, 4, 5], 2
//             -     +
//            0+1, 0-(1)+2, 1-(2)+3, 2-(3)+4
//      2.4. 최대값 반환        

// 4. 해결 / 단순화
function getMaxSum(arr, number) {
  let sum = 0;
  let max = 0;

  if (arr.length < number) return null;

  for (let i = 0; i < number; i++) {
    sum += arr[i];
    max = sum;
  }
  let temp = sum;
  for (let j = 0; j < arr.length - number; j++) {
    temp = temp - arr[j] + arr[j + number];
    max = Math.max(max, temp)
    console.log(j, temp, sum, '-', arr[j], '+', arr[j + number], 'max: ', max)
  }
  console.log('max: ', max)
  return max
}

getMaxSum([10, 6, 9, 2, 1, 8, 5, 6, 3], 2)

// 5. 수정하기
// for문 인덱스 number부터 시작(더하기 우선), 이전 코드는 0부터 시작(빼기 우선)
function getMaxSumRe(arr, number) {
  let tempSum = 0;
  let maxSum = 0;

  if (arr.length < number) return null;

  for (let i = 0; i < number; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = number; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - number];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log('max: ', maxSum)
  return maxSum
}

getMaxSumRe([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)