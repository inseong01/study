// 1. 문제 이해
/*
  앞으로 읽으나 뒤로 읽으나 동일한 문자인 경우 true 를 반환
*/


// 2. 구체적 예시
/*
  isPalindrome('awesome') // false
  isPalindrome('foobar') // false
  isPalindrome('tacocat') // true
  isPalindrome('amanaplanacanalpanama') // true
  isPalindrome('amanaplanacanalpandemonium') // false
*/


// 3. 세분화
/*
  문자열을 반으로 나누어 뒷 문자열을 뒤집어 앞 문자열과 비교

  끝나는 지점 인덱스 변수 선언
  뒤집힌 배열 변수 선언

  내부함수 이용
  인덱스 만큼 뒤집힌 문자열 반환

  문자열 길이가 홀수면
  홀수번째 인덱스까지 포함해서 비교

  문자열 길이가 짝수면
  짝수번째 인덱스 포함하지 않고 비교
*/


// 4. 해결 / 단순화
function isPalindrome(str) {
  const endPoint = parseInt(str.length / 2);
  const reverseArr = [];

  function getReverseArr(str, idx, endPoint) {
    if (endPoint > idx) return;
    reverseArr.push(str[idx]);
    getReverseArr(str, idx - 1, endPoint);
  }

  if (str.length % 2 === 0) {
    getReverseArr(str, str.length - 1, endPoint);
    return str.slice(0, endPoint) === reverseArr.join('') ? true : false;
  } else {
    getReverseArr(str, str.length, endPoint);
    return str.slice(0, endPoint + 1) === reverseArr.join('') ? true : false;
  }
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// 5. 수정하기
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}