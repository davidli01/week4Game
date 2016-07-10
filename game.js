var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox

//assign gems data-num attribute to hold random generated number
var elRuby = document.querySelector('.ruby');
var elEmerald = document.querySelector('.emerald');
var elSapphire = document.querySelector('.sapphire');
var elTopaz = document.querySelector('.topaz');
//setAttribute('data-num', Math.floor(Math.random()*10)+1);
var numRuby = elRuby.setAttribute('data-num', Math.floor(Math.random()*10)+1);
var numSapphire = elSapphire.setAttribute('data-num', Math.floor(Math.random()*10)+1);
var numEmerald = elEmerald.setAttribute('data-num', Math.floor(Math.random()*10)+1);
var numTopaz = elTopaz.setAttribute('data-num', Math.floor(Math.random()*10)+1);
//retrieves the data-num successfully
var ruby = elRuby.getAttribute('data-num');
var sapphire = elSapphire.getAttribute('data-num');
var emerald = elEmerald.getAttribute('data-num');
var topaz = elTopaz.getAttribute('data-num');
//console.log(ruby);
//console.log(emerald);
//console.log(sapphire);
//console.log(topaz);
//assign random number for set number
function randomNum() {
	set = Math.floor(Math.random()*20)+30;
	return set;
}
var set = randomNum();
//console.log(set);
//put random number generated into the number box
document.querySelector('.numBox').innerHTML = set;

//-------------------------
function resetTotal(){
	total = 0;
	document.querySelector(".scoreBox").innerHTML = total;
	document.querySelector('.numBox').innerHTML = randomNum();
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
		alert("WIN!");
		wins++
		document.querySelector(".win").innerHTML = wins;
		resetTotal();
		target = Math.floor(Math.random()*10)+1;
	}else if (total > set) {
		alert("LOSE!");
		loses++
		document.querySelector(".lose").innerHTML = loses;
		resetTotal();
		target = Math.floor(Math.random()*10)+1;
	}
}


//Loop through the nodelist to apply event to all elements in the list.
//store the nodelist in 'list'
var list = document.querySelectorAll('img');
//create loop with list
for (var i = 0; i < list.length; i++) {
	list[i].onclick = num;
}
