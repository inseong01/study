// 1. 문제 이해
/*
  객체에서 모든 짝수의 합계를 반환
*/


// 2. 구체적 예시
/*
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10
*/


// 3. 세분화
/*
  1. 합 변수 선언

  2. 내장 함수 선언
      obj keys 변수 선언

      keys 순회
        obj[keys[i]]가 짝수면
          obj[keys[i]] 반환
        object면
          내장 함수 실행
        아니면
          배열 계속 순회
  
  3. 합 반환
*/


// 4. 해결 / 단순화
function nestedEvenSum(obj) {
  let num = 0;

  function addNumber(obj) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      console.log(keys, keys[i])
      if (typeof obj[keys[i]] === 'number' && obj[keys[i]] % 2 === 0) {
        num += obj[keys[i]];
      } else if (typeof obj[keys[i]] === 'object') {
        addNumber(obj[keys[i]])
      }
    }
  }
  addNumber(obj);

  return num
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))


// 5. 수정하기
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

/*
  1. 객체 순회
    객체면
      합 변수에 재귀함수 할당
    짝수면
      값을 합 변수에 할당
      
  2. 합 변수 반환
*/