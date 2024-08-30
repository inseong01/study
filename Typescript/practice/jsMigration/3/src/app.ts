import { checkInput } from './function/checkInput.js';
import { getGameMsg } from './function/getGameMsg.js';
import { makeLottoBalls, setTimeoutPromise } from './function/makeLottoBalls.js';
import { $bonus, $form, $input, $result } from './tag/tag.js';

/* Main */
let clicked = false;
$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // 입력값 저장
  const enteredValue: string = $input.value;
  const numberArr: number[] = enteredValue.split(',').map(Number);

  // 0.연속실행 차단
  if (clicked) return;
  clicked = true;
  const numbers = Array(45)
    .fill(0)
    .map((_, i) => i + 1); // _ : 컴파일 할 때 사용하지 않는 인자로 식별한다

  // 1. 랜덤값 생성
  const randomNums: number[] = [];
  let resultNums: number[] = [];
  let bonusNum: number;

  for (let i = numbers.length; i > 0; i--) {
    const idx = Math.floor(Math.random() * numbers.length);
    const num = +numbers.splice(idx, 1).join('');
    randomNums.push(num);
  }
  // 1-1. 랜덤값 결정
  resultNums = randomNums.splice(0, 6);
  bonusNum = randomNums[6];

  // 2. 입력값 확인(!입력, 중복, 범위초과)
  if (!checkInput(enteredValue)) {
    clicked = false;
    return;
  }

  // 3. 당첨/보너스 숫자 게시
  for (let i = 0; i < resultNums.length; i++) {
    makeLottoBalls($result, resultNums[i]);
    await setTimeoutPromise(1000);
  }
  makeLottoBalls($bonus, bonusNum);
  await setTimeoutPromise(1000);

  // 4. 당첨 판별(알림)
  getGameMsg(numberArr, resultNums, bonusNum);
  clicked = false;
});
