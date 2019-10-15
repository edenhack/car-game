<script src = "https://code.jquery.com/jquery-3.4.1.slim.js"></script>

let playerwin = 0;
let playerlose = 0;
let targetscore = 0;
let playerscore = 0;

function randomNum(){
    Math.floor(Math.random()*12);
}

function scoreBoard(){
    $("#score").html("Score: " + playerscore);
    $("#targetscore").html("Target: " + targetscore);
    $("#wins").html("Wins: " + playerwin);
    $("#loses").html("Lose: " + playerlose);
}