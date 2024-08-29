export const setTimeoutPromise = (ms) => new Promise((resovle) => {
    setTimeout(resovle, ms);
});
export const makeLottoBalls = ($target, content) => {
    const span = document.createElement('span');
    span.style.margin = '0 10px';
    span.textContent = `${content}`;
    if (content < 10) {
        span.style.backgroundColor = 'red';
        span.style.color = 'white';
    }
    else if (content < 20) {
        span.style.backgroundColor = 'orange';
    }
    else if (content < 30) {
        span.style.backgroundColor = 'yellow';
    }
    else if (content < 40) {
        span.style.backgroundColor = 'blue';
        span.style.color = 'white';
    }
    else if (content >= 40) {
        span.style.backgroundColor = 'green';
        span.style.color = 'white';
    }
    $target.append(span);
};
//# sourceMappingURL=makeLottoBalls.js.map