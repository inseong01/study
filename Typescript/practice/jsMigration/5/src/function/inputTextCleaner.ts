import { wordInput } from '../tag/tag.js';

export const inputTextCleaner = () => {
  wordInput.value = '';
  wordInput.focus();
};
