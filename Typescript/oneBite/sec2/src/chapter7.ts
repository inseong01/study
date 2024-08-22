// void
// 반환 값이 없음(= undefined)
function func1(): void {
  console.log('void');
  // return 1; // 반환값이 있을 때 오류
}

// never
// 할당할 수 없음
let a: never;
// a = 1;
// a = '';
// a = () => {};
// a = undefined;
