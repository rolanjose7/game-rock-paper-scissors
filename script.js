function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * 3 + 1);
    if(computerPick == 1){
        return "rock";
    } else if (computerpick == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerPick = prompt("Rock Paper Scissors?").toLowerCase();
    return playerPick;
}