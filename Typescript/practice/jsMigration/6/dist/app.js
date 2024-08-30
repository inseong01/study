import { nowScreen } from './function/nowScreen.js';
import { readyScreen } from './function/readyScreen.js';
import { waitingScreen } from './function/waitingScreen.js';
import { $result, $screen } from './tag/tag.js';
$result.textContent = `현재속도 0ms 평균속도: 0ms`;
$screen.addEventListener('click', function (e) {
    const target = e.target;
    const className = target.classList.value;
    if (className === 'waiting') {
        waitingScreen();
    }
    else if (className === 'ready') {
        readyScreen();
    }
    else if (className === 'now') {
        nowScreen();
    }
});
//# sourceMappingURL=app.js.map