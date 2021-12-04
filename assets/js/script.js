const restart = document.getElementById('reset');
const choices = document.querySelectorAll('choices');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let user_score = document.getElementById('user-score');
let userScore = 0;

function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return pick [randomNumber];
}

function game(userChoice) {
    restart.style.display = 'block';
    let computerPick = getComputerChoice();
    
    if (computerPick === userChoice) {
        console.log('draw');
    } else if (computerPick === 'paper' && userChoice === 'scissors') {
        console.log('user win');
    } 
}

function main() {
    rock.addEventListener('click', function() {
    game('rock');
})
    paper.addEventListener('click', function() {
    game('paper');
})
    scissors.addEventListener('click', function() {
    game('scissors');
})

}

main();