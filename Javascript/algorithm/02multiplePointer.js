// 1. 정렬되어 있는 arr 배열을 받고 중복되지 않은 값의 개수를 반환한다
// 2. 
//    [1, 1, 2, 3, 3, 4] // 4
//    [] // 0
// 3. 
//    length가 0 이면 0 반환
//
//    arr 배열을 순회
//      i, j 같다면 j++
//      i, j 다르면 arr[i+1] = arr[j], j++
//      j가 arr.length 도달했다면 
//        return arr.slice(0, i)

// 4. 해결 / 단순화
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
    } else {
      i += 1;
      arr[i] = arr[j];
      j += 1;
    }
    if (j === arr.length) {
      return i + 1;
    }
  }
}

// 5. 수정하기
// for 문 사용하기
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
