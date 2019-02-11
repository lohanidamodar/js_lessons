document.onmousemove = moveHandler;

function moveHandler(event) {
    if(!event) {
        event = window.event;
    }
    animateCircles(event.x, event.y);
}

function animateCircles(xPos, yPos) {
    var leftCircle = document.getElementById('leftCircle');
    var rightCircle = document.getElementById('rightCircle');
    leftCircle.style.left = xPos+"px";
    leftCircle.style.top = yPos+"px";
    rightCircle.style.left = xPos+50+"px";
    rightCircle.style.top = yPos+"px";
}