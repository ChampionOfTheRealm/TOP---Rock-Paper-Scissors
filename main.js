//Rock Paper Scissors game

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

document.getElementById("btn1").addEventListener("click", game);
document.getElementById("btn2").addEventListener("click", game);
document.getElementById("btn3").addEventListener("click", game);

const roundsDiv = document.getElementById("rounds");
const playerSelectionDiv = document.getElementById("playerSelection");
const computerSelectionDiv = document.getElementById("computerSelection");
const resultDiv = document.getElementById("result");
const playerWinins = document.getElementById("playerWins");
const computerWins = document.getElementById("computerWins");
const ties = document.getElementById("ties");
const winner = document.getElementById("winner");

roundsDiv.innerText = "Okay, lets play ";
resultDiv.innerText = "Result: ";
playerSelectionDiv.innerText = "Player selected ";
computerSelectionDiv.innerText = "Computer selected "; 
ties.innerText = "Ties: ";
computerWins.innerText = "Computer Wins: ";
playerWins.innerText = "Player Wins: ";


//Asks the player how many rounds for Rock Paper Scissors they would like to play and proceeds to call the game logic said number of times.
function game(e) {
    let playerChoice = e.target.value;

    //how many rounds to play?
    let rounds = 1;
    //rounds = parseInt(rounds);
    //if (rounds >= 1 && typeof(rounds) === "number") {
    //    roundsDiv.innerText = "Okay, lets play " + rounds + " rounds together. Start!";
    //} else {
    //    roundsDiv.innerText ="Game cancelled. See ya!";
    //}
    for (i = 1; i <= rounds; i++) {
        playGame();
    }

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

    //Game logic which compares the computers choice with the players choice and determines if the player or computer won or a tie and increments respective variable.
    function playGame(playerSelection, computerSelection) {
        playerSelection = playerChoice;
        computerSelection = getComputerChoice();
        let result;

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

        resultDiv.innerText = "Result: " + result;
        playerSelectionDiv.innerText = "Player selected " + playerChoice;
        computerSelectionDiv.innerText = "Computer selected " + computerSelection; 
        ties.innerText = "Ties: " + tieCount;
        computerWins.innerText = "Computer Wins: " + computerWinCount;
        playerWins.innerText = "Player Wins: " + playerWinCount;

        if (computerWinCount == 5) {
            winner.innerText = "We have a winner! \n The Computer wins with 5 points! \n Better luck next time!";
            computerWinCount = 0;
            playerWinCount = 0;
            tieCount = 0;
        } else if (playerWinCount == 5){
            winner.innerText = "We have a winner! \n The Player wins with 5 points! \n Congratulations!";
            computerWinCount = 0;
            playerWinCount = 0;
            tieCount = 0;
        }

        return;
    }
    
}

function resetScore() {
    resultDiv.innerText = "Result: ";
    playerSelectionDiv.innerText = "Player selected ";
    computerSelectionDiv.innerText = "Computer selected "; 
    ties.innerText = "Ties: " + tieCount;
    computerWins.innerText = "Computer Wins: ";
    playerWins.innerText = "Player Wins: ";
    computerWinCount = 0;
    playerWinCount = 0;
    tieCount = 0;
}