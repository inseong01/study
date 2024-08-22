import { error } from 'console';

function unknownFn() {
  let a: unknown = 1;
  let child_a: number = 2;

  a = child_a;
  // child_a = a; // 부모(number) -> 자식(unknown) 타입 변환 오류
}

function neverFn() {
  function neverFn(): never {
    // while (true) {}
    throw error;
  }
  let never1: never;

  let a: string = neverFn();
  // never1 = a; // 부모 -> 자식 오류
}

function voidFn() {
  (): void => {};

  let voidVar: void = undefined; // 자식 -> 부모 가능
}

function anyFn() {
  // 다운 캐스팅 가능 (never 제외)
  let a: any = 1;
  let b: unknown = 10;
  let c: null = null;

  a = b;
  b = a;
  c = a;
}
