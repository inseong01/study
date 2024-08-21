// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1 = 'Hi'; // 오류
num2.toUpperCase(); // 오류

// string
let str1: string = 'Hello';
let str2: string = 'Hello';

str1 = 123; // 오류
str2.toFixed(); // 오류

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// 다른 타입인데 null 값 사용하고 싶을 때
let numA: number = null; // strictNullChecks: false

// literal
let strA: 'Hi' = 'Hi'; // 값을 형으로 선언
let bool3: true = false; // 형과 값이 다르면 오류
