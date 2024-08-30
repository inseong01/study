interface State {
  word: string;
  newWord: string;
  player: number;
}
export const state: State = {
  word: '',
  newWord: '',
  player: 3 /* prompt('몇 명?'); */,
};
