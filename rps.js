// Creates default player and computer score counters
let player = 0
let computer = 0

// When this evaluates to true, the scoreboard will not update
let endGame = false

// Randomly chooses a number between 0-2 and returns the CPU's choice
function computerPlay() {
   
    let cpuAnswer = Math.floor(Math.random() * 3);

    if (cpuAnswer == 0) {
        console.log('They selected Rock!');
        return 'Rock';
    } else if (cpuAnswer == 1) {
        console.log('They selected Paper!');
        return 'Paper';
    } else if (cpuAnswer == 2) {
        console.log('They selected Scissors!');
        return 'Scissors';
    }
}

// Checks player and CPU choices, then returns player or CPU score increase
function playRound(playerSelection, computerSelection) {
    console.log('Starting round...')
    console.log('You selected ' + playerSelection + '!')
    computerSelection = computerPlay()

    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('You lose! Paper beats Rock!');
        return computer += 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lose! Scissors beats Paper!');
        return computer += 1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('You lose! Rock beats Scissors!');
        return computer += 1;
    } 
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win! Rock beats Scissors!');
        return player += 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You win! Paper beats Rock!');
        return player += 1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win! Scissors beats Paper!')
        return player += 1;
    } else if (playerSelection == computerSelection) {
        console.log('Its a tie!');
        return;
    }

}

// Event listeners for each button. Plays a round with each button click
const rockButton = document.querySelector("#Rock");
rockButton.addEventListener('click', function (e) {
    
    console.log(e);

    finalScore();

    if (endGame === true) {
        console.log('The game is already over.')
        return;
    } else {
        playRound('Rock',);
    };

    
});

const paperButton = document.querySelector("#Paper");
paperButton.addEventListener('click', function (e) {
    
    console.log(e);

    finalScore();

    if (endGame === true) {
        console.log('The game is already over.')
        return;
    } else {
        playRound('Paper',);
    };

    
});

const scissorsButton = document.querySelector("#Scissors");
scissorsButton.addEventListener('click', function (e) {
    
    console.log(e);
    
    finalScore();

    if (endGame === true) {
        console.log('The game is already over.')
        return;
    } else {
        playRound('Scissors',);
    };
    
    
});

// Stops the game when either player reaches 5 points
function finalScore() {
    if (player == 5 || computer == 5) {
        if (endGame === true) {
            return;
        } else {
    console.log('Here are the final scores!')

    const scoreboard = document.getElementById('Scoreboard')
    scoreboard.style.borderStyle = 'solid';
    scoreboard.style.borderColor = 'black';
        
    const playerScore = document.createElement('h1');
    playerScore.textContent = 'Your final score: ' + player;
    scoreboard.appendChild(playerScore);
        
    const cpuScore = document.createElement('h1');
    cpuScore.textContent = 'Their final score: ' + computer;
    scoreboard.appendChild(cpuScore);

    endGame = true 
        };

    } else { 
        return;
    };
};