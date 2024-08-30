import { state } from '../state/state.js';
import { $result } from '../tag/tag.js';

export function onClickNumber(e: Event) {
  const target = e.currentTarget as HTMLButtonElement;
  let { op, minus } = state;

  if (!op && minus === 1) {
    const prev = Number(target.textContent);
    $result.value += prev;
    state.num1 = $result.value;
  } else if (!op && minus === -1) {
    const prev = Number(target.textContent);
    $result.value += prev * -1;
    state.num1 = $result.value;
    state.minus = 1;
  } else if (op && minus === -1) {
    const prev = Number(target.textContent);
    $result.value += prev * -1;
    state.num2 = $result.value;
    state.minus = 1;
  } else {
    const prev = Number(target.textContent);
    $result.value += prev;
    state.num2 = $result.value;
  }
}
