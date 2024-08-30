import { state } from '../state/state.js';

export const typeWord = function (event: Event) {
  const target = event.target as HTMLInputElement;
  state.newWord = target.value;
};
