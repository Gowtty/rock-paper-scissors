//FUNCTION TO GET COMPUTER CHOICE
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

// FUNCTION TO MAKE THE PLAYER CHOOSE AN OPTION.
function playerChoice(){
    
    let playerOption = prompt(`Choose an option:
    Rock  --  Paper  -- Scissors`);
    // THIS LINE RETURNS THE RESULT WITH THE FIRST LETTER IN UPPERCASE AND THE REST OF THE WORD IN LOWER CASE.
    return playerOption[0].toUpperCase() + playerOption.slice(1).toLowerCase();
}

// FUNCTION TO PLAY A ROUND
function playRound(playerSelection, computerSelection){

    //TIE CASE
    if (playerSelection === computerSelection){
        return "Tie! both players choosed the same option, this round won't count.";
    }// PLAYER WIN CASES
    else if((playerSelection == "Rock" && computerSelection == "Scissors")
    || (playerSelection == "Scissors" && computerSelection == "Paper")
    || (playerSelection == "Paper" && computerSelection == "Rock")){

        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }// COMPUTER WIN CASES
    else if((playerSelection == "Scissors" && computerSelection == "Rock")
    || (playerSelection == "Paper" && computerSelection == "Scissors")
    || (playerSelection == "Rock" && computerSelection == "Paper")){

        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
    
}

// STATS COUNTER

function game(){
    
    let playerWins = 0;
    let computerWins = 0;

    // # of rounds to be played:

let totalRounds = 0;

while(totalRounds < 5){

    let computerOption = getComputerChoice();
    let playerChoosed = playerChoice();


    console.log(playRound(playerChoosed, computerOption));

    //CHECK IF THE RETURN INCLUDES WIN OR LOSE TO AVOID COUNTING TIES, WHEN TIE ROUND DOESN'T COUNT
    if(playRound(playerChoosed, computerOption).includes("Win") || playRound(playerChoosed, computerOption).includes("Lose")){
        totalRounds += 1; // INCREMENT THE VARIABLE TO HELP IT REACH THE MAX AMOUNT OF ROUNDS CHOOSED
    }// ELSE IT WON'T INCREMENT SO ROUND WON'T BE COUNTED

    //STATS COUNTER
    if(playRound(playerChoosed, computerOption).includes("Win")){
        playerWins += 1;
    }else if (playRound(playerChoosed, computerOption).includes("Lose")){
        computerWins += 1;
    }
}

    
// CHECK IF THE PLAYER OR THE COMPUTER WON AND INCREMENT THE RIGHT VARIABLE
    if(playerWins > computerWins){
        return `Player won: ${playerWins} rounds
    Computer won: ${computerWins} rounds
    The winner is: Player!!`;
    }else{
        return `Player won: ${playerWins} rounds
    Computer won: ${computerWins} rounds
    The winner is: Computer!!`;
    }

    
}

//STARTS THE PROGRAM...

console.log(game());


