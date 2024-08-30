interface State {
  arr: number[];
  timeId?: ReturnType<typeof setTimeout>;
  startTime?: Date;
  endTime?: Date;
}

export const state: State = {
  arr: [],
};
