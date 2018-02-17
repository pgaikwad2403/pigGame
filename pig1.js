/*
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
*/

var scores, roundScore, activePlayer, gamePlaying, prevScore;

init();


document.querySelector(".btn-roll").addEventListener("click", function () {
    "use strict";
    
    if(gamePlaying) {
        //1.random number
        //var dice = 6;
        var dice = Math.ceil(Math.random() * 6);
        
        //2.Display result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        
        //3.Update the round score IF the rolled number was NOT 1
        if (dice === 6 && prevScore === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0";
            nextPlayer();
           
        } else if (dice > 1) {
            //Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            
        } else {
            //Next Player
            nextPlayer();
        }
        
        prevScore = dice;
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    "use strict";
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        //Check if player has won
        if (scores[activePlayer] >= 200) {
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!!";
        
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
    
});
        
function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

   
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    prevScore = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

}



