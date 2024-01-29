var input = document.getElementById("input");
var current = "";

function clearing() {
    current = "";
    input.value = null;
}
function one() {
    current += 1;
    input.value = current;
}
function two() {
    current += 2;
    input.value = current;
}
function three() {
    current += 3;
    input.value = current;
}
function four() {
    current += 4;
    input.value = current;
}
function five() {
    current += 5;
    input.value = current;
}
function six() {
    current += 6;
    input.value = current;
}
function seven() {
    current += 7;
    input.value = current;
}
function eight() {
    current += 8;
    input.value = current;
}
function nine() {
    current += 9;
    input.value = current;
}
function back() {
    current = current.slice(0, -1);
    input.value = current;
}
function plus() {
    current += '+';
    input.value = current;
}
function multi() {
    current += '*';
    input.value = current;
}
function minus() {
    current += '-';
    input.value = current;
}
function divide() {
    current += '/';
    input.value = current;
}

///////////////////////ANSWER

function answer() {
    console.log(Number(current));
}
