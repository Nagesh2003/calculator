const display = document.getElementById("display");

function Appendtodisplay(input) {
    display.value += input;
}

function cal() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR";
    }
}

function cleardisplay() {
    display.value = "";
}
