// 1. 문제 이해
/*
  지수 정렬: helper, radixSort
  - helper
    getDigit: 지정한 지수자리의 값 반환
    digitCount: 요소 자릿수 반환
    mostDigits: 배열 요소들 중에서 최대 자릿수 반환

  - radixSort
    helper 함수를 활용하여 배열 정렬 반환
*/


// 2. 구체적 예시
/*
  helper
    getDigit(23, 0) // 3
    getDigit(23, 1) // 2
    getDigit(23, 2) // 0

    digitCount(1) // 1
    digitCount(21) // 2
    digitCount(321) // 3

    mostDigits([1, 12, 123]) // 3
    mostDigits([1, 1, 2]) // 1

    radixSort([332, 21, 1, 43]) // [ 1, 21, 43, 332 ]

    0 - 첫번째 자리 1, 21 / 332 / 43
    1 - 두번째 자리 01 / 21 / 43 / 332
    2 - 세번째 자리 001, 021, 043 / 332
*/


// 3. 세분화
/*
  helper
    - getDigit(num, place)
    : num을 부여하면 num의 place번째 자리 숫자값 반환
      num 문자열화
      num의 길이 -1 -place 값 반환

    - digitCount(num)
    : num의 자릿수 반환
      num 문자열화
      문자열 길이 반환

    - mostDigits(nums)
    : 숫자들의 최대 자릿수 반환
      nums 반복 순회
        digitCount 최댓값 저장
      최댓값 반환

  radixSort
    mostDigits 만큼 반복
      버킷 배열 생성
      배열 수 만큼 반복
        n번째 자릿수 비교 getDigit()
        자릿수 값이 버킷 인덱스와 같으면
          버킷에 값 삽입
      버킷 배열 원본 배열 덮어씌움
      
    원본 배열 반환
*/


// 4. 해결 / 단순화
function getDigit(num, place) {
  const str = String(Math.abs(num));
  const idx = str.length - 1 - place;
  return str[idx] ? str[idx] : 0;
}
function digitCount(num) {
  return String(Math.abs(num)).length;
}
function mostDigits(nums) {
  let maxDigitCount = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    maxDigitCount = Math.max(digitCount(nums[i]), maxDigitCount);
  }
  return maxDigitCount
}

function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);

  for (let i = 0; i < maxDigitsCount; i++) {
    // let buckets = Array.from({ length: 10 }, () => [])
    let buckets = Array(10).fill([]).map(() => [])
    for (let j = 0; j < nums.length; j++) {
      let digitValue = getDigit(nums[j], i);
      buckets[digitValue].push(nums[j]);
    }
    nums = [].concat(...buckets)
  }

  return nums;
}
console.log(radixSort([332, 21, 1, 43])) // [ 1, 21, 43, 332 ]


// 5. 수정하기
/*
  코드 해석
  function radixSort(nums) {
    최대 자릿수 선언

    최대 자릿수 만큼 반복
      버킷 배열 생성(10칸)
      숫자 배열 수 만큼 반복
        자릿수 계산
        해당 버킷 인덱스에 자릿수 삽입
      숫자 배열에 버킷 배열 삽입

    숫자 배열 반환

    핵심: 해당 버킷 인덱스에 자릿수 삽입, 숫자 배열에 버킷 배열 할당 중요
*/

// let buckets = Array(10).fill([])
// 동일 배열 참고 중, 하나의 배열이 바뀌면 10개 배열 전부 바뀜
// let buckets = Array(10).fill([]).map(() => [])
// let buckets = Array.from({ length: 10 }, () => [])
// 위 두 코드로 독립적인 배열 생성 가능