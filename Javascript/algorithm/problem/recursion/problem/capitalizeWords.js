// 1. 문제 이해
/*
  단어 배열 받음
  각 단어가 대문자로 표시된 새 배열을 반환
*/


// 2. 구체적 예시
/*
  capitalizeWords1(['abc', 'def', 'ghi']) // [ 'ABC', 'DEF', 'GHI' ]
*/


// 3. 세분화
/*
  capitalizeFirst 문제 유사

  1. 내부함수 O
    변형 배열 저장 변수 선언  

    내부함수 선언
      배열 없으면 반환
      문자 변형, 변형 배열 변수에 추가
      내부함수 선언, 인자 배열 줄어듦

    변형 배열 변수 반환

  2. 내부함수 X
    배열 길이 1일 때 변형 문자 반환

    재귀함수 선언, 인자 배열 줄어듦, 배열로 반환, flat() 사용 
*/


// 4. 해결 / 단순화
// 1.
function capitalizeWords1(arr) {
  const capitalizeWordsArr = [];

  function getCaptializeWords1(arr) {
    if (arr.length < 1) return;
    capitalizeWordsArr.push(arr[0].toUpperCase());
    getCaptializeWords1(arr.slice(1));
  }
  getCaptializeWords1(arr)

  return capitalizeWordsArr;
}
console.log(capitalizeWords1(['abc', 'def', 'ghi']))

// 2.
function capitalizeWords2(arr) {
  if (arr.length < 2) return arr[0].toUpperCase();
  return [arr[0].toUpperCase(), capitalizeWords2(arr.slice(1))].flat();
}
console.log(capitalizeWords2(['abc', 'def', 'ghi']))


// 5. 수정하기
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}