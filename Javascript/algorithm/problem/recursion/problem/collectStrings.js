// 1. 문제 이해
/*
  객체 받음
  문자열에 해당하는 객체의 모든 값을 배열로 반환
*/


// 2. 구체적 예시
/*
  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
  }

  collectStrings(obj) // (["foo", "bar", "baz"])
*/


// 3. 세분화
/*
  1. 빈 배열 선언

  2. 내부 함수 선언
    obj의 key 배열 keys 변수 선언

    keys 순회
      obj[key]가 문자열이면
        빈 배열에 추가
      객체면
        내부 함수 실행
      아니면
        순회
  
  3. 배열 변수 반환
*/


// 4. 해결 / 단순화
function collectStrings(obj) {
  const strArr = [];

  function addString(obj) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      if (typeof obj[keys[i]] === 'string') {
        strArr.push(obj[keys[i]]);
      } else if (typeof obj[keys[i]] === 'object') {
        addString(obj[keys[i]]);
      }
    }
  }
  addString(obj);

  return strArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)) // (["foo", "bar", "baz"])

// 5. 수정하기
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}