var input = document.getElementById("input");
var current = "";
var temp = "";
var my_array = [];
var aaa = document.body;

document.addEventListener('keydown', (event) => {
    ////////// Add pressed key to input value and current string
    if ((event.key >= '0' && event.key <= '9') || (event.keyCode >= 48 && event.keyCode <= 57)) {
        ////////// Add pressed number to input value and current string when number is pressed
        console.log(`You pressed the number key ${event.key}.`);
        current += event.key;
        input.value = current;
    }
    if (event.key == "*" || event.key == "-" || event.key == "+" || event.key == "/" ) {
        // Add pressed sign to input value and current string
        console.log(`You pressed the number key ${event.key}.`);
        current += event.key;
        input.value = current;
    }
    if (event.key == 'backspace') {
        //Remove last element from input when backspace button is pressed
        current  = current.slice(0, -1);
        input.value = current;
    }
})

/////These functions will run when each button on the screen is clicked
//////-- The will update current string and input value 
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
function clearing() {
    temp = "";
    my_array = [];
    current = "";
    return input.value = null;
}

////////////////Adjust values that has a negative sign/ preceedor of minus
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

///This two functions convert (current) string/input string to Array(my_array)
var check = false;
function checking_operations(object) {
    for (const i in object) {
        if (object[i] == "*" || object[i] == "/" || object[i] == "+" || object[i] == "-") {
            check = true;
            return;
        }
    }
    check = false;
    return
}
function Convert_String_to_Array(object) {
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

//////////Functions to perfom multiplication assignments 
var checkM = false;
function checking_Multiple_operations(object) {
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

//////////Functions to perform division assignments
var checkD = false;
function checking_Division_operations(object) {
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

/////////This function perfom all additions operations/assignments 
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

/////////////////////MAIN FUNCTION///////////////////////MAIN FUNCTION/////////////////
function answer() {

    temp = input.value;

    checking_operations(temp);
    while (check) {
        Convert_String_to_Array(temp);
        checking_operations(temp);
    }

    Convert_String_to_Array(temp + "*");
    my_array.pop(my_array[-1]);

    console.log(my_array);

    checking_Division_operations(my_array);
    while (checkD) {
        dividing(my_array);
        checking_Division_operations(my_array);
    }

    checking_Multiple_operations(my_array);
    while (checkM) {
        multipliying(my_array);
        checking_Multiple_operations(my_array);
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
