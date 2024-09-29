// 1. 문제 이해
/*
  문자열 배열이 주어짐
  문자열의 첫글자 대문자 변환
  변환된 문자열 배열 반환
*/


// 2. 구체적 예시
/*
  capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/


// 3. 세분화
/*
  ['car','taco','banana']
    0     1      2
    012   0123   012345

  1. 내장 함수 활용
    변형된 배열 저장 변수 선언

    배열 요소 하나씩 받는 내부 함수
      첫번째 문자 대문자화 + 첫번째 이후 문자열, 배열 변수에 추가

   변형된 배열 저장 변수 반환

  2. 순수 재귀 함수
    배열 첫번째 요소 문자 변형 변수 선언

    문자열 길이가 1이하면 변형 변수 반환

    변형 변수, 재귀 함수 배열로 반환
*/


// 4. 해결 / 단순화
function capitalizeFirst1(arr) {
  const upperCaseArr = [];

  function getUpperCaseArr(arr) {
    if (arr.length < 1) return;
    upperCaseArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    getUpperCaseArr(arr.slice(1))
  }
  getUpperCaseArr(arr)

  return upperCaseArr
}

function capitalizeFirst2(arr) {
  const upperCaseStr = arr[0][0].toUpperCase() + arr[0].slice(1);

  if (arr.length < 2) return upperCaseStr;
  return [upperCaseStr, capitalizeFirst2(arr.slice(1))].flat(); // flat() 함수 undefined
}

console.log(capitalizeFirst2(['car', 'taco', 'banana']));


// 5. 수정하기
function capitalizeFirst3(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}