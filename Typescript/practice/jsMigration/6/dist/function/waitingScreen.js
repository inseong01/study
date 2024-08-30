import { state } from '../state/state.js';
import { $screen } from '../tag/tag.js';
export function waitingScreen() {
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    state.timeId = setTimeout(function () {
        $screen.classList.remove('ready');
        $screen.classList.add('now');
        state.startTime = new Date();
        $screen.textContent = '클릭하세요!';
    }, Math.floor(Math.random() * 5) * 1000);
}
//# sourceMappingURL=waitingScreen.js.map