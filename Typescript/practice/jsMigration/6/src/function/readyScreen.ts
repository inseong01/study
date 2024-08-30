import { state } from '../state/state.js';
import { $screen } from '../tag/tag.js';

export function readyScreen() {
  clearTimeout(state.timeId);

  $screen.textContent = '너무 일찍 클릭했어요';
  $screen.classList.remove('ready');
  $screen.classList.add('waiting');
}
