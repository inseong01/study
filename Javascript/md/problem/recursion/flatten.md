# 알고리즘 문제 : Flatten

### 1. 문제 이해하기
배열의 배열을 받음    
모든 요소가 하나의 배열을 반환    
배열 안에 배열이 있으면 안 됨   

### 2. 구체적 예시
```
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
```

### 3. 세분화 - 문제 수행
```javascript
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
```

## 4. 해결 / 단순화
방법 1 - `flat()` O
```javascript
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
```

방법 2 - `flat()` X
```javascript
function flatten2(arr) {
  const flattenArr = [];

  // 방법 2)
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
```

## 5. 수정하기
**코드 수정**    
```javascript
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
  flatten3([[1], [2], [3]]);

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
```
`방법 1`은 `flat()`을 활용했지만 문제에서 `flat()` 함수를 불러올 수 없었다. 아마 출제자가 막아놓은 듯 했다. `flat()`을 사용하지 않고 배열을 다시 확인하는 함수로 `방법 2`를 설계했다. `arr[0]` 배열인지 확인하고 다음 요소로 넘어가는 것이 문제였는데 `arr.slice(1)`로 해결할 수 있었다.

답안으로 나온 해결방안은 `concat()`을 활용했다. 배열 길이 만큼 배열 요소를 확인한다. 배열 안에 배열이 있다면 배열이 아닐 때까지 반복하고 새로운 배열 변수에 `push()` 하여 중첩 배열을 평탄화한다. `for문`을 활용해서 조금 놀랐다. 

이전 해결방안과 크게 다른 점은 `for문`을 활용함으로써 배열 요소를 찾을 때만 재귀 함수가 적용된다.

## 코드
[재귀 함수 - flatten.js](../../../algorithm/problem/recursion/problem/flatten.js)