# Differences bewteen ESM and CJS

## 의문점

<p align="center" >
1. module.exports / export default
<br/>
2. require / import from
<br/>
서로 차이점이 뭔가?
</p>

## 참고자료

[Why CommonJS and ES Modules Can’t Get Along - Dan Fabulich](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)  
[자바스크립트 ES 모듈 내보내기/불러오기 - DaleSeo](https://www.daleseo.com/js-module-import/)  
[CommonJS와 ES Module의 차이점과 선택 기준 - F-Lab](https://f-lab.kr/insight/commonjs-vs-esmodule-20240523)  
[[JS/Module] CommonJS와 ES Modules는 무엇일까?- Mong dev blog](https://mong-blog.tistory.com/entry/JSModule-CommonJS%EC%99%80-ES-Modules%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)  
[CJS의 ESM 적용과 동작원리에 기반한 트리쉐이킹 효율성 이해하기](https://velog.io/@pengoose_dev/CJS%EC%99%80-ESM)

## 정리내용

### 1. CJS / ESM 은 무엇인가?

- ### CJS

  : CommonJS, 주로 Node.js 환경에서 사용된다.  
   파일을 내보내거나 가져올 때 `module.exports/require`를 사용한다.

  ```javascript
  // add.js
  function add(x, y) {
    return x + y;
  }
  module.exports = add; // default 내보내기

  // main.js
  const add = require("./add.js");
  add(1, 3); // 4 (출력 X)
  ```

- ### ESM

  : ECMAScript Module, ES6(2015)에서 도입되었다.  
  파일을 내보내거나 가져올 때 `export/import`를 사용한다.

  ```javascript
  // add.js
  function add(x, y) {
    return x + y;
  }
  export default add;

  // main.js
  import add from "./add.js";
  add(1, 3); // 4 (출력 X)
  ```

### 2. CJS / ESM 둘의 차이점은?

: CJS는 동기적으로 파일을 불러오기 때문에 불러오기 전까지 다음 코드를 실행하지 않는다. 반면에 ESM은 비동기적으로 실행되어서 브라우저 환경에서 사용하기 적합하다. 그리고 정적 분석으로 사용되지 않는 코드를 제거 할 수 있다.

- CJS : 동기처리, 동적분석, 트리쉐이킹 비효율적
- ESM : 비동기처리, 정적분석, 트리쉐이킹 효율적

  - 파일 처리과정 흐름  
    : 파싱 -> 분석 -> 번들링 -> 컴파일 -> 실행

  - 동적분석  
    : 모듈이 실행 될 때 분석
  - 정적분석  
    : 모듈이 컴파일 될 때 분석
  - 트리쉐이킹  
    : 모듈 번들링 과정에서 불필요한 코드를 식별하고 제거하는 기법

### 3. ESM 주의사항

- 파일 확장자  
  : ES6 모듈을 사용하려면, 파일을 .js로 저장하고, 모듈 로딩을 지원하는 환경에서 실행해야 한다.

  1. 브라우저에서는 `<script type="module" src="main.js"></script>` 사용
  2. Node.js에서는 `--experimental-modules` 플래그를 사용하거나 `.mjs` 확장자 사용

- Node.js에서 ES6 모듈 사용  
  : package.json 파일에 `"type": "module"`을 추가하거나, `.mjs` 확장자를 사용해야 한다.

## 결론

<p align=center>
module.exports / require는 동기처리
<br>
export / import는 비동기처리
</p>
