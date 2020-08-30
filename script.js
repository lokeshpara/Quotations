const start = document.getElementById("start")
const container = document.getElementById('container');
const startbtn = document.getElementById("startbtn")

function showStart() {
    start.hidden = false;
    container.hidden = true; 
}
showStart();

function hideStart() {
    start.hidden = true;
    container.hidden = false;
}

const clickEvent = () => {
    startbtn.onclick = hideStart
}
clickEvent()