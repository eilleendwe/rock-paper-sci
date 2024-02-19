const choice = ["rock", "paper", "scissors"];

function getCompChoice() {
    const index = Math.floor(Math.random() * 3);
    return choice[index];
}

let playerScore = 0;
let compScore = 0;
let round = 0;

const playerSign = document.getElementById('player-sign');
const compSign = document.getElementById('comp-sign');

function setDisplay(target, choice){
    if(choice === "rock"){
        target.textContent = "✊";
    } else if (choice === "paper"){
        target.textContent = "✋";
    } else {
        target.textContent = "✌";
    }
}

let playerScores = document.getElementById('player-score');
let compScores = document.getElementById('comp-score');


function playRound(player){
    const comp = getCompChoice();
    
    setDisplay(playerSign, player);
    setDisplay(compSign, comp);

    // console.log(comp);
    // console.log(player);

    const draw = (comp === player);
    const win = (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") || (player === "scissors" && comp === "paper");
    const lose = (!draw && !win);

    if (draw) {
        alert(`Draw! Both chose ${player}`);
    } else if (win) {
        playerScore ++;
        alert(`You win! ${player} beats ${comp}`);
    } else {
        compScore ++;
        alert(`You lose! ${comp} beats ${player}`);
        
    }

    playerScores.textContent = `Player: ${playerScore}`;
    compScores.textContent = `Computer: ${compScore}`;

    console.log(`your score: ${playerScore}`);
    console.log(`computer score: ${compScore}`);

    round ++;
}


// function playGame(){
//     for (let i = 0; i < 5; i ++){
//         playRound();
//     }

//     if (playerScore > compScore){
//         alert(`You win with ${playerScore} score`);
//     } else if (compScore > playerScore) {
//         alert(`Computer win with ${compScore} score`);       
//     } else {
//         alert(`Draw with ${compScore} score`)
//     }

// }

const btnList = document.querySelectorAll(".choice button");

for (let i = 0; i < btnList.length; i++){
    btnList[i].addEventListener("click", (e) => {
        console.log(e.target.dataset.value);
        const playerChoice = e.target.dataset.value;
        playRound(playerChoice);
        if (playerScore === 5 || compScore === 5){
            if (playerScore === 5){
                alert('You win');
            }else {
                alert('You lose!');
            }

            playerScore = 0;
            compScore = 0;
            playerScores.textContent = "Player: " + playerScore;
            compScores.textContent = "Computer: " + compScore;


        }
    })

}

// rock.addEventListener("click", () =>{
//     alert('123');
// })

//playGame();