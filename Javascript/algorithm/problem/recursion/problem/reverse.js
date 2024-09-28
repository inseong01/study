// 1. 문제 이해
/*
  역순 문자열을 반환
*/


// 2. 구체적 예시
/*
  reverse('awesome') // 'emosewa'
  reverse('rithmschool') // 'loohcsmhtir'
*/


// 3. 세분화
/*
  helper 함수 사용
  내부 함수 사용

  문자열 길이 만큼 반복

  반복 횟수 0이면 반환
  외부 변수에 뒷글자 push

  변수 문자열화 후 반환
*/


// 4. 해결 / 단순화
function reverse(str) {
  const reverseArr = []

  function getReverseArr(str, count) {
    if (count < 0) return;
    reverseArr.push(str[count]);
    getReverseArr(str, count - 1);
  }

  getReverseArr(str, str.length - 1);

  return reverseArr.join('');
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'


// 5. 수정하기
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}