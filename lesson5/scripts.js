window.onload = init;

function init () {
    console.log("Init")
    document.getElementById("btn-load-list").onclick = onclickHandler;
}

const items = [
    "Avengers: Infinity war",
    "Black Phoenix",
    "Alitia the battle angel",
    "Home front",
    "Shutter Island"
]

function onclickHandler (event){
    console.log(event.target.parentElement);
    let listItems = '';
    items.forEach(item => {
        listItems += `<li class="list-group-item">${item}</li>`
    });
    let ul = `<ul class="list-group">${listItems}</ul>`;
    event.target.parentElement.innerHTML = ul;
}