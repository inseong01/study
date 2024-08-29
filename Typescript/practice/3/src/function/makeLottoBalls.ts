// 3. 당첨/보너스 숫자 게시
// 3-1. 시간 지연***
export const setTimeoutPromise = (ms: number) =>
  new Promise((resovle) => {
    setTimeout(resovle, ms);
  });
// 3-2. 반복 함수화
export const makeLottoBalls = ($target: Element, content: number) => {
  const span = document.createElement('span');
  span.style.margin = '0 10px';
  span.textContent = `${content}`;

  if (content < 10) {
    span.style.backgroundColor = 'red';
    span.style.color = 'white';
  } else if (content < 20) {
    span.style.backgroundColor = 'orange';
  } else if (content < 30) {
    span.style.backgroundColor = 'yellow';
  } else if (content < 40) {
    span.style.backgroundColor = 'blue';
    span.style.color = 'white';
  } else if (content >= 40) {
    span.style.backgroundColor = 'green';
    span.style.color = 'white';
  }
  $target.append(span);
};
