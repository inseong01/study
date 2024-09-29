// 1. 문제 이해
/*
  객체를 받아 숫자인 모든 값을 문자열로 변환
*/


// 2. 구체적 예시
/*
  let obj = {
      num: 1,
      test: [],
      data: {
          val: 4,
          info: {
              isRight: true,
              random: 66
          }
      }
  }

  stringifyNumbers(obj)

  {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  }
*/


// 3. 세분화
/*
  1. obj의 keys 선언 (num, test, data)

  2. keys 순회
    obj[keys]가 숫자면 문자화
    오브젝트면 재귀함수 실행
    아니면 다음 요소 순회

  3. obj 반환
*/


// 4. 해결 / 단순화
function stringifyNumbers(obj) {
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'number') {
      obj[keys[i]] = String(obj[keys[i]]);
    } else if (typeof obj[keys[i]] === 'object' && !Array.isArray(obj[keys[i]])) {
      stringifyNumbers(obj[keys[i]]);
    }
  }

  return obj
}

let obj = {
  num: 1,
  test: [1],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(1, stringifyNumbers(obj))


// 5. 수정하기
function stringifyNumbers2(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers2(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(2, stringifyNumbers2(obj))