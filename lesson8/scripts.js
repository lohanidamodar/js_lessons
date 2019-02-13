//var vs let

if(true) {
    var b = 20;
    console.log(b); //20
}
console.log(b); //20


if (true) {
    let a = 40;
    console.log(a); //40
}
// console.log(a); //error a is not defined

const a = 50;
a = 60; // shows error. You cannot change the value of const.
const c = "Constant variable";
c = "Assigning new value"; // shows error.