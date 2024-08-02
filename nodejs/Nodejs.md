# Node.js

### 목표

: 서버 구축, 실시간 데이터 이동 구현, 인터넷 동작 원리, 보안 지식 습득

### 공부방법

: 인터넷 강의로 입문하고 공식 문서 보기

### 학습내용

<details>
<summary>정리</summary>

- 응답 반환 설정  
  `response.end();`  
  : if else 문에서 중복 생략하기 위해 아래에 두었더니 한 박자 늦은 값 출력

- 패키지매니저 - pm2

  `pm2 start main.js --watch` : 파일 수정하면 자동 갱신  
   `pm2 logs` : 실시간 로그 확인 (ctrl + c : 나가기)

- form method="post"  
  : 발신 내용을 숨겨서 전송, 주소창에 드러나지 않음

- node에서 파일 추출/내보내기  
  : module.exports, require

- 링크 이동  
  : `{Location: ...}` 설정할 때 한글 주소 인식 오류

- 삽입공격 방지  
  : `path.parse().base`, `sanitize-html API`

</details>

<details>
<summary>의문점</summary>

- fs 함수 중첩  
  : 콜백지옥 되는 거 아닌 가?

- 파일 추출/내보내기  
  : es6/node `import`, `require` 차이점

</details>

### 톺아보기

- [fs 함수 중첩 - 콜백지옥 되는 거 아닌 가?](./md/fsCallbackHell.md)
- [파일 추출/내보내기 - ESM, CommonJS 차이점](./md/importExportDiff.md)
- [Method="post" - 어떻게 전송되는 가?](./md/method_post.md)
- [삽입공격 - 어떻게 막아야 할까?](./md/injectionAtt.md)

### 예제

[예제 1 - CRUD 구현(리팩토링)](./createNewServer/main.js)
