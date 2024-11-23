(() => {
    const inputs = document.querySelectorAll('div > .hole');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myFunction);
    }

    function myFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");

        function resetScore(state) {
            alert(state);
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (dead.textContent <= 10 && lost.textContent <= 5) {
            if (this.className === "hole hole_has-mole") {
                dead.textContent++;
            } else {
                lost.textContent++;
            }
        } else if (dead.textContent >= 10) {
            resetScore('Вы выиграли!');
        } else if (lost.textContent >= 5) {
            resetScore('Вы проиграли.');
        }
    }
})();
