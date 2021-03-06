let playerScore = 0;
            let computerScore = 0;

            function computerPlay () {
                //Get a random computer choice
                let compChoice = Math.floor(Math.random() * 3);
                switch (compChoice) {
                    case 0:
                        return "Rock";

                    case 1:
                        return "Paper";

                    case 2:
                        return "Scissors";
                }
            }

            function playRound (playerSelection, computerSelection) {
                if (playerSelection == computerSelection) {
                    return playerSelection + " and " + computerSelection + " are tied!"
                }
                else if (computerSelection == "Paper") {
                    switch (playerSelection) {
                        case "Scissors":
                            playerScore++
                            return "Scissors beats paper! Player Wins!"

                        case "Rock":
                            computerScore++
                            return "Paper beats rock! Computer wins!"
                    }
                }
                else if (computerSelection == "Rock") {
                    switch (playerSelection) {
                        case "Scissors":
                            computerScore++
                            return "Rock beats Scissors! Computer wins!"

                        case "Paper":
                            playerScore++
                            return "Paper beats rock! Player wins!"
                    }
                }
                else if (computerSelection == "Scissors") {
                    switch (playerSelection) {
                        case "Paper":
                            computerScore++
                            return "Scissors beats paper! Computer wins!"

                        case "Rock":
                            playerScore++
                            return "Rock beats scissors! Player wins!"
                    }
                }
            }

            function game() {
                for (i = 0; i < 5; i++) {
                    let playerSelection = prompt("Rock, Paper, or Scissors?");
                    let computerSelection = computerPlay();
                    console.log(playRound(playerSelection, computerSelection));
                }

                getScore();
            }

            function getScore() {
                console.log("Your score: " + playerScore);
                console.log("The computer's score: " + computerScore);
            }
