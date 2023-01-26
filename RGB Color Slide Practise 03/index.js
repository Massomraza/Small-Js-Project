function colors(){
    var red = document.querySelector('#red').value;
    var green = document.querySelector('#green').value;
    var blue = document.querySelector('#blue').value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('#output').innerHTML = `rgb (${red}, ${green}, ${blue})`
}
function resetColor(){
    document.querySelector('#red').value = 0;
    document.querySelector('#green').value = 0;
    document.querySelector('#blue').value = 0;
}