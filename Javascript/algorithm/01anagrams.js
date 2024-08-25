function anagrams(str1, str2) {
  // 2개의 문자열을 비교하여 같은 문자가 있는지 판별
  // 대소문자 X, 여백 X, 단어 O
  // boolean 반환

  /**
   * 1) 빈도수 세기 패턴
   * 
   * 1.1) 더한 값 일치 비교
   * 문자열 길이 다르면 거짓 반환
   * 
   * 문자 개수 센 객체 두 개 생성(str1, str2)
   * 
   * 문자로 된 객체 키 배열 생성
   * 
   * 문자 객체 비교 반복문
   *   str1이 str2의 문자를 포함하고 있나
   *   str1과 str2의 객체 키-값이 맞나 
  */

  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let char of str1) {
    const c = char.toLowerCase();
    obj1[c] = ++obj1[c] || 1; // 전위연산자로 적용해야 됨
  }
  for (let char of str2) {
    const c = char.toLowerCase();
    obj2[c] = ++obj2[c] || 1;
  }

  const obj1Arr = Object.keys(obj1)
  const obj2Arr = Object.keys(obj2)

  for (let i = 0; i < obj1Arr.length; i++) {
    if (!obj1Arr.includes(obj2Arr[i])) return false;
    if (obj1[obj1Arr[i]] !== obj2[obj1Arr[i]]) return false;
  }
  return true;
}

function anagrams2(str1, str2) {
  /**
   * 1.2) 더한 값에서 빼서 0인지 비교
   * 문자열 길이 다르면 반환
   * 
   * 문자 개수 센 객체 하나 생성(str1)
   * 
   * 문자 객체 비교 반복문(str2)
   *   str1[str2] 값이 없으면 거짓
   *   str1이 str2 값의 키가 있다면 -1
   * 
   * 반복문 끝나면 참
  */

  if (str1.length !== str2.length) return false;

  const obj1 = {};

  for (let char of str1) {
    obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
  }

  for (let char of str2) {
    if (!obj1[char]) return false;
    obj1[char] -= 1;
  }

  return true;
}

console.log(anagrams2('azz', 'aza'))