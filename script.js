function getComputerChoice() {
    const x = Math.random();

    if (x < 1/3) {
        return("Rock");
    }
    else if (x < 2/3) {
        return("Scissors");
    }
    else {
        return("Paper");
    }
    
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    return choice;
}
userScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice){
        return ("Its a tie!");
    }
    else if
    (   (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock"))
        {
            userScore = userScore + 1;
            return ("One point for the user!");
        }

    else if
    (   (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")) 
        {
            computerScore = computerScore + 1;
            return ("One point for the computer!");
        }
        
    else {
        return ("Invalid input. Please choose Rock, Paper, or Scissors");
    }
}