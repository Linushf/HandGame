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

// Calculate a random choice from computer

function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return pick [randomNumber];
}

// Game play

function playGame(userChoice) {

    let computerPick = getComputerChoice();
    
    resetButton();
    if (computerPick === userChoice) {
        console.log('Its a draw');
        document.getElementById('user-chioce').innerHTML = "";
        document.getElementById('mysterion-chioce').innerHTML = "";
        document.getElementById('result-text').innerHTML = `You both picked ${userChoice}. It's a draw!`;
        document.getElementById('result-text').style.color = "#D9D8D2";
    } else if ((computerPick === 'paper' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'rock') || 
        (computerPick === 'rock' && userChoice === 'paper')) {
        console.log('user win');
        incrementUserScore();
        document.getElementById('user-chioce').innerHTML = "";
        document.getElementById('mysterion-chioce').innerHTML = "";
        document.getElementById('result-text').innerHTML = `Mysterions choosed ${computerPick} against your ${userChoice}. You Win!`;
        document.getElementById('result-text').style.color = "#7C96A6";
    } else if ((computerPick === 'rock' && userChoice === 'scissors') ||
        (computerPick === 'scissors' && userChoice === 'paper') ||
        (computerPick === 'paper' && userChoice === 'rock')) {
        console.log('Mysterion win!');
        incrementComputerScore();
        document.getElementById('user-chioce').innerHTML = "";
        document.getElementById('mysterion-chioce').innerHTML = "";
        document.getElementById('result-text').innerHTML = `Mysterion choosed ${computerPick} against your ${userChoice}. You lose!`;
        document.getElementById('result-text').style.color = "red";
    }
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
        document.getElementById('result-text').innerHTML = `Let's see if you can beat him this time!`;
        document.getElementById('result-text').style.color = "#D9D8D2";
      } else {
        alert(`Let's continue, you can do it!`);
      }
    })

// Rules icon

let icon = document.getElementById('question-sign');
    icon.onmouseover = function() {
    document.getElementById('rules').style.display = 'block';
}
    icon.onmouseout = function() {
    document.getElementById('rules').style.display = 'none';
}