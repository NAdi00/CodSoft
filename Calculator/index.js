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

var temp = "43746*87437-344378+43743-72476";
var my_array = [];

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

for(let i = 0; i < 10; i++) {
    checking(temp);
    if (check) {
        cutting(temp);
    }
}
cutting(temp + "*");
my_array.pop(my_array[-1]);

var check1 = false;

function checking_M(object) {
    for (const i in object) {
        if (object[i] == "*") {
            check1 = true;
            return
        }
    }
    check1 = false;
    return
}

for (let i = 0; i < 5; i++) {
    checking_M(my_array)
    console.log(check1);
}


function multi(my_array) {
    let index1 = my_array.indexOf("*");
    let a = index1-1;
    let b = index1+1;
    let current1 = my_array[a]*my_array[b];
    my_array[a] = current1;
    let c = b+1;
    my_array = my_array.slice(0, index1) +[" ", " "]+ my_array.slice(c);
    console.log(my_array);
    return
}
for (let i = 0; i < my_array.length; i++) {
    checking_M(my_array);
    if (check1) {
        multi(my_array);
    }
}
cutting(temp);
console.log(temp, 'after');
console.log(my_array);