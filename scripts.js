function getComputerChoice() {
    let computerChoice = parseInt(Math.floor((Math.random() * 3) + 1));
    if (computerChoice == 1) {
        return computerChoice = "rock";
    } else if (computerChoice == 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissor";
    }
}

function getPlayerChoice() {
    if (document.getElementById("playerChoice").value == 1 || document.getElementById("playerChoice").value == 2 || document.getElementById("playerChoice").value == 3) {
        playerChoice = parseInt(document.getElementById("playerChoice").value);        
    } else {
        alert("you have to input '1', '2' or '3', nothing different... i will pick for you");
        let playerChoice = parseInt(Math.floor((Math.random() * 3) + 1));                            
    }
    if (playerChoice == 1) {
        return playerChoice = "rock";
    } else if (playerChoice == 2) {
        return playerChoice = "paper";
    } else {        
        return playerChoice = "scissor";
    }    
}

function playRound() { 
    roundNumber += 1;
    if (roundNumber > 5) {
        let resultStr = "";
        let refreshStr = '<br><br><button type="button" class="playBtn" onclick="location.reload()">Restart</button>';
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
    } else {    
        let playerChoice = getPlayerChoice();    
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
    }  
}

let roundNumber = 0;
let playerWins = 0;
let computerWins = 0;