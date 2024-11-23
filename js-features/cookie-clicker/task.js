const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let lastClick = new Date();
let clickCount = 0;

cookie.onclick = function () {
    cookie.width = ++clickerCounter.textContent % 2 ? 150 : 200;
    cookie.height = cookie.width
    clickCount++;
    clickerSpeed.textContent = (1 / (new Date() - lastClick) * 1000).toFixed(2);
    lastClick = new Date();
}
