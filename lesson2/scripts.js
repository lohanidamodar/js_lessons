//Alerts
alert("Welcome to our javascript page");

//Conditionals
if(navigator.cookieEnabled){
    alert("This browser supports cookies");
}else{
    alert("This browser does not support cookies");
}

//Confirm
if(confirm("Do you want to proceed?")) {
    alert("You said yes");
}else{
    alert("You said no");
}

//prompts
var ans = prompt("Are you sure you believe in Javascript?","");
alert(ans);
if(ans) {
    alert("You said: " + ans);
}else{
    alert("You did not say anything");
}