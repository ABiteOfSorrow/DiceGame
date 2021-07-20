alert("If you want play the game, click the NEW GAME Button please");


// new game button active
document.querySelector('.btn-newGame').addEventListener('click', init);

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


