//Rock Paper Scissors game

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

const leftsideButtons = document.querySelectorAll('.leftside');
const roundsDiv = document.getElementById("rounds");
const playerSelectionDiv = document.getElementById("playerSelection");
const computerSelectionDiv = document.getElementById("computerSelection");
const resultDiv = document.getElementById("result");
const playerWinins = document.getElementById("playerWins");
const computerWins = document.getElementById("computerWins");
const ties = document.getElementById("ties");
const winner = document.getElementById("winner");

leftsideButtons.forEach(option => option.addEventListener('click',game));
document.querySelector('.reset-button').addEventListener('click', resetScore);

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
    ties.innerText = "Ties: ";
    computerWins.innerText = "Computer Wins: ";
    playerWins.innerText = "Player Wins: ";
    computerWinCount = 0;
    playerWinCount = 0;
    tieCount = 0;
}


/////////////////////////////////// DROP DOWN MENU ///////////////////////////////////////////////////////
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){


	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');

    
}

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
    const selectedCharacter = e.target.innerText;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');
    const playerCharacter = document.querySelector('#player-character');
    const playerVersus = document.querySelector('#player-versus');

	titleElem.textContent = newValue;
	titleElem.appendChild(icon);

    playerCharacter.src = `${id}.png`;
    playerVersus.innerText = selectedCharacter;
	
	//trigger custom event
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout is used so transition is properly shown
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}

//function handleTitleChange(e){
//	const result = document.getElementById('result');
//
//	result.innerHTML = 'The result is: ' + e.target.textContent;
//}

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));


//document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);

//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// DROP DOWN MENU 2///////////////////////////////////////////////////////
function toggleClass2(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}

	return elem;
}

function toggleDisplay2(elem){
	const curDisplayStyle = elem.style.display;	
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay2(e){


	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu2');
	const icon = dropdown.querySelector('.fa-angle-right2');

	toggleClass2(menu,'hide2');
	toggleClass2(icon,'rotate-902');

 
}

function handleOptionSelected2(e){
	toggleClass2(e.target.parentNode, 'hide2');
		

	const id = e.target.id;
    const selectedCharacter2 = e.target.innerText;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown2 .title2');
	const icon = document.querySelector('.dropdown2 .title2 .fa2');
    const opponentCharacter = document.querySelector('#opponent-character');
    const opponentVersus = document.querySelector('#opponent-versus');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
    id.too
    opponentCharacter.src = `${id}.png`;
    opponentVersus.innerText = selectedCharacter2;

	
	//trigger custom event
	document.querySelector('.dropdown2 .title2').dispatchEvent(new Event('change'));
	//setTimeout is used so transition is properly shown
	setTimeout(() => toggleClass2(icon,'rotate-902',0));
}

const dropdownTitle2 = document.querySelector('.dropdown2 .title2');
const dropdownOptions2 = document.querySelectorAll('.dropdown2 .option2');
dropdownTitle2.addEventListener('click', toggleMenuDisplay2);
dropdownOptions2.forEach(option => option.addEventListener('click',handleOptionSelected2));