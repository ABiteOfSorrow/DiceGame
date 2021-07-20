alert("If you want play the game, click the NEW GAME Button please");


// new game button active
document.querySelector('.btn-newGame').addEventListener('click', init);

// initializing game
function init() {
    duringPlay = true;
    totalScores = 0;
    activePlayer = 1;
    currentScore = 0;
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('score-p1').textContent = totalScores;
    document.getElementById('score-p2').textContent = totalScores;
    document.getElementById('current-p1').textContent = currentScore;
    document.getElementById('current-p2').textContent = currentScore;
    document.querySelector('.plate-p1').classList.add('active');
    document.querySelector('.plate-p2').classList.remove('active');
    document.querySelector('.plate-p1').classList.remove('EndGame');
    document.querySelector('.plate-p2').classList.remove('EndGame');
}


//roll dice button active
document.querySelector('.btn-rollDice').addEventListener('click', function () {
    if (duringPlay == true) {
        let dicePoint = Math.floor(Math.random() * 6) + 1
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice1').src = 'images/diceWhite/diceWhite' + dicePoint + '.png';
        // If the number 1 is rolled, the turn is passed to another player and the currentScore is reset.
        if (dicePoint === 1) {
            currentScore[activePlayer] = '0';
            document.querySelector('#current-p' + activePlayer).textContent = currentScore[activePlayer];
            nextTurn();
            // If the number on the dice is not 1, the score is added to currentScore            
        } else if (dicePoint !== 1) {
            currentScore += dicePoint;
            document.querySelector('#current-p' + activePlayer).textContent = currentScore;
        }
    }
});



// hold button active
document.querySelector('.btn-holdPoint').addEventListener('click', function () {
    if (duringPlay == true) {
        totalScoresPrev = document.querySelector('#score-p' + activePlayer).textContent;
        let totalScores = currentScore + Number(totalScoresPrev);
        document.querySelector('#score-p' + activePlayer).textContent = totalScores;
        // If the player gets 100 or more points, he wins, or give next turn
        if (totalScores >= 100) {
            alert(`Winner is PLAYER${activePlayer}!`);
            document.getElementById('dice1').style.display = 'none';
            document.querySelector('.plate-p' + activePlayer).classList.add('EndGame');
            document.querySelector('.plate-p' + activePlayer).classList.remove('active');
        } else if (currentScore !== 0) {
            nextTurn();
            // each plyer must roll the dice at least once to press hold
        } else {
            alert("You must roll the dice at least once");
        }
    }
});



// give next turn
function nextTurn() {
    if (activePlayer === 1) {
        activePlayer = 2;
    } else {
        activePlayer = 1;
    }
    currentScore = 0;

    document.getElementById('current-p1').textContent = '0';
    document.getElementById('current-p2').textContent = '0';
    document.querySelector('.plate-p1').classList.toggle('active');
    document.querySelector('.plate-p2').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
}
