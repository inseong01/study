import { sendWord } from './function/sendWord.js';
import { typeWord } from './function/typeWord.js';
import { state } from './state/state.js';
import { sendBtn, wordInput } from './tag/tag.js';

let initPlayerNumber = prompt('플레이어 수');
if (initPlayerNumber) {
  state.player = +initPlayerNumber;
} else {
  alert('3명으로 설정됩니다.');
}

wordInput.addEventListener('input', typeWord);
sendBtn.addEventListener('click', sendWord);
