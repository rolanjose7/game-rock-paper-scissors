let playersPoints = 0;
let computersPoints = 0;

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

const container = document.getElementById("container");
const currentPlay = document.createElement("p");
const score = document.createElement("p");
const winnerGame = document.createElement("p");
container.appendChild(currentPlay);
container.appendChild(score);
container.appendChild(winnerGame);

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computersPoints += 1;
            currentPlay.innerHTML = "Player: Rock. Computer: Paper. Computer win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else if (computerSelection == "scissors"){
            playersPoints += 1;
            currentPlay.innerHTML = "Player: Rock. Computer: Scissors. Player win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else {
            currentPlay.innerHTML = "Player: Rock. Computer: Rock. Its a tie!"
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computersPoints += 1;
            currentPlay.innerHTML = "Player: Paper. Computer: Scissors. Computer win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else if (computerSelection == "rock"){
            playersPoints += 1;
            currentPlay.innerHTML = "Player: Paper. Computer: Rock. Player win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else {
            currentPlay.innerHTML = "Player: Paper. Computer: Paper. Its a tie!"
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            playersPoints += 1;
            currentPlay.innerHTML = "Player: Scissors. Computer: Paper. Player win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else if (computerSelection == "rock"){
            computersPoints += 1;
            currentPlay.innerHTML = "Player: Scissors. Computer: Rock. Computer win."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        } else {
            currentPlay.innerHTML = "Player: Scissors. Computer: Scissors. It is a tie!."
            score.innerHTML = "The score is.. Player: " + playersPoints + " Computer: " + computersPoints;
        }
    }
}
const buttClick = document.querySelectorAll("button");
for(i of buttClick){
    i.addEventListener("click", myFunction);
}

const refreshPage = document.createElement("button");
refreshPage.innerHTML = "Play again";
refreshPage.addEventListener("click", () =>{
    location.reload();
})

function myFunction(){
    let pickmee = this.value;
    playRound(pickmee, getComputerChoice());
    if(playersPoints === 5){
        winnerGame.innerHTML = "The winner of the game is the Player!";
        container.appendChild(refreshPage);
    } else if (computersPoints === 5){
        winnerGame.innerHTML = "The winner of the game is the Computer!";
        container.appendChild(refreshPage);
    }
}