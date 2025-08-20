function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice > 0 && computerChoice < 1/3) {
        computerChoice = "Rock";
    }
    else if (computerChoice > 1/3 && computerChoice < 2/3) {
        computerChoice = "Scissors";
    }
    else if (computerChoice > 2/3 && computerChoice < 1) {
        computerChoice = "Paper";
    }
    return computerChoice.toLowerCase();    
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?")
    return humanChoice.toLowerCase();
}

userScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log("Its a tie!" + " userScore=" + userScore + " " + "computerScore=" + computerScore);
    }
    
    else if
    (   (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock"))
        {
            userScore = userScore + 1;
            console.log("One point for the user!" + " userScore=" + userScore + " " + "computerScore=" + computerScore);
        }
    else if
    (   (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock"))
        {
            computerScore = computerScore + 1;
            console.log("One point for the computer!" + " userScore=" + userScore + " " + "computerScore=" + computerScore);
        }
    else {
        console.log("Please enter a valid input of either Rock, Paper, or Scissors")
    }
}

function playGame(){
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
}
playGame();