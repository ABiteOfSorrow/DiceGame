<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- Lato font -->
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,600" rel="stylesheet" type="text/css">
    <!-- Ionic icons -->
    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="DiceBoardStyle.css">
    <title>Dice Game</title>
</head>

<body>
    <!-- player1-->
    <div class="container">
        <div class="plate-p1">
            <div class="playerName" id="name-p1">PLAYER 1</div>
            <div class="playerScore" id="score-p1">43</div>
            <div class="currentScoreBox">
                <div class="currentScoreLabel">CURRENT ROUND</div>
                <div class="currentScore" id="current-p1">11</div>
            </div>
        </div>
        <!-- End player1-->

        <!-- player2-->
        <div class="plate-p2">
            <div class="playerName" id="name-p2">PLAYER 2</div>
            <div class="playerScore" id="score-p2">72</div>
            <div class="currentScoreBox">
                <div class="currentScoreLabel">CURRENT ROUND</div>
                <div class="currentScore" id="current-p2">0</div>
            </div>
        </div>
        <!-- End player2-->

        <!-- Buttons -->
        <button class="btn-newGame"><span class="ion-ios-plus-outline"></span>NEW GAME</button>
        <button class="btn-rollDice"><span class="ion-ios-loop"></span>ROLL DICE</button>
        <button class="btn-holdPoint"><span class="ion-ios-download-outline"></span>HOLD</button>

        <!-- Dice images -->
        <img class="dice" id="dice1" src="images/diceWhite/diceWhite5.png" alt="dice">
    </div>

    <!-- JavaScript -->
    <script src="diceScript.js"></script>

</body>

</html>
