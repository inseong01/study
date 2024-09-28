// 1. 문제 이해
/*
  배열의 배열을 받음
  모든 요소가 하나의 배열을 반환
  배열 안에 배열이 있으면 안 됨
*/


// 2. 구체적 예시
/*
  flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  flatten([[1],[2],[3]]) // [1,2,3]
  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/


// 3. 세분화
/*
  1. 평탄화 배열 변수 선언

  2. 내부 함수 선언
    방법 1)
      arr[0] 요소가 배열이 아니면
        push
      arr[0] 요소가 배열이면
        arr[0] 단계에 있는 arr 전부 flat()

    방법 2)
      arr[0] 요소가 배열이 아니면
        평탄화 배열에 arr[0] 인자 push
        배열 줄어든 인자로 다음 요소 확인
      arr[0] 요소가 배열이면
        arr[0] 인자, 한번더 확인
        배열 줄어든 인자, 다음 요소 확인

  3. arr.length가 0일 때까지 반복

  4. 변수 반환
*/


// 4. 해결 / 단순화
// 방법 1)
function flatten(arr) {
  const flattenArr = [];

  function getFlattenArr(arr) {
    if (arr.length < 1) return;

    if (Array.isArray(arr[0])) {
      return getFlattenArr(arr.flat());
    } else {
      flattenArr.push(arr[0]);
      return getFlattenArr(arr.slice(1))
    }
  }
  getFlattenArr(arr)

  return flattenArr;
}

// 방법 2)
function flatten2(arr) {
  const flattenArr = [];

  function getFlattenArr(arr) {
    if (arr.length < 1) return;

    if (Array.isArray(arr[0])) {
      getFlattenArr(arr[0]);
      return getFlattenArr(arr.slice(1));
    } else {
      flattenArr.push(arr[0]);
      return getFlattenArr(arr.slice(1))
    }
  }
  getFlattenArr(arr)

  return flattenArr;
}

console.log(2, flatten2([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(2, flatten2([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(2, flatten2([[1], [2], [3]])) // [1,2,3]
console.log(2, flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


// 5. 수정하기
function flatten3(oldArr) {
  var newArr = []
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten3(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}

/*
  [[1], [2], [3]]

concat(flatten(oldArr[0])) // 1. [[1]] -> [1]
  push(oldArr[0]) // 1
  return newArr // [1]
concat(flatten(oldArr[1])) // 2. [1, [2]] -> [1, 2]
  push(oldArr[0]) // 2
  return newArr // [2]
concat(flatten(oldArr[2])) // 3. [1, 2, [3]] -> [1, 2, 3]   
  push(oldArr[0]) // 3
  return newArr // [3]
  
*/