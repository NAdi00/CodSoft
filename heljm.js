let input = "11233+345/45";
function simpleCalculator() {

  console.log(arr());
}
function arr(){
    input = [...input];
    return input;
}
simpleCalculator(arr())

// function plus(){
//     for(i of input){
//         if(input[i]=='+'){
//             return +;
//         }
//     }
// }

// function operations(input) {
//   const plus = "+";
//   const minus = "-";
//   let a;
//   let b;
//   for (let i = 0; i<input.length; i++) {
//     let start = i
//     if (input[i] == plus) {
//       a = Number(input.slice(0, i));
//     } else{
//       b = Number(input.slice(String(a).length+1, input.length));
//     }
//     console.log(a+b);
//   }
// //   const res = a+b;
// //   return res;
// }
// // simpleCalculator(input);
// const x = operations(input);
// console.log(x);
