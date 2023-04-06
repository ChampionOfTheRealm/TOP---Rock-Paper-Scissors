//Psuedo Code:
//Rock Paper Scissors game

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);
    if (random <= 33 && random >= 0) {
        return "rock";
    } else if (random <= 66 && random >= 34) {
        return "paper";
    } else if (random <= 100 && random >= 67) {
        return "scissors";
    }
}

function getPlayerChoice(choice = prompt("Rock, Paper or Scissors")) {
    choice = choice.toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        return null;
    }

}

function playGame(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    let result;

    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);

    if (playerSelection == computerSelection) {
        tieCount++;
        result = "Tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWinCount++;
            result = "Computer Wins";
        } else if (computerSelection == "scissors") {
            playerWinCount++;
            result = "Player Wins!";
            
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWinCount++;
            result = "Player Wins!";
        } else if (computerSelection == "scissors") {
            computerWinCount++;
            result = "Computer Wins!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWinCount++;

            result = "Computer Wins!";
        } else if (computerSelection == "paper") {
            playerWinCount++;
            result = "Player Wins!";
        }
    }
    console.log(result);
    console.log("Ties: " + tieCount);
    console.log("Computer Wins: " + computerWinCount);
    console.log("Player Wins: " + playerWinCount);
    return;
}


function game(rounds = prompt("How many rounds would you like to play?")) {
    rounds = parseInt(rounds);
    console.log(typeof(rounds));
    if (rounds >= 1 && typeof(rounds) === "number") {
        alert("Okay, lets play " + rounds + " rounds together. Start!");
    } else {
        alert("Game cancelled. See ya!");
    }
    for (i = 1; i <= rounds; i++) {
        playGame();
    }
}

game();