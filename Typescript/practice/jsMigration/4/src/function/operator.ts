import { state } from '../state/state.js';
import { $operator, $result } from '../tag/tag.js';
import { calculator } from './calculator.js';

export function operator(e: Event) {
  const target = e.target as HTMLButtonElement;

  // 연속 계산
  if (state.num2) {
    calculator();
    state.op = target.value;
    $operator.value = state.op;
  }
  if (typeof target.textContent === 'string' && state.num1 && !state.op) {
    $operator.value = target.textContent;
    state.op = $operator.value;
    $result.value = '';
  }
  // 음수
  if (!state.num1 && target.textContent === '-') {
    return (state.minus = -1);
  }
  if (state.op === '-' && !state.num2 && target.textContent === '-') {
    return (state.minus = 1);
  } else if (state.op && !state.num2 && target.textContent === '-') {
    return (state.minus = -1);
  } else {
    return (state.minus = 1);
  }
}
