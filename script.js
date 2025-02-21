function getComputerChoice() {
    let a = 100 * Math.random();
    let random = "";
    if (a <= 33) {
        random = "rock";
    }
        else if (a <=66 ){
            random = "paper"
        }
        else {
            random = "scissor"
        }
    return random;
}

function getHumanChoice() {
    let input = prompt("Input please");
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(humanChoice.toUpperCase());
    console.log(computerChoice.toUpperCase());
    switch (humanChoice.toUpperCase()) {
        case "ROCK" :
            switch (computerChoice.toUpperCase()) {
                case "ROCK" :
                    console.log("Draw");
                    break;
                case "PAPER" :
                    console.log("You lose! Paper beats Rock");
                    computerScore++;
                    break;
                case "SCISSOR" :
                    console.log("You win! Rock beats Scissor");
                    humanScore++;
                    break;
            }
            break;
            
        case "PAPER" :
            switch (computerChoice.toUpperCase()) {
                case "ROCK" :
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                    break;
                case "PAPER" :
                    console.log("Draw");
                    break;
                case "SCISSOR" :
                    console.log("You lose! Scissor beats Paper");
                    computerScore++;
                    break;
            }
            break;

        case "SCISSOR":
            switch (computerChoice.toUpperCase()) {
                case "ROCK" :
                    console.log("You lose! Rock beats Scissor");
                    computerScore++;
                    break;
                case "PAPER" :
                    console.log("You win! Scissor beats Paper");
                    humanScore++;
                    break;
                case "SCISSOR" :
                    console.log("Draw");
                    break;
            }
            break;
    }

}



function playGames() {
    //playRound(humanSelection, computerSelection);
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log("You Win!");
    }
    else if (humanScore == computerScore) {
        console.log("Draw");
    }
    else {
        console.log("You Lose");
    }
    console.log("The score is: " + humanScore + ":" + computerScore)
}

playGames();

