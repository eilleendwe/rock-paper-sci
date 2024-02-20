//array pilihan yang ada
const choice = ["rock", "paper", "scissors"];

//fungsi komputer memilih
function getCompChoice() {
    const index = Math.floor(Math.random() * 3);
    return choice[index];
}

//variabel score
let playerScore = 0;
let compScore = 0;

const playerSign = document.getElementById('player-sign');
const compSign = document.getElementById('comp-sign');

//set display pilihan masing masing
function setDisplay(target, choice){
    if(choice === "rock"){
        target.textContent = "✊";
    } else if (choice === "paper"){
        target.textContent = "✋";
    } else {
        target.textContent = "✌";
    }
}

//variabel untuk menampilkan score setiap ronde
let playerScores = document.getElementById('player-score');
let compScores = document.getElementById('comp-score');

//fungsi bermain per-ronde
function playRound(player){
    const comp = getCompChoice();
    
    setDisplay(playerSign, player);
    setDisplay(compSign, comp);

    const draw = (comp === player);
    const win = (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") || (player === "scissors" && comp === "paper");
    const lose = (!draw && !win);

    let komen = document.getElementById('comment');
    

    if (draw) {
        komen.textContent = `Draw! Both chose ${player}`;
    } else if (win) {
        playerScore ++;
        komen.textContent = `You win! ${player} beats ${comp}`;
    } else {
        compScore ++;
        komen.textContent = `You lose! ${comp} beats ${player}`;
        
    }

    compScores.textContent = `Computer: ${compScore}`;
    playerScores.textContent = `Player: ${playerScore}`;

    // console.log(`your score: ${playerScore}`);
    // console.log(`computer score: ${compScore}`);

}

const btnList = document.querySelectorAll(".choice button");

//loop saat kita memilih choice rock paper scissors
for (let i = 0; i < btnList.length; i++){
    btnList[i].addEventListener("click", (e) => {
        console.log(e.target.dataset.value);
        const playerChoice = e.target.dataset.value;
        playRound(playerChoice);
        
        //penentu pemenang game
        if (playerScore === 5 || compScore === 5){
            if (playerScore === 5){
                //buat skor total nya muncul dulu baru kasih alert
                //dikasi jeda 100ms
                setTimeout(() => {
                    alert('GAME OVER! YOU WIN!');
                    resetGame();
                }, 100);
            }else {
                setTimeout(() => {
                    alert('GAME OVER! YOU LOST!');
                    resetGame();
                }, 100);
            }
        }
    })

}

//fungsi untuk reset game saat salah satu mencapai skor 5
function resetGame(){
    playerScore = 0;
    compScore = 0;
    playerScores.textContent = "Player: " + playerScore;
    compScores.textContent = "Computer: " + compScore;

}

let play = document.getElementById('play')
let audio = new Audio("toothless.mp3");
audio.loop = true;
audio.play();

play.onclick = mute;

function mute() {
    audio.muted = true;
    play.onclick = unmute;
    play.textContent = "🔇";
}

function unmute() {
    audio.muted = false;
    play.onclick = mute;
    play.textContent = "🔊";
}



// rock.addEventListener("click", () =>{
//     alert('123');
// })

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

//playGame();

