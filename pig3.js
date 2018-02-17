/*
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.
*/

var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector(".btn-roll").addEventListener("click", function () {
    "use strict";
    
    if(gamePlaying) {
        //1.random number
        var dice1 = Math.ceil(Math.random() * 6);
        var dice2 = Math.ceil(Math.random() * 6);
        //2.Display result
        var dice1DOM = document.querySelector(".dice1");
        var dice2DOM = document.querySelector(".dice2");
        dice1DOM.style.display = "block";
        dice1DOM.src = "dice-" + dice1 + ".png";
        dice2DOM.style.display = "block";
        dice2DOM.src = "dice-" + dice2 + ".png";
        //3.Update the round score IF the rolled number was NOT 1
        if (dice1 > 1 && dice2 > 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }
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
        if (scores[activePlayer] >= 20) {
            document.querySelector("#name-" + activePlayer).textContent = "WINNER!!";
        
            document.querySelector(".dice1").style.display = "none";
            document.querySelector(".dice2").style.display = "none";
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
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

   
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
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


