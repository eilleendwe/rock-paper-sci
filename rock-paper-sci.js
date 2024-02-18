const choice = ["rock", "paper", "scissors"];

function getCompChoice() {
    const index = Math.floor(Math.random() * 3);
    return choice[index];
}

let playerScore = 0;
let compScore = 0;

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
        console.log(`Draw! Both chose ${player}`);
    } else if (win) {
        playerScore ++;
        console.log(`You win! ${player} beats ${comp}`);
    } else {
        compScore ++;
        console.log(`You lose! ${comp} beats ${player}`);
        
    }

    console.log(`your score: ${playerScore}`);
    console.log(`computer score: ${compScore}`);

}


function playGame(){
    for (let i = 0; i < 5; i ++){
        playRound();
    }

    if (playerScore > compScore){
        alert(`You win with ${playerScore} score`);
    } else if (compScore > playerScore) {
        alert(`Computer win with ${compScore} score`);       
    } else {
        alert(`Draw with ${compScore} score`)
    }

}

playGame();