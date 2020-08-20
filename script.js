const start = document.getElementById("start")
const container = document.getElementById('container');

function showLoading() {
    start.hidden = false;
    container.hidden = true; 
}
showLoading();