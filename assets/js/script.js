// Players choice

document.addEventListener("DOMContentLoaded", function() {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');


    rock.addEventListener('click', function() {
    playGame('rock');
    })
    paper.addEventListener('click', function() {
    playGame('paper');
    })
    scissors.addEventListener('click', function() {
    playGame('scissors');
})
})

// Game play

function playGame(userChoice) {

    let computerPick = getComputerChoice();
    resetButton();
    if (computerPick === userChoice) {
        console.log('Its a draw');
    } else if ((computerPick === 'paper' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'rock') || 
        (computerPick === 'rock' && userChoice === 'paper')) {
        console.log('user win');
        incrementUserScore();
    } else if ((computerPick === 'rock' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'paper') ||
        (computerPick === 'paper' && userChoice === 'rock')) {
        console.log('Mysterion win');
        incrementComputerScore();
    }
}

// Calculate a random choice from computer

function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return pick [randomNumber];
}

// Incrementing the scores

function incrementUserScore() {
    let oldUserScore = (document.getElementById("uscore").innerText);
    document.getElementById("uscore").innerText = ++oldUserScore;
}

function incrementComputerScore() {
    let oldComputerScore = (document.getElementById("mscore").innerText);
    document.getElementById("mscore").innerText = ++oldComputerScore;
}

// Reset score

function resetButton() {
    let reset = document.getElementById('reset');
    reset.style.display = 'block';
    
    reset.addEventListener('click', function() {
    let ok = confirm('Do you really want to reset the game?');
        if (ok == true) {
        document.getElementById("uscore").innerText = 0;
        document.getElementById("mscore").innerText = 0;
      } else {
        alert(`Let's continue!`);
      }
    })
}

// Pop-ups
