const strike = document.getElementById("strike");
const team1superover = document.getElementById("team1-superover");
const team2superover = document.getElementById("team2-superover");
const scoreteam1 = document.getElementById("score-team1");
const scoreteam2 = document.getElementById("score-team2");
const wicketsTeam1 = document.getElementById("wickets-team1");
const wicketsTeam2 = document.getElementById("wickets-team2");
const strikeSound = new Audio("http://bit.ly/so-ball-hit");
const cheerSound = new Audio("http://bit.ly/so-crowd-cheer");
let reset = document.getElementById("reset");

strike.addEventListener("click", updateScore);

let arr = [0,1,2,3,4,5,6,"w"];
let team1Balls = 0;
let team1wickets = 0;
let team2Balls = 0;
let team2wickets = 0;
let team1Score = 0;
let team2Score = 0;
let type = 1;

function endGame(){
    cheerSound.play()
    if(team1Score>team2Score){
        alert("Team 1 Won")
    }else if(team1Score<team2Score){
        alert("Team 2 Won")
    }else{
        alert("Its a Tie")
    }
}

function displayScore(){
    scoreteam1.innerText = team1Score;
    scoreteam2.innerText = team2Score;
    wicketsTeam1.innerText = team1wickets;
    wicketsTeam2.innerText = team2wickets;

}

function updateScore(){
    strikeSound.pause();
    strikeSound.currentTime = 0;
    strikeSound.play();
    let currScore = arr[Math.floor(Math.random()*8)];

    if(type == 2){
        team2Balls++
        team2superover.children[team2Balls-1].innerText = currScore;

        if(currScore == "w"){
            team2wickets++
        }else{
            team2Score+= currScore;
        }
        if(team2Balls==6 || team2wickets==2){
            type = 3
            endGame();
        }
        
    }

    if(type == 1){
        team1Balls++
        team1superover.children[team1Balls-1].innerText = currScore;

        if(currScore == "w"){
            team1wickets++
        }else{
            team1Score+= currScore;
        }
        if(team1Balls==6 || team1wickets == 2){
            type = 2
        }
    }
    
displayScore();
}

reset.onclick = function(){
    window.location.reload();
}