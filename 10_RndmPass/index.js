const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&'()*+-./:;<=>?@^_|~1234567890`;

let output = document.querySelector('#output');

function genPass(){
    let length = document.querySelector('#length').value;
    
    document.querySelector('#length-val').textContent = length;

    function randomValue(val){
        return Math.floor(Math.random()*val);

    }

    let str = '';

    for(let i = 0; i < length; i++){
        let rndm = randomValue(characters.length);
        str += characters.charAt(rndm);
    }
    output.value = str;
};

function copyPass(){
    output.select();
    document.execCommand('copy');
    alert('Password copied');

}