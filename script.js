function getComputerChoice() {
    const x = Math.random();

    if (x < 1/3) {
        console.log("Rock");
    }
    else if (x < 2/3) {
        console.log("Scissors");
    }
    else {
        console.log("Paper");
    }
    
}
console.log(getComputerChoice());