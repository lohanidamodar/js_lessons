window.onload = initAll

function initAll(){
    document.getElementById('link').onclick = clickHandler;
}

function clickHandler() {
    alert("Aw, what was that?");
    return false;
}