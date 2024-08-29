import { $input } from '../tag/tag.js';

// 2. 입력값 확인(!입력, 중복, 범위초과)
export function checkInput(enteredValue: string) {
  const numberArr: number[] = enteredValue.split(',').map(Number);

  if (!enteredValue) {
    alert('숫자를 입력해주세요.');
  } else if (numberArr.length !== 6) {
    alert('숫자 6자리를 입력해주세요.');
  } else if (new Set(numberArr).size !== 6) {
    alert('숫자가 중복됩니다.');
  } else if (numberArr.find((e) => e < 0 || e > 45)) {
    alert('1~45 사이의 숫자를 입력해주세요.');
  } else {
    return true;
  }

  $input.value = '';
  return false;
}
