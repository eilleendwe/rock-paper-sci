const choice = ["rock", "paper", "scissors"];

function getCompChoice() {
    const index = Math.floor(Math.random() * 3);
    return choice[index];
}

function playRound(){
    const comp = getCompChoice();
    const player = prompt ("Choose rock, paper or scissors")
    
    // console.log(comp);
    // console.log(player);

    const draw = (comp === player);
    const win = (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") || (player === "scissors" && comp === "paper");
    const lose = (!draw && !win);

    if (draw) {
        return `Draw! Both chose ${player}`;
    } else if (win) {
        return `You win! ${player} beats ${comp}`;
    } else {
        return `You lose! ${comp} beats ${player}`;
    }

}

let playerScore = 0;
let compScore = 0;

function playGame(){
    for (let i = 0; i < 5; i ++){
        const winStatus = playRound();
        console.log(winStatus);
    }

    if (playerScore > compScore){
        alert(`You win with ${playerScore} score`);
    } else {
        alert(`Computer win with ${compScore} score`);       
    }

}

playGame();