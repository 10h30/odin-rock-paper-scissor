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

const content = document.querySelector("div")
const finalResult = document.createElement("p")
const rockButton = document.createElement("button")
rockButton.textContent = "Rock";
const paperButton = document.createElement("button")
paperButton.textContent = "Paper";
const scissorButton = document.createElement("button")
scissorButton.textContent = "Scissor";

content.appendChild(rockButton)
content.appendChild(paperButton)
content.appendChild(scissorButton)
content.appendChild(finalResult)


rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorButton.addEventListener("click", playRound);

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = this.textContent;
    const computerChoice = getComputerChoice();

    const resultPanel = document.createElement("div")
    const result = document.createElement("p")
    resultPanel.appendChild(result);
    content.appendChild(resultPanel)
        if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
            result.textContent = "Draw";
        }
        else {
            switch (humanChoice.toUpperCase()) {
                case "ROCK" :
                    switch (computerChoice.toUpperCase()) {
                        case "PAPER" :
                            computerScore++;
                            result.textContent = "You lose! Paper beats Rock. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                        case "SCISSOR" :
                            humanScore++;
                            result.textContent = "You win! Rock beats Scissor. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                    }
                    break;

                case "PAPER" :
                    switch (computerChoice.toUpperCase()) {
                        case "ROCK" :
                            humanScore++;
                            result.textContent = "You win! Paper beats Rock. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                        case "SCISSOR" :
                            computerScore++;
                            result.textContent = "You lose! Scissor beats Paper. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                    }
                    break;

                case "SCISSOR":
                    switch (computerChoice.toUpperCase()) {
                        case "ROCK" :
                            computerScore++;
                            result.textContent = "You lose! Rock beats Scissor. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                        case "PAPER" :
                            humanScore++;
                            result.textContent = "You win! Scissor beats Paper. Current score: Computer " + computerScore + " / Human " + humanScore;
                            break;
                    }
                    break;
            }
        }
    if (humanScore === 5) {
        finalResult.textContent = "Congratulation. You Win!";
        humanScore = 0;
        computerScore = 0;
    } 
    if (computerScore === 5) {
        finalResult.textContent = "Sorry. You Lose!";
        humanScore = 0;
        computerScore = 0;
    } 
}



function playGames() {
    //playRound(humanSelection, computerSelection);
    const resultPanel = document.createElement("div")
    const result = document.createElement("p")
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("You Win!");
        result.textContent = "You Win";
    }
    else if (humanScore == computerScore) {
        console.log("Draw");
        result.textContent = "Draw";
    }
    else {
        console.log("You Lose");
        result.textContent = "You Lose";
    }
    console.log("The score is: " + humanScore + ":" + computerScore)
}

//playGames();

