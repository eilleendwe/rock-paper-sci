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
        return 'Draw! Both chose ${player}';
    } else if (win) {
        return 'You win! ${player} beats ${comp}';
    } else {
        return 'You lose! ${comp} beats ${player}';
    }

}

const result = playRound();
alert(result);