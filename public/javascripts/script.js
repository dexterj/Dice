//Dice Definitions
var die1 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
}
var die2 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
}
var die3 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
}
var die4 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
}
var die5 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,30,5,0,2*Math.PI);
	ctx.fill();
}
var die6 = function(x){
	var die=document.getElementById(x);
	var ctx=die.getContext("2d");
	ctx.clearRect(0, 0, 60, 60);
	ctx.fillStyle = "#000";
	ctx.beginPath();
	ctx.arc(15,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(45,15,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(40,40,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,45,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(15,30,5,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(30,15,5,0,2*Math.PI);
	ctx.fill();
}

var replaceById = function(x,y){
	document.getElementById(x).innerHTML=y;
}

var swapButton = function(){
	if ($("#replay").hasClass("gone")){
    	$("#play").addClass("gone");
		$("#replay").removeClass("gone");
	}
	else {
		$("#replay").addClass("gone");
		$("#play").removeClass("gone");
		dice = [];
		score = [];
		//replaceById("winner-winner","")
		replaceById("score-a",0);
		replaceById("score-b",0);
		$("#result").slideUp("slow");
		for (var i = 1; i <= 6; i++) {
			die6('dice'+i);
		}
	};
}
var displayScore = function(){
	var scoreA = score[0];
	var scoreB = score[1];
	if (score[0] == "undefined"){
		replaceById("score-a",0);
		replaceById("score-b",0);	
	}
	else {
		replaceById("score-a",scoreA);
		replaceById("score-b",scoreB);
	};
}
var alertPlayerA = function(){
	displayScore();
	replaceById("winner-winner","Player A Wins!")
	$("#result").slideDown("slow");
}
var alertPlayerB = function(){
	displayScore();
	replaceById("winner-winner","Player B Wins!")
	$("#result").slideDown("slow");
}
var alertDraw = function(){
	displayScore();
	replaceById("winner-winner","DRAW")
	$("#result").slideDown("slow");
}

var checkForTriples = function(){
	// A rolls
	if (dice[0] == 1 && dice[1] == 1 && dice[2] == 1){
		score.push("-");
		score.push("-");
		return(alertPlayerB());
	}else if (dice[0] == dice[1] && dice[0] == dice[2]){
		score.push("-");
		score.push("-");
		return(alertPlayerA());
	}else if (dice[0] == 4 && dice[1] == 5 && dice[2] == 6
		  || dice[1] == 4 && dice[2] == 5 && dice[0] == 6
		  || dice[2] == 4 && dice[0] == 5 && dice[1] == 6){
		score.push("-");
		score.push("-");
		return(alertPlayerA());
	}else if (dice[0] == 1 && dice[1] == 2 && dice[2] == 3
		  || dice[1] == 1 && dice[2] == 2 && dice[0] == 3
		  || dice[2] == 1 && dice[0] == 2 && dice[1] == 3){
		score.push("-");
		score.push("-");
		return(alertPlayerB());
	// B rolls
	}else if (dice[3] == 1 && dice[4] == 1 && dice[5] == 1){
		score = [];
		score.push("-");
		score.push("-");
		return(alertPlayerA());
	}else if (dice[3] == dice[4] && dice[3] == dice[5]){
		score = [];
		score.push("-");
		score.push("-");
		return(alertPlayerB());
	}else if (dice[3] == 1 && dice[4] == 2 && dice[5] == 3
		  || dice[4] == 1 && dice[5] == 2 && dice[3] == 3
		  || dice[5] == 1 && dice[3] == 2 && dice[4] == 3){
		score = [];
		score.push("-");
		score.push("-");
		return(alertPlayerA());
	}else if (dice[3] == 4 && dice[4] == 4 && dice[5] == 4
		  || dice[4] == 4 && dice[5] == 4 && dice[3] == 4
		  || dice[5] == 4 && dice[3] == 4 && dice[4] == 4){
		score = [];
		score.push("-");
		score.push("-");
		return(alertPlayerB());
	}else checkForDoublesA();
}
var checkForDoublesA = function(){
	if (dice[0] == dice[1])
		score.push(dice[2]);
	else if (dice[0] == dice[2])
		score.push(dice[1]);
	else if (dice[1] == dice[2])
		score.push(dice[0]);
	else score.push(0);
	checkForDoublesB();
}
var checkForDoublesB = function(){	
	if (dice[3] == dice[4])
		score.push(dice[5]);
	else if (dice[3] == dice[5])
		score.push(dice[4]);
	else if (dice[4] == dice[5])
		score.push(dice[3]);
	else score.push(0);
	checkScore();
}
var checkScore = function(){
	if (score[0] > score[1])
		alertPlayerA();
	else if (score[1] > score[0])
		alertPlayerB();
	else alertDraw();
}

var throwDice = function(num){
	console.log(num);
	dice = [];
	for (var i = 1; i <= 6; i++) {
		j=i;
		var r = Math.random()*6;
			x = Math.floor(r)+1;
			window['die'+x] ('dice'+j);
			dice.push(x);
	};
	if (num >= 0){
		setTimeout(function(){
			throwDice(num-1);
		}, 17*20/(num^3));
	}else{
		swapButton();
		checkForTriples();
	}
}

var playGame = function(){
	throwDice(20);	
}

var resetGame = function(){
	for (var i = 1; i <= 6; i++) {
		document.getElementById("dice"+i).innerHTML='?';

	};
	swapButton();
}

var dice = [];
var score = [];

for (var i = 1; i <= 6; i++) {
			die6('dice'+i);
}
$("#play").on("click", playGame);
$("#replay").on("click", resetGame);


