// 1. 문제 이해
/*
  중복되는 문자없이 고유한 문자만 포함되어 있는 문자열 길이 반환

  시간 O(n)
*/


// 2. 구체적 예시
/*
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
*/


// 3. 세분화
/*
  1. 문자열 없다면 0 반환
  2. start, end, obj, maxLen 초기화
  3. start가 str.length 이하면 반복
    3.1. obj[str[end]] 없고 end가 str.length 이하면
      obj 저장, end+=1
    3.2. obj[str[end]] 있고 end가 str.length 이하면 
      maxLen 할당, start+=1, end=start
    3.3. end가 str.length 초과하면
      maxLen 할당, 반복종료
  4. maxLen 반환

  "r i t h m s c h o o l"
    0 1 2 3 4 5 6
      0 1 2 3 4 5 
        0 1 2 3 4 
          0 1 2 3 
            0 1 2 3 4
              0 1 3 4 
                0 1 2 
                  0 1
                    0
                      0 1

*/


// 4. 해결 / 단순화
function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let obj = {};

  if (str === '') return 0;

  while (start < str.length) {
    if (!obj[str[end]] && str[end] !== undefined) {
      obj[str[end]] = 1;
      end += 1;
    } else if (end < str.length) {
      maxLen = Math.max(maxLen, end - start);
      start += 1;
      end = start;
      obj = {};
    } else {
      maxLen = Math.max(maxLen, end - start);
      break;
    }
  }

  return maxLen;
}


console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6


// 5. 수정하기
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
/*
          'r  i  t  h  m  s  c  h  o  o  l'
i          0  1  2  3  4  5  6  7  8  9  10
char       r  i  t  h  m  s  c  h  o  o  l
start      0  0  0  0  0  0  0  7     9    
longest    1  2  3  4  5  6  7  7  7  7  7
seen[char] 1  2  3  4  5  6  7  8  9  10 11
*/