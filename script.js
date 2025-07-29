let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Enter your input (Rock, Paper, Scissor): ");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  const humanInput = humanChoice.toLowerCase();
  const computerInput = computerChoice.toLowerCase();
  if (humanInput === "paper" && computerInput === "rock") {
    console.log("You win! Paper beats rock");
    humanScore += 1;
  } else if (humanInput === "rock" && computerInput === "rock") {
    console.log("It's a tie");
  } else if (humanInput === "scissors" && computerInput === "rock") {
    console.log("You lose! Scissors beats rock");
    computerScore += 1;
  } else if (humanInput === "scissors" && computerInput === "scissors") {
    console.log("It's a tie");
  } else if (humanInput === "paper" && computerInput === "paper") {
    console.log("It's a tie");
  } else if (humanInput === "rock" && computerInput === "paper") {
    console.log("You lose! Rock beats paper");
    computerScore += 1;
  } else if (humanInput === "scissors" && computerInput === "paper") {
    console.log("You win! Scissors beats paper");
    humanScore += 1;
  } else if (humanInput === "paper" && computerInput === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore += 1;
  } else if (humanInput === "rock" && computerInput === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore += 1;
  } else {
    console.log("Invalid Input");
  }
  // console.log(`User Input: ${humanInput}`);
  // console.log(`Computer Input: ${computerInput}`);
  return { humanScore, computerScore };
}

function playGame() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  let play = playRound(humanChoice, computerChoice);
}
for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  alert("Congrats! You win! computer lost");
} else if (humanScore === computerScore) {
  alert("You both scored same score");
} else {
  alert("You lost against computer");
}
