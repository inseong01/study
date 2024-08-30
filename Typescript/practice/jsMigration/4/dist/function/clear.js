import { $operator, $result } from '../tag/tag.js';
export const clr = (state) => {
    return () => {
        let { op, minus, num1, num2 } = state;
        num1 = '';
        num2 = '';
        op = '';
        minus = 1;
        $result.value = '';
        $operator.value = '';
        state = { op, minus, num1, num2 };
    };
};
//# sourceMappingURL=clear.js.map