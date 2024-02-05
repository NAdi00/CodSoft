var input = document.getElementById("input");
var current = "";

var aaa = document.body;

document.addEventListener('keydown', (event) => {
    if ((event.key >= '0' && event.key <= '9') || (event.keyCode >= 48 && event.keyCode <= 57)) {
        // Do something when a number key is pressed
        console.log(`You pressed the number key ${event.key}.`);
        current += event.key;
        input.value = current;
    }
    if (event.key == "*" || event.key == "-" || event.key == "+" || event.key == "/" ) {
        // Do something when a number key is pressed
        console.log(`You pressed the number key ${event.key}.`);
        current += event.key;
        input.value = current;
    }
    if (event.key == 'backspace') {
        current  = current.slice(0, -1);
        input.value = current;
    }
})

function zero() {
    current += 0;
    input.value = current;
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

var signing = 1;
var count  = 0
function sign() {
    count += 1;
    if (count % 2 == 0) {
        signing = 1;
    }else {
        signing = -1;
    }
}

var temp = "";
var my_array = [];

function clearing() {
    temp = "";
    my_array = [];
    current = "";
    return input.value = null;
}

var check = false;
function checking(object) {
    for (const i in object) {
        if (object[i] == "*" || object[i] == "/" || object[i] == "+" || object[i] == "-") {
            check = true;
            return;
        }
    }
    check = false;
    return
}

function cutting(object) {
    let object1 = "";
    for (const i in object) {
        if (object[i] == "*" || object[i] == "/" || object[i] == "+" || object[i] == "-") {
            if (signing == -1) {
                object1 = Number(object.slice(0, i))*-1;
                if (object[i] == "-") {
                    signing = -1;
                }else {
                    signing = 1;
                }
            }
            else {
                object1 = object.slice(0, i);
                if (object[i] == "-") {
                    signing = -1;
                }else {
                    signing = 1;
                }
            }
            my_array.push(Number(object1));
            my_array.push(object[i]);
            let index = Number(i) + 1; 
            temp = object.slice(index);
            return
            
        }
    }
}

var checkM = false;

function checking_M(object) {
    for (const i in object) {
        if (object[i] == "*") {
            checkM = true;
            return
        }
    }
    checkM = false;
    return
}

function multipliying(my_array) {
    for(let i = 0; i < my_array.length; i++) {
        if (my_array[i] == "*") {
            my_array[i-1] = my_array[i-1]*my_array[i+1];
            my_array.splice(i, 2);
            console.log(my_array, 'multi');
        }
    }
}

var checkD = false;

function checking_D(object) {
    for (const i in object) {
        if (object[i] == "/") {
            checkD = true;
            return
        }
    }
    checkD = false;
    return
}

function dividing(my_array) {
    for(let i = 0; i < my_array.length; i++) {
        if (my_array[i] == "/") {
            my_array[i-1] = my_array[i-1]/my_array[i+1];
            my_array.splice(i, 2);
            console.log(my_array, 'divide');
        }
    }
}

function adding(my_array) {
    var answer = 0;
    if (my_array.length > 0) {
        for(let i = 0; i < my_array.length; i++) {
            answer += my_array[i];
        }
        // input.value = answer;
        console.log(answer);
        input.value = answer;
    }
}

function answer() {

    temp = input.value;

    checking(temp);
    while (check) {
        cutting(temp);
        checking(temp);
    }

    cutting(temp + "*");
    my_array.pop(my_array[-1]);

    console.log(my_array);

    checking_D(my_array);
    while (checkD) {
        dividing(my_array);
        checking_D(my_array);
    }

    checking_M(my_array);
    while (checkM) {
        multipliying(my_array);
        checking_M(my_array);
    }

    for (let i = 0; i < my_array.length; i++) {
        if (my_array[i] == "+" || my_array[i] == "-") {
            my_array.splice(i, 1)
        }
    }

    console.log(my_array);

    adding(my_array);

    temp = "";
    my_array = [];
    current = "";
}