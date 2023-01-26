let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let sec = document.querySelector('#sec');

let clock = setInterval(
    function(){
        let date = new Date();
        let getHour = date.getHours();
        let getMin = date.getMinutes();
        let getSec = date.getSeconds();
        if(getHour < 10){
            getHour = `0` + getHour
        }
        if(getMin < 10){
            getMin = `0` + getMin
        }
        if(getSec < 10){
            getSec = `0` + getSec
        }
        hour.innerHTML = `${getHour}`;
        minute.innerHTML = `${getMin}`;
        sec.innerHTML = `${getSec}`;
    }, 1000
);