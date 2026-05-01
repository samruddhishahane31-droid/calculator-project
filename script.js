let display = document.getElementById("display");

// Sounds
let clickSound = document.getElementById("clickSound");
let typeSound = document.getElementById("typeSound");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function playType() {
    typeSound.currentTime = 0;
    typeSound.play();
}

// Button functions
function appendValue(value) {
    playClick();
    display.value += value;
}

function clearDisplay() {
    playClick();
    display.value = "";
}

function deleteLast() {
    playClick();
    display.value = display.value.slice(0, -1);
}

function calculate() {
    playClick();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    let key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        playType();
        display.value += key;
    }

    else if (key === "Enter") {
        playType();
        calculate();
    }

    else if (key === "Backspace") {
        playType();
        deleteLast();
    }

    else if (key === "Escape") {
        playType();
        clearDisplay();
    }
});
