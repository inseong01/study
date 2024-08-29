import { $bonus, $input, $result } from '../tag/tag.js';

// 4. 당첨 판별(알림)
let cnt = 0;
export function getGameMsg(valueArr: number[], result: number[], bonus: number) {
  result.forEach((element) => {
    if (valueArr.includes(element)) {
      cnt += 1;
    }
  });

  if (cnt === 6) {
    alert('당~~~~~~첨~~~~~~~');
  } else if (cnt === 5) {
    if (valueArr.includes(bonus)) {
      alert('2등 당첨~~~~~~~');
    } else {
      alert('3등 당첨~~~~~~');
    }
  } else if (cnt === 4) {
    alert('4등 당첨~~~');
  } else if (cnt === 5) {
    alert('4등 당첨~');
  } else {
    alert('꽝');
  }
  // 4-1. 초기화
  $input.value = '';
  $result.textContent = '당첨 숫자: ';
  $bonus.textContent = '보너스 숫자: ';
}
