function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * 3 + 1);
    if(computerPick == 1){
        return "rock";
    } else if (computerPick == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerPick = prompt("Rock Paper Scissors?").toLowerCase();
    return playerPick;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "Computer Wins!";
        } else if (computerSelection == "scissors"){
            return "Player Wins!";
        } else {
            return "It's a tie!";
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "Computer Wins!";
        } else if (computerSelection == "rock"){
            return "Player Wins!";
        } else {
            return "It's a tie!";
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "Computer Wins!";
        } else if (computerSelection == "rock"){
            return "Player Wins!";
        } else {
            return "It's a tie!";
        }
    }
}

function game(){
    let playerVictories = 0;
    let computerVictories = 0;
    for (let i = 0; i < 5; i++){
        let winner = playRound(getPlayerChoice(), getComputerChoice());
        console.log(winner);
        if (winner == "Player Wins!"){
            playerVictories++;
        } else if (winner == "Computer Wins!"){
            computerVictories++;
        }
    }
    console.log("Player: " + playerVictories + " Computer " + computerVictories);
    if (playerVictories > computerVictories){
        console.log("Player Wins the game!");
    } else if (computerVictories > playerVictories){
        console.log("Computer wins the game!");
    } else {
        console.log("Its a tie OMG!!!");
    }
}

game();