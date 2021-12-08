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
    popUp();
    let computerPick = getComputerChoice();
    resetButton();
    if (computerPick === userChoice) {
        console.log('Its a draw');
        alert(`You both picked ${userChoice}. It's a draw!`);
    } else if ((computerPick === 'paper' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'rock') || 
        (computerPick === 'rock' && userChoice === 'paper')) {
        console.log('user win');
        incrementUserScore();
        alert(`Mysterions choosed ${computerPick} against your ${userChoice}. You Win!`);
    } else if ((computerPick === 'rock' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'paper') ||
        (computerPick === 'paper' && userChoice === 'rock')) {
        console.log('Mysterion win!');
        incrementComputerScore();
        alert(`Mysterions choosed ${computerPick} against your ${userChoice}. You lose!`);
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

// Reset score and display reset button

function resetButton() {
    let reset = document.getElementById('reset');
    reset.style.display = 'block';
}

reset.addEventListener('click', function() {
    let ok = confirm('Do you really want to reset the game?');
        if (ok == true) {
        document.getElementById("uscore").innerText = 0;
        document.getElementById("mscore").innerText = 0;
        reset.style.display = 'none';
      } else {
        alert(`Let's continue, you can do it!`);
      }
    })

// Pop-up message

function popUp() {
    let pop = document.createElement('div');
    pop.setAttribute('id', 'popmodal');
    document.body.appendChild(pop);
    pop.textContent = "Test test";
}

// Rules icon

let icon = document.getElementById('question-sign');
    icon.onmouseover = function() {
    document.getElementById('rules').style.display = 'block';
}
    icon.onmouseout = function() {
    document.getElementById('rules').style.display = 'none';
}