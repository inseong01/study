import { state } from '../state/state.js';
export const typeWord = function (event) {
    const target = event.target;
    state.newWord = target.value;
};
//# sourceMappingURL=typeWord.js.map