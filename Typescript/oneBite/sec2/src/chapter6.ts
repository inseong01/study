// any
// 특정 변수의 타입을 모를 때
// 주의 - 런타임 때 오류 알림
let anyVar: any = 15;
anyVar = 'Hi';
anyVar = () => {};
// anyVar.toUpperCase(); // 런타임 에러

// unknown
// 값 형태를 사용하고자 할 때
let unknownVar: unknown;
unknownVar = 5;
unknownVar = 'string';
// unknownVar.toUpperCase(); // 값 변환 에러

let num1: number = 2;
// num1 = unknownVar; // 할당 에러
