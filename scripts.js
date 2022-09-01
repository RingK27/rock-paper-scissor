function getComputerChoice() {
    let computerChoice = parseInt(Math.floor((Math.random() * 3) + 1));
    if (computerChoice == 1) {
        document.getElementById("rock").style.opacity = "1";
        document.getElementById("paper").style.opacity = "0.2";
        document.getElementById("scissor").style.opacity = "0.2";
        return computerChoice = "rock";        
    } else if (computerChoice == 2) {
        document.getElementById("paper").style.opacity = "1";
        document.getElementById("rock").style.opacity = "0.2";
        document.getElementById("scissor").style.opacity = "0.2";
        return computerChoice = "paper";
    } else {
        document.getElementById("scissor").style.opacity = "1";
        document.getElementById("rock").style.opacity = "0.2";
        document.getElementById("paper").style.opacity = "0.2";
        return computerChoice = "scissor";
    }
}

function playRound(playerChoice) { 
    roundNumber += 1;                 
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        result = "round <strong>draw</strong>";
    } else if ((playerChoice == "rock") && (computerChoice == "paper")) {
    result = "<strong>computer wins</strong> the round"
    computerWins += 1;
    } else if ((playerChoice == "paper") && (computerChoice == "scissor")) {
    result = "<strong>computer wins</strong> the round"
    computerWins += 1;
    } else if ((playerChoice == "scissor") && (computerChoice == "rock")) {
    result = "<strong>computer wins</strong> the round"
    computerWins += 1;
    } else {
    result = "<strong>player wins</strong> the round"
    playerWins += 1;
    }
    document.getElementById("round-"+roundNumber).innerHTML = "<strong>round</strong> "+ roundNumber + ": " + 
    result + " (computer "+computerChoice+" - player  "+playerChoice+".)";
    
    if (roundNumber == 5) {
        let resultStr = "";
        let refreshStr = '<br><br><button type="button" class="playBtn" onclick="location.reload()" style="background:black; color:white; border: 2px solid white; border-radius: 20px; cursor: pointer; height: 30px; width: 120px; "">Restart</button>';
        if (playerWins > computerWins) {
            resultStr = "player won " + playerWins + " times, computer won " + computerWins + " times, <strong>player wins</strong>!!!"
            document.getElementById("result").innerHTML = resultStr + refreshStr;     
        } else if (computerWins > playerWins) {
            resultStr = "player won " + playerWins + " times, computer won " + computerWins + " times, <strong>computer wins</strong>!!!"
            document.getElementById("result").innerHTML = resultStr + refreshStr;  
        } else {
            resultStr = "player won " + playerWins + " times, computer won " + computerWins + " times, it's a <strong>draw...</strong>"
            document.getElementById("result").innerHTML = resultStr + refreshStr;   
        }
    }
}

let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;