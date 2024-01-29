
let playerScore = 0;
let compScore = 0;


function getComputerChoice (){

    // THIS LINE WILL MAKE THIS VARIABLE TO GET A RANDOM VALUE FROM 0 TO 2,
    // In this case the values equal to:
    // Rock = 0
    // Paper = 1
    // Scissors = 2
    let randomChoice = Math.floor(Math.random() * 3);
    // Here the computer makes the choice:
    let finalChoice;

    if (randomChoice === 0){
        finalChoice = "Rock";
    }else if(randomChoice === 1){
        finalChoice = "Paper";
    }else{
        finalChoice = "Scissors";
    }
    //RETURN THE FINAL CHOICE.
    return finalChoice;

}

function playRound(playerSelection, computerSelection){

    let resultText = document.getElementById("result");
    //TIE CASE
    if (playerSelection === computerSelection){
        resultText.innerText = "Tie! both players choosed the same option, this round won't count.";
    }// PLAYER WIN CASES
    else if((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Scissors" && computerSelection == "Paper")
    || (playerSelection == "Paper" && computerSelection == "Rock")){

        resultText.innerText= `You Win! ${playerSelection} beats ${computerSelection}!`;
        playerScore += 1;
    }// COMPUTER WIN CASES
    else if((playerSelection == "Scissors" && computerSelection == "Rock")
    || (playerSelection == "Paper" && computerSelection == "Scissors")
    || (playerSelection == "Rock" && computerSelection == "Paper")){

        resultText.innerText = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        compScore += 1;
    }
}

function showWinner(score1, score2){
    let winnerContainer = document.getElementById("winners");
    let winResults = document.getElementById("winner");
    let winner = document.getElementById("finalWinner");
    if(score1 > score2){
        winResults.textContent = `Player won ${score1} rounds!`;
        winner.textContent = "PLAYER IS THE WINNER!"
    }else{
        winResults.textContent = `Computer won ${score2} rounds!`;
        winner.textContent = "YOU LOSE, COMPUTER IS THE WINNER!"
    }
}

function resetGame(){
    let resetBUtton = document.getElementById("Reset");
    resetBUtton.addEventListener("click", function(){
        location.reload();
    });
}

function game(){
    let buttons = document.querySelectorAll("button")
    let totalScore = document.getElementById("score")
    totalScore.textContent = `Current score: ${playerScore} - ${compScore}`;

    buttons.forEach((button) => {
        button.addEventListener("click", function(event){

            let totalScore = document.getElementById("score")
            if(playerScore >= 5 || compScore >= 5){
                showWinner(playerScore, compScore);
            }else{
                let playerOption = button.id;
                let computerOption = getComputerChoice();
        
                let container = document.getElementById("container");
                let results = document.getElementById("choosed");
        
                results.textContent = `Computer choosed ${computerOption}`;
                container.appendChild(results);
                playRound(playerOption, computerOption);

                totalScore.innerText = `Current score: ${playerScore} - ${compScore}`;
            }
            
        });
    });
    resetGame();
}



game();

