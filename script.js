const options = ["rock", "paper", "scissors"];

function getComputerChoice() { 
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

function checkWinner(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        return "Tie!";
    } 
    else if(
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "scissors" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "rock")
    ) { 
        return "User";
    } 
    else {
        return "Computer";
    }
}

function playRound(humanSelection, computerSelection) {
    const result = checkWinner(humanSelection, computerSelection);
    if(result == "Tie!") {
        return "It is a Tie!"
    } 
    else if(result == "User") {
        return `You win! ${humanSelection} beats ${computerSelection}!`
    } 
    else {
        return `You loose! ${computerSelection} beats ${humanSelection}!`
    }
}

function getHumanChoice() {
    let validateInput = false;
    while(validateInput == false) { 
        const humanChoice = prompt("Do you choose Rock, Paper or Scissors?");
        if(humanChoice == null) {
            continue;
        } 
        const choiceInLower = humanChoice.toLowerCase();
//the includes will only validate what is in the arrya OPTIONS
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}
console.log(getHumanChoice());

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("-------------------------------");
        if(checkWinner(humanSelection, computerSelection) == "Player") { 
            scorePlayer++;
        }
        else if(checkWinner(humanSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over!");
    console.log("-------------------------------");
    if(scorePlayer > scoreComputer) {
        console.log("You won!");
    } 
    else if (scorePlayer < scoreComputer) {
        console.log("You lost!");
    } 
    else {
        console.log ("It is a tie!");
    }
}
game();

