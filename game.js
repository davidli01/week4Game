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

var ruby = elRuby.getAttribute('data-num');
var sapphire = elSapphire.getAttribute('data-num');
var emerald = elEmerald.getAttribute('data-num');
var topaz = elTopaz.getAttribute('data-num');
console.log(ruby);
console.log(emerald);
console.log(sapphire);
console.log(topaz);
// console.log(elEmerald);
//console.log(numRuby);
// console.log(numSapphire);
/*
//assign random number for set number
function randomNum() {
	set = Math.floor(Math.random()*20)+30;
	return set;
}
var set = randomNum();
//console.log(set);
//put random number generated into the number box
document.querySelector('.numBox').innerHTML = set;

//function
function addNum(e){
	var gem = e.target;
	return gem;
	console.log(gem);

}

function matchNum(this){
	if (this.getAttribute('class') === "ruby") {
		total = total + elRuby
	}
}


function alert(){
	alert('hi');
}

var el = document.querySelectorAll('img');
document.querySelectorAll('img').onclick = alert;


*/



/*
//function if/else, when clicking on each img what will happen
var number = document.querySelectorAll('img');
console.log(number);
var gemNum = number[1].getAttribute(data-num);
console.log(gemNum);
*/
/*
function addNum(this) {
	var self = this;
	var number = self.data-num;

	if (self.getAttribute('data-num') === 'ruby'){
		total = total + number;
	}else if (this.getAttribute('class') === 'emerald'){
		total = total + number;
	}else if (this.getAttribute('class') === 'sapphire'){
		total = total + number;
	}else if(this.getAttribute('class') === 'topaz'){
		total = total + number;
	}

	var score = document.querySelector('.scoreBox');
	score.innerHTML = total;
	return total;
}
*/
/*
document.querySelectorAll('input').onclick = addNum;


console.log(number);
console.log(total);

*/

/*
//get attributes for gem elements (data-num)
var gem = document.querySelectorAll('img');
console.log(gem);
var img1 = gem[0].dataset.num;
console.log(img1);
var img2 = gem[1].dataset.num;
var img3 = gem[2].dataset.num;
var img4 = gem[3].dataset.num;

function addnum() {
	if ()
}
document.querySelectorAll("img").onclick = addNum;

*/
