$(document).ready(function(){
let playerWin = 0;
let playerLose = 0;
let targetScore = 0;
let playerScore = 0;
const carScore = {
    bmw: 0,
    nissan: 0,
    rx7: 0,
    skyline: 0,
}

function scoreBoard(){
    $("#Score").html("Score: " + playerScore);
    $("#Target-Score").html("Target: " + targetScore);
    $("#Wins").html("Wins: " + playerWin);
    $("#Losses").html("Losses: " + playerLose);
}

$(".card").click(function(){
    if (playerScore < targetScore){
    playerScore += parseInt($(this).attr("value"));
    scoreBoard();
    }
    else if (playerScore > targetScore) {
        alert("You lose!");
        playerLose++;
        pagePrep();
        scoreBoard();
    }
    else if (playerScore === targetScore){
        alert("You win!");
        playerWin++;
        pagePrep();
        scoreBoard();
    }
});

function pagePrep(){
    carScore.bmw = Math.floor(Math.random()*12 + 1);
    $("#bmw-image").attr("value", carScore.bmw);
    carScore.nissan = Math.floor(Math.random()*12 + 1);
    $("#nissan-image").attr("value", carScore.nissan);
    carScore.rx7 = Math.floor(Math.random()*12 + 1);
    $("#rx7-image").attr("value", carScore.rx7);
    carScore.skyline = Math.floor(Math.random()*12 + 1);
    $("#skyline-image").attr("value", carScore.skyline);
    targetScore = Math.floor(Math.random()*(120-19)+19);
    playerScore = 0;
}

pagePrep();
scoreBoard();
})