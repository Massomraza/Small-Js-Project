var msg1 = document.querySelector('#message1');
var msg2 = document.querySelector('#message2');
var msg3 = document.querySelector('#message3');

var answer = Math.floor(Math.random() * 100) + 1;
var noOfGuess = 0;
var guessedNums = [];

function play() {
    var userGuess = document.querySelector('#guess').value;

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1-100");
    }
    if (userGuess * 0 !== 0) {
        alert("Please enter only number");
        document.querySelector('#guess').value = '';
    } else {
        if (userGuess == answer) {
            console.log('good job');
        }
        guessedNums.push(userGuess)
        noOfGuess += 1;

        if (userGuess < answer) {
            msg1.textContent = 'You guess is too low.';
            msg2.textContent = `No. of Guesses: ${noOfGuess}`;
            if (guessedNums.length < 6) {
                msg3.textContent = `Guessed Numbers are: ${guessedNums}`
            } else {
                msg3.textContent = ``
            }
        } else if (userGuess > answer) {
            msg1.textContent = 'You guess is too high.';
            msg2.textContent = `No. of Guesses: ${noOfGuess}`;
            if (guessedNums.length < 6) {
                msg3.textContent = `Guessed Numbers are: ${guessedNums}`
            } else {
                msg3.textContent = ``
            }
        } else if (userGuess == answer) {
            msg1.textContent = 'Yuppie You Win!!';
            msg2.textContent = `The number was: ${answer}`;
            msg3.textContent = `You guessed it in ${noOfGuess} guesses.`;
            document.querySelector('#playBtn').disabled = true;
        }
    }
}