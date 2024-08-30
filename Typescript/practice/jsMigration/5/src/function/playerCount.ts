import { state } from '../state/state.js';
import { playerOrder } from '../tag/tag.js';

export const playerCount = () => {
  const num = parseInt(playerOrder.textContent!);
  if (num + 1 > state.player) {
    playerOrder.textContent = '1';
  } else {
    playerOrder.textContent = (num + 1).toString();
  }
};
