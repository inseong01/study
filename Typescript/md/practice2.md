# JS 클래스 - Drag & Drop
JS Class - Drag & Drop

## 문제해결
### 1. 입력값 검증 함수 재사용
```TypeScript
// 검증 기준 타입 선언
interface Validation { 
  value: string | number;
  require?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
}
```
검증이 필요한 기준들을 타입으로 선언하고 검증할 값 외에는 선택적으로 받게 한다. `value`는 검증해야 할 값이 들어간다. 검증 함수를 생성하고 조건문으로 값을 검증한다. 조건문에 논리연산자를 추가하여 검증 기준 값이 없다면 해당 기준을 검사하는 조건문은 실행되지 않는다.
```TypeScript
// 검증 기준값 부여
const titleValidation: Validation = {
  value: enteredTitle,
  maxlength: 10,
  minlength: 1,
};
```   
```TypeScript
// 검증 함수
function validate(obj: Validation): boolean {
  let validValue = true;
  // 필수값 입력 했는지
  if (obj.require) {
    validValue = obj.require && !!obj.value;
  }
  // 최대 길이 이하인지
  if (typeof obj.value === 'string' && obj.maxlength) {
    validValue = obj.maxlength >= obj.value.trim().length;
  }
  ...
  return validValue;
}
```   
검증타입과 함수는 하나 정도 만들어 두고 사용하면 유용할듯 싶다. 검증함수를 생성할 때 검증값 타입을 유의해야 한다. `typeof`로 확인하여 타입 좁히기를 해야 정확한 동작을 할 수 있다.

### 2. `HTMLElement`는 `HTMLDivElement`의 부모다
```TypeScript
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  ...
}
```
`HTMLDivElement`를 제네릭 변수 타입으로 선언했을 때 `<T, U>` `T`를 무조건 `HTMLDivElement`으로 선언해야 했다. `<U>` 타입은 다른 타입으로 선언되어도 빨간줄이 그어지지 않았다. 알고보니 `HTMLElement`는 `HTMLDivElement`의 부모여서 받아드릴 수 있었다. 다시 두 제네릭 변수를 `HTMLElement`로 변경했고 함수는 원활하게 동작했다.

### 3. lite-server, import/export 사용방법 
코드를 한 페이지에 작성하고 분리하기 위해 `import` `export`를 사용했다.
```
error TS2306: ... is not a module.
```
터미널 창에서 모듈이 읽히지 않았다. `package.json`에서 타입을 `module`로 `tsconfig.json`에서 모듈을 `ES2015`로 변경했다. 
```
error TS2792: Cannot find module 'undici-types
```
또 다른 에러가 발생했다. 에러 메시지가 나온대로 `tsconfig.json`에서 `"moduleResolution": "nodenext"` ` "module": "NodeNext"`으로 변경했다.
```
app.js:1  Uncaught SyntaxError: Cannot use import statement outside a module
``` 
아직도 에러가 발생했다. 실행 중이던 `tsc` 터미널에서는 오류가 생기지 않았다. `HTML` 문제였다. `js` 파일을 호출할 때 타입을 모듈로 설정해서 간단히 해결했다. 


## 코드 
### main    
[App.ts](../practice/2/src/app.ts)    

### components    
[base-components.ts](../practice/2/src/components/base-components.ts)   
[project-input.ts](../practice/2/src/components/project-input.ts)   
[project-item.ts](../practice/2/src/components/project-item.ts)   
[project-list.ts](../practice/2/src/components/project-list.ts)   

### modules     
[drag-drop.ts](../practice/2/src/modules/drag-drop.ts)   
[project.ts](../practice/2/src/modules/project.ts)   

### state   
[project.ts](../practice/2/src/state/project-state.ts)   

### util    
[validation.ts](../practice/2/src/util/validation.ts)   