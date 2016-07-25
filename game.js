var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox

//function for random number to gems
function newNum(){
	var elGem = document.querySelectorAll('img');
	for (var i = 0; i < elGem.length; i++)
		elGem[i].setAttribute('data-num', Math.floor(Math.random()*10)+1);
}
newNum();

//assign random number for set number
function randomNum() {
	set = Math.floor(Math.random()*20)+30;
	document.querySelector('.numBox').innerHTML = set;
	return set;
}
//console.log(set);
//put random number generated into the number box
randomNum();

//-------------------------
function resetTotal(){
	total = 0;
	document.querySelector(".scoreBox").innerHTML = total;
	randomNum();
}

function invis(){
	document.querySelector('.board').innerHTML = " ";
}
//function that retrieves the data-num
//need to place event object in parameter to use event properties
function num(e){
	//target, gets the element that triggered a specific event
	var target = e.target;
	//selected elemenet get attribute
	var gemNum = parseInt(target.getAttribute('data-num'));
	//console.log(gemNum);
	//if match set number stop adding else keep running
	//console.log(total);
	console.log(set);
	total = total + gemNum;
	console.log(total);
	document.querySelector(".scoreBox").innerHTML = total;
	if (total === set) {
		document.querySelector(".board").innerHTML = "YOU WIN!";
		wins++
		document.querySelector(".win").innerHTML = "Wins: " + wins;
		resetTotal();
		newNum();
		var myVar = setInterval(invis, 3000);
		//target = Math.floor(Math.random()*10)+1;
	}else if (total > set) {
		document.querySelector(".board").innerHTML = "YOU LOSE! TRY AGAIN!";
		loses++
		document.querySelector(".lose").innerHTML = "Loses: " + loses;
		resetTotal();
		newNum();
		var myVar = setInterval(invis, 3000);
	}
}


//Loop through the nodelist to apply event to all elements in the list.
//store the nodelist in 'list'
var list = document.querySelectorAll('img');
//create loop with list
for (var i = 0; i < list.length; i++) {
	list[i].onclick = num;
}
