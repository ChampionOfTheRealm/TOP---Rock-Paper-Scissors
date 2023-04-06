//Psuedo Code:
//Rock Paper Scissors game

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

//Generates a random choice from "rock, paper or scissors" for the computer
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

//Gets the players choice of either "rock, paper or scissor"
function getPlayerChoice(choice = prompt("Rock, Paper or Scissors")) {
    choice = choice.toLowerCase()
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    } else {
        return null;
    }

}

//Game logic which compares the computers choice with the players choice and determines if the player or computer won or a tie and increments respective variable.
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

//Asks the player how many rounds for Rock Paper Scissors they would like to play and proceeds to call the game logic said number of times.
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

//Initializes the game on web load
game();