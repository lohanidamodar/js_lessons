window.onload = initAll;

function initAll() {
    initLoop();
    initArrays();    
}

function initLoop() {
    for(var i = 0; i<5; i++) {
        console.log('Value of i is: ' + i);
        var currentDiv = "div"+i;
        document.getElementById(currentDiv).innerHTML = "Div " + i + " Overwritten from script";
    }
}

function initArrays() {
    var numbers = new Array(2,4,6,8,10,12);
    console.log(numbers);
    for(var i = 0; i<numbers.length; i++) {
        console.log("current number is " + numbers[i]);
    }
}