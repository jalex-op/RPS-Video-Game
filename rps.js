function getComputerChoice(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'Paper';
    }
    else if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }
    return computerChoice.toLowerCase(); // Modification: convert to lowercase
}

// This section is unnecessary as you're getting the computer choice again in the playGame function
// let computerChoice = getComputerChoice(1, 3);
// console.log('AI picked:', computerChoice);

function getUsrChoice() {
    let usrChoice;
    let validInput = false;
    while (!validInput) {
        usrChoice = prompt('Enter a choice: Rock, Paper, or Scissors. (The first person to  wins, wins the set!').toLowerCase();
        if (usrChoice === 'rock' || usrChoice === 'paper' || usrChoice === 'scissors') {
            validInput = true;
        } else {
            alert('Not a valid input. Check your spelling!')
        }
    }
    return usrChoice;
}

// This section is unnecessary as you're getting the user choice again in the playGame function
// const usrChoice = getUsrChoice();
// console.log('User picked', usrChoice);

function rps(computerChoice, usrChoice) {
    let result;
    if (computerChoice === usrChoice) {
        result = 'It\'s a tie! You both chose ' + usrChoice + '.';
    } else if (
        (computerChoice === 'rock' && usrChoice === 'scissors') ||
        (computerChoice === 'paper' && usrChoice === 'rock') ||
        (computerChoice === 'scissors' && usrChoice === 'paper')
    ) {
        result = 'You lose! ' + usrChoice + ' is beaten by ' + computerChoice + '.';
    } else {
        result = 'You win! ' + usrChoice + ' beats ' + computerChoice + '.';
    }
    alert('You picked: ' + usrChoice + '. Computer picked: ' + computerChoice + '. ' + result); 
    return result; 
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice(1, 3);
        const usrChoice = getUsrChoice();
        const result = rps(computerChoice, usrChoice);
        if (result === 'You win! ' + usrChoice + ' beats ' + computerChoice + '.') {
            userScore++;
        } else if (result === 'You lose! ' + usrChoice + ' is beaten by ' + computerChoice + '.') {
            computerScore++;
        }
        alert('Current Score - You: ' + userScore + ', Computer: ' + computerScore); 
    }
    if (userScore > computerScore) {
        alert('You won the best of 5 series ' + userScore + ' to ' + computerScore + '!');
    } else if (userScore < computerScore) {
        alert('OH NO... you lost the best of 5 series ' + userScore + ' to ' + computerScore + '!');
    } else {
        alert('The best of 5 series is a tie! ' + userScore + ' to ' + computerScore + '!');
    }
}

playGame();
