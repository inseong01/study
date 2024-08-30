import { state } from '../state/state.js';
import { $result, $screen } from '../tag/tag.js';

export function nowScreen() {
  const { arr } = state;

  state.endTime = new Date();
  state.arr.push(Number(state.endTime) - Number(state.startTime));
  const topFive = arr.sort((a, b) => a - b).slice(0, 5);
  const average = Math.floor(arr.reduce((p, c) => c + p) / arr.length);

  $screen.classList.remove('now');
  $screen.classList.add('waiting');
  $screen.textContent = '클릭해서 시작하세요';
  $result.textContent = `현재속도 ${
    Number(state.endTime) - Number(state.startTime)
  }ms 평균속도: ${average}ms`;

  topFive.forEach((v, idx) => {
    $result.append(document.createElement('br'), `${idx + 1}위 ${v}ms`);
  });
}
