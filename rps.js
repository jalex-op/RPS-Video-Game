// -----------------------------------------------------------------------------------------------------------
// a rock-paper-scissors game, where a user inputs their choice and plays against a computer
//
//
// ------------------------------------------------------------------------------------------------------------

// function to get the computer's random choice

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

    return computerChoice;
}

// let computerChoice = getComputerChoice(1, 3);
// console.log('AI picked:', computerChoice);
let computerChoice = getComputerChoice(1, 3).toLowerCase();
console.log('AI picked:', computerChoice);

// 
// gets the user's choice

function getUsrChoice() {
    let usrChoice;              // initializing usrChoice
    let validInput = false;     // init validInput
    
    while (!validInput) {
        usrChoice = prompt('Enter a choice: Rock, Paper, or Scissors').toLowerCase(); // toLowerCase() to convert all strings to lower case, so capitalization doesn't matter
    
        if (usrChoice === 'rock' || usrChoice === 'paper' || usrChoice === 'scissors') {   // forces only rock paper or scissors to be inputs (regardless of capitalizations)
            validInput = true;
        }
        else {
            alert('Not a valid input. Check your spelling!')
        }
     }
    return usrChoice;
}
const usrChoice = getUsrChoice();
console.log('User picked', usrChoice);




// Game logic
// compare the string from the computer's choice to the string of the user's choice

function rps(computerChoice, usrChoice) {
    let rpsResult = '';

    if (computerChoice === 'rock' && usrChoice === 'paper') {
        alert('You picked paper. Computer picked rock. You won!');
    }
    else if (computerChoice === 'rock' && usrChoice === 'rock') {
        alert('You picked rock. Computer picked rock. Tie game!');
    }
    else if (computerChoice === 'rock' && usrChoice === 'scissors') {
        alert('You picked scissors. Computer picked rock. You lost!');
    }

    else if (computerChoice === 'paper' && usrChoice === 'rock') {
        alert('You picked rock. Computer picked paper. You lost!');
    }
    else if (computerChoice === 'paper' && usrChoice === 'paper') {
        alert('You picked paper. Computer picked paper. Tie game!');
    }
    else if (computerChoice === 'paper' && usrChoice === 'scissors') {
        alert('You picked scissors. Computer picked paper. You won!');
    }

    else if (computerChoice === 'scissors' && usrChoice === 'rock') {
        alert('You picked rock. Computer picked scissors. You won!');
    }
    else if (computerChoice === 'scissors' && usrChoice === 'paper') {
        alert('You picked paper. Computer picked scissors. You lost!');
    }
    else if (computerChoice === 'scissors' && usrChoice === 'scissors') {
        alert('You picked scissors. Computer picked scissors. Tie game!');
    }

    return rpsResult;

}

const rpsResult = rps(computerChoice, usrChoice);



//
// Condensed method to the rps function. 
//
// function rps(computerChoice, usrChoice) {
//     const outcomes = {
//         'rock': {'rock': 'Tie game!', 'paper': 'You lost!', 'scissors': 'You won!'},
//         'paper': {'rock': 'You won!', 'paper': 'Tie game!', 'scissors': 'You lost!'},
//         'scissors': {'rock': 'You lost!', 'paper': 'You won!', 'scissors': 'Tie game!'}
//     };

//     const result = outcomes[usrChoice][computerChoice];
//     alert(`You picked ${usrChoice}. Computer picked ${computerChoice}. ${result}`);
// }




//      another more elegant rps solution
//
// function rps(computerChoice, usrChoice) {
//     let result = '';

//     if (computerChoice === usrChoice) {
//         result = 'tie';
//     } else if (
//         (computerChoice === 'rock' && usrChoice === 'scissors') ||
//         (computerChoice === 'scissors' && usrChoice === 'paper') ||
//         (computerChoice === 'paper' && usrChoice === 'rock')
//     ) {
//         result = 'lose';
//     } else {
//         result = 'win';
//     }

//     alert(`You picked ${usrChoice}. Computer picked ${computerChoice}. ${result.charAt(0).toUpperCase() + result.slice(1)} game!`);
//     return result;
// }

// const result = rps(computerChoice, usrChoice);
// console.log(result);




