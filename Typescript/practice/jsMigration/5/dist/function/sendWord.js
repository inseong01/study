import { state } from '../state/state.js';
import { text } from '../tag/tag.js';
import { inputTextCleaner } from './inputTextCleaner.js';
import { playerCount } from './playerCount.js';
export const sendWord = function () {
    const { word, newWord } = state;
    if (!word && newWord.length === 3) {
        state.word = state.newWord;
        text.textContent = state.word;
        playerCount();
    }
    else if (newWord.length != 3) {
        alert('3글자');
        inputTextCleaner();
    }
    else if (word[word.length - 1] === newWord[0] && newWord.length === 3) {
        state.word = state.newWord;
        text.textContent = state.word;
        playerCount();
    }
    inputTextCleaner();
};
//# sourceMappingURL=sendWord.js.map