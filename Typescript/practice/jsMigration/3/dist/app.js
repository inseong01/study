var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { checkInput } from './function/checkInput.js';
import { getGameMsg } from './function/getGameMsg.js';
import { makeLottoBalls, setTimeoutPromise } from './function/makeLottoBalls.js';
import { $bonus, $form, $input, $result } from './tag/tag.js';
let clicked = false;
$form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const enteredValue = $input.value;
    const numberArr = enteredValue.split(',').map(Number);
    if (clicked)
        return;
    clicked = true;
    const numbers = Array(45)
        .fill(0)
        .map((_, i) => i + 1);
    const randomNums = [];
    let resultNums = [];
    let bonusNum;
    for (let i = numbers.length; i > 0; i--) {
        const idx = Math.floor(Math.random() * numbers.length);
        const num = +numbers.splice(idx, 1).join('');
        randomNums.push(num);
    }
    resultNums = randomNums.splice(0, 6);
    bonusNum = randomNums[6];
    if (!checkInput(enteredValue)) {
        clicked = false;
        return;
    }
    for (let i = 0; i < resultNums.length; i++) {
        makeLottoBalls($result, resultNums[i]);
        yield setTimeoutPromise(1000);
    }
    makeLottoBalls($bonus, bonusNum);
    yield setTimeoutPromise(1000);
    getGameMsg(numberArr, resultNums, bonusNum);
    clicked = false;
}));
//# sourceMappingURL=app.js.map