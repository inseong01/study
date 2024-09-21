# 알고리즘 문제 : AreThereDuplicates

### 1. 문제 이해하기
주어진 인수에 중복 수가 있는 지 참/거짓 반환

### 2. 구체적 예시
```
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
```

### 3. 세분화 - 문제 수행
```javascript
/*
    1. 빈도수 세기
      1. 나머지 인자로 배열 선언
      2. 빈도수 계산 (반복문)
          프로퍼티 값이 2 이상이면 true 반환
      3. false 반환
*/

/*
    2. 다중 포인터 
      1. 반복문
        1.1. 첫번째 두번째 요소 포함여부           
              포함되면 true 반환
              포함되지 않으면 다음 요소와 이전 요소 합침

              인덱스: [1] [2] >> [2] [3] >> [3] [4]
              값:  1 != 2 >> 12 != 3 >> 123 != 4 

      2. false 반환
*/

```

## 4. 해결 / 단순화
**빈도수 세기**
```javascript
function areThereDuplicates(...arr) {
  const obj = {};

  for (let key of arr) {
    obj[key] = ++obj[key] || 1;
    if (obj[key] >= 2) return true;
  }

  return false;
}
```

**다중 포인터**
```javascript
function areThereDuplicates(...arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (String(arr[i]).includes(String(arr[i + 1]))) return true;
    arr[i + 1] += String(arr[i]);
  }
  return false;
}
```

## 5. 수정하기
**다중 포인터**   
공간복잡도는 `O(1)`이지만 시간복잡도가 `O(n^2)`이다. `includes()` 때문에 반복문이 중첩된 결과다.    

인덱스의 반복적인 증가를 이용하여 인덱스 역할을 하는 `start`, `next` 두 개의 변수를 선언했다. `while`문으로 배열을 순회 하도록 적용했다. 수정된 코드도 모든 배열을 순회해야 함으로 시간 복잡도는 `O(n^2)`이다.   

반면에 `Set`은 고정된 `size`를 사용함으로 시간복잡도는 `O(n)`이다.

```
1. arr[start] 기준 삼아, arr[next] ~ arr[arr.length]까지 비교
2. start와 next가 일치하면 true 반환    
3. 아니면 다음 요소 확인, start++
4. next가 arr.length 수를 넘으면 start++, next = start+1
```

```javascript
function areThereDuplicates(...arr) {
  let start = 0;
  let next = 1;

  while (start < arr.length) {
    if (arr[start] === arr[next]) return true;
    next += 1;

    if (next > arr.length) {
      start += 1;
      next = start + 1;
    }
  }

  return false;
}
```

**또 다른 방법**    
중복된 요소는 저장하지 않는 `Set`의 특징을 이용
```javaScript
function areThereDuplicates(...arr) {
  return new Set(arr).size !== arr.length
}
```

## 코드
[알고리즘 코드 - areThereDuplicates.js](../../algorithm/problem/areThereDuplicates.js)