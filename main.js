//Make the computer randomly generate a choice
//Depending on random int, assign a different value
function computerPlay() {
  let choice = Math.floor(Math.random() * 3)
  switch (choice) {
    case 0:
      choice = "Rock";

    case 1:
      choice = "Paper";

    case 2:
      choice = "Scissors"
  }
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return playerSelection + " and " + computerSelection + " are the same! The game is a tie!"
  } else if (computerSelection == "Rock") {
    switch (playerSelection) {
      case "Scissors":
        return "Rock beats scissors, computer wins!";

      case "Paper":
        return "Paper beats rock, player wins!"
    }
  } else if (computerSelection == "Paper") {
    switch (playerSelection) {
      case "Rock":
        return "Paper beats rock, computer wins!";

      case "Scissors":
        return "Scissors beats paper, player wins!";
    }
  } else if (computerSelection == "Scissors") {
    switch (playerSelection) {
      case "Rock":
        return "Rock beats scissors, player wins!";

      case "Paper":
        return "Scissors beats paper, computer wins!"
    }
  }
}
