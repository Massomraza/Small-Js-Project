    let answer = Math.floor(Math.random() * 100);
    let noOfTry = 0;
    let userGuess = [];
    answer = 60;
    let msg11 = document.querySelector('#msg1');
    let msg22 = document.querySelector('#msg2');
    let msg33 = document.querySelector('#msg3');

    
    function play() {
        let userVal = document.querySelector('#userGuess').value;

        if (userVal < 1 || userVal > 100) {
            alert('Please enter a number between 1-100');
        }
        if (userVal * 0 !== 0) {
            alert('Please enter only number');
            document.querySelector('#userGuess').value = '';
        } else {
            userGuess.push(userVal);
            noOfTry += 1;

            if (userVal < answer) {
                msg11.textContent = `Your no. is too low.`;
                msg22.textContent = `No. of guess: ${noOfTry}`;
                if (userGuess.length < 6) {
                    msg33.textContent = `Your guess number are: ${userGuess}`;
                } else {
                    msg33.textContent = ``;
                }
            } else if (userVal > answer) {
                msg11.textContent = `Your no. is too high.`;
                msg22.textContent = `No. of guess: ${noOfTry}`;
                if (userGuess.length < 6) {
                    msg33.textContent = `Your guess number are: ${userGuess}`;
                } else {
                    msg33.textContent = ``;
                }
            } else if (userVal == answer) {
                msg11.textContent = `Hurry you win!!`;
                msg22.textContent = `Your win guess no. is: ${answer}`;
                msg33.textContent = `Your win on ${noOfTry} try....`;
            }
        }
    }