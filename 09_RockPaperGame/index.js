let [computerScore, userScore] = [0, 0];
let result = document.querySelector('#result');
let choicesObj = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'scissor': 'draw',
        'paper': 'win',
        'rock': 'lose'
    },
    'paper': {
        'paper': 'draw',
        'rock': 'win',
        'scissor': 'lose'
    }
}



function checker(input) {
    var choices = ['rock', 'paper', 'scissor'];
    var num = Math.floor(Math.random() * 3);

    document.querySelector('#compChoice').innerHTML =
        `Computer choose : <span>${choices[num].toUpperCase()}</span> `;

    document.querySelector('#userChoice').innerHTML =
        `You Choose : <span>${input.toUpperCase()}</span>`;

    let computerChoice = choices[num];

    switch (choicesObj[input][computerChoice]) {
        case 'win':
            result.style.cssText = 'background-Color:#cefdce; color:#689f38'
            result.innerHTML = 'YOU WIN';
            userScore++;
            break;
        case 'lose':
            result.style.cssText = 'background-Color: #ffdee0; color:#d32f2f'
            result.innerHTML = 'YOU LOOSE';
            computerScore++;
            break;
        default:
            result.style.cssText = 'background-Color: #e5e5e5; color: #808080'
            result.innerHTML = 'DRAW';
            break
    };

    document.querySelector('#computerScore').innerHTML = computerScore;
    document.querySelector('#yourScore').innerHTML = userScore;

}