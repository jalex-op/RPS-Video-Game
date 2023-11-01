let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;



function updateDisplay(message, finalResult = false) {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    const finalResultDiv = document.getElementById('finalResult');
  
    if (finalResult) {
        finalResultDiv.textContent = message;
        resultDiv.textContent = '';
    }
    else {
        resultDiv.textContent = 'Round ' + roundsPlayed + ': ' + message;
    }

    scoreDiv.textContent = 'Current Score - You: ' + userScore + ', Computer: ' + computerScore;
  
    if (userScore === 0 && computerScore === 0 && roundsPlayed === 0) {
        finalResultDiv.textContent = '';
    }
  }


function getComputerChoice(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumber === 1) return 'rock';
    if (randomNumber === 2) return 'paper';
    if (randomNumber === 3) return 'scissors';
}

function rps(computerChoice, usrChoice) {
    if (computerChoice === usrChoice) {
        return 'It\'s a tie! You both chose ' + usrChoice + '.';
    } else if (
        (computerChoice === 'rock' && usrChoice === 'scissors') ||
        (computerChoice === 'paper' && usrChoice === 'rock') ||
        (computerChoice === 'scissors' && usrChoice === 'paper')
    ) {
        computerScore++;
        return 'You lose! ' + usrChoice + ' is beaten by ' + computerChoice + '.';
    } else {
        userScore++;
        return 'You win! ' + usrChoice + ' beats ' + computerChoice + '.';
    }
}

function checkGameOver() {
    if (roundsPlayed === 5) {
        let finalMessage;
        if (userScore > computerScore) {
            finalMessage = 'Congratulations! You won the best of 5 series ' + userScore + ' to ' + computerScore + '!';
        } else if (userScore < computerScore) {
            finalMessage = 'OH NO... you lost the best of 5 series ' + userScore + ' to ' + computerScore + '!';
        } else {
            finalMessage = 'The best of 5 series is a tie! ' + userScore + ' to ' + computerScore + '!';
        }
        updateDisplay(finalMessage, true);
        // Reset scores for a new series
        userScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        
    }
}

function playRound(userChoice) {
    if (roundsPlayed === 0) {
        const finalResultDiv = document.getElementById('finalResult');
        finalResultDiv.textContent = '';
    }
    const computerChoice = getComputerChoice(1, 3);
    const result = rps(computerChoice, userChoice);
    roundsPlayed++;
    updateDisplay(result);
    checkGameOver();
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

