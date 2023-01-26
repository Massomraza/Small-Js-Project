let miliSec = [mili, sec, min, hour] = [0, 0, 0, 0];
let timeRef = document.querySelector('.timer-Display');
let int;
console.log('jkdjk');
document.querySelector('#startTime').onclick = ()=>{
    int = setInterval(displayTimer, 10);
};

function displayTimer(){
    miliSec += 10;

    if(miliSec == 1000){
        miliSec = 0;
        sec++

        if(sec == 60){
            sec = 0;
            min++;

            if(min == 60){
                min = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    let ms = miliSec < 10 ? '00' + miliSec : miliSec < 100 ? "0" + miliSec : miliSec;

    timeRef.innerHTML = `${h} : ${m} : ${s}: ${ms}`
}