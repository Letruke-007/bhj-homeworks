const addText = function () {

    const output = document.getElementById("timer");
    output.textContent = output.textContent - 1;
    const timeNow = new Date(0, 0, 0, 0, 0, Number(output.textContent));
    document.getElementById("timer2").textContent = timeNow.toLocaleTimeString();
    if (output.textContent <= 0) {
        alert('Вы победили в конкурсе');
        clearInterval(intervalID);
    }
}

const intervalID = setInterval(addText, 1000);
