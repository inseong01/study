import { state } from '../state/state.js';
import { $operator, $result } from '../tag/tag.js';
export const calculator = () => {
    let { op, num1, num2 } = state;
    switch (op) {
        case '+': {
            const res = Number(num1) + Number(num2);
            $result.value = res.toString();
            break;
        }
        case '-': {
            const res = Number(num1) - Number(num2);
            $result.value = res.toString();
            break;
        }
        case 'x': {
            const res = Number(num1) * Number(num2);
            $result.value = res.toString();
            break;
        }
        case '/': {
            const res = Number(num1) / Number(num2);
            $result.value = res.toString();
            break;
        }
    }
    state.num1 = $result.value;
    state.num2 = '';
    state.op = '';
    $operator.value = '';
    state.minus = 1;
};
//# sourceMappingURL=calculator.js.map