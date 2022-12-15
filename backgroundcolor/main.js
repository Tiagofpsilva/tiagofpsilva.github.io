document.querySelector('#btn-yellow').addEventListener('click', yellow)
document.querySelector('#btn-red').addEventListener('click', red)
document.querySelector('#btn-lightgreen').addEventListener('click', lightgreen)
document.querySelector('#btn-lightblue').addEventListener('click', lightblue)

function yellow() {
    document.body.style.backgroundColor = 'yellow';
}
function red() {
    document.body.style.backgroundColor = 'red';
}
function lightgreen() {
    document.body.style.backgroundColor = 'lightgreen';
}
function lightblue() {
    document.body.style.backgroundColor = 'lightblue';
}
