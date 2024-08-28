# 리액트 CRUD.tsx

## 문제해결
### 1. Not assignable to type 'MouseEventHandler<HTMLInputElement>'
`event` 마다 선언 타입 다름
```TypeScript
const onClickInput = (e: MouseEvent<HTMLInputElement>) => {
  switch (e.currentTarget.name) {
    case 'update':
      ...
      break;
    case 'delete':
      ...
      break;
  }
};
```
앞에서 사용했던 `onChange` 타입을 가져와서 `onClick` 함수 인자 타입으로 선언했다. `onClick`에 빨간줄이 그어졌다. `MouseEventHandler`로 변경했다. 이번에는 할당된 `target` 프로퍼티가 없다고 `target`에 오류가 떴다. 그렇지만 구현은 잘 됐다. 코드 상에서 오류가 뜰 뿐이었다. 알아보니 `Handler`를 제외하면 되었다. `target` 말고 `currentTarget`을 사용하면 `name` 프로퍼티를 오류 없이 사용할 수 있었다. 

### 2. No overload matches this call.
`Reducer` 반환값 오류  
``` TypeScript
switch(action.type) {
  ...
  case 'UPDATE':
    return todoList.map((list) => {
      if (list.id === action.id) {
        return { ...list, content: action.content };
      }
      return list; // 코드 한 줄로 해결
    });
  ...
}
```
`Reducer`는 변경된 상태를 내보내야 하는데 그러지 않은 상태라 선언한 `dispatch`는 모두 빨간줄이었다. 처음에는 부여한 인자 수가 달라서 오류가 나는 줄 알았다. 알고보니 `Reducer` 함수에 오류가 있었다. `update` 케이스에서 `if`문을 만족하면 값을 반환하지만 그러지 않은 경우에는 값을 반환하고 있지 않았다. 

### 3. 'dispatch' is possibly 'null'
```TypeScript
export const DispatchContext = createContext<{...} | null>(null);
```
`createContext`는 `null`을 인자로 받는다. 컨텍스트는 `Provider`로 상태를 쉽게 전달할 수 있지만 `null`을 전달 할 수 있다. `null`을 방지하기 위해 타입 좁히기로 한 번 감싸줘야 한다. 여기서 에러를 발생시켜야 `null`이 걸러진다.    

`return`은 `undefined`을 반환 할 수 있어서 `return`보다 `throw Error`를 사용해야 한다.

```TypeScript
export const DispatchExceptNull = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw Error; // 에러를 던지지 않으면 null 반환된다 (return X)
  return dispatch;
};
```

## 코드 
[메인 - App.tsx](../practice/1-2/src/App.tsx)    
[컴포넌트 - Edit.tsx](../practice/1-2/src/components/Edit.tsx)   
[컴포넌트 - List.tsx](../practice/1-2/src/components/List.tsx)   