var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox

var ruby = document.querySelector(".ruby").value = Math.floor(Math.random()*10)+1;
var emerald = document.querySelector(".emerald").value = Math.floor(Math.random()*10)+1;
var topaz = document.querySelector(".topaz").value = Math.floor(Math.random()*10)+1;
var sapphire = document.querySelector(".sapphire").value = Math.floor(Math.random()*10)+1;

console.log(ruby);

var rubyNum = Math.floor(Math.random()*10)+1;
console.log(rubyNum);

//assign random number for set number
function randomNum() {
	set = Math.floor(Math.random()*20)+30;
	return set;
}
var set = randomNum();
console.log(set);
//put random number generated into the number box
document.querySelector('.numBox').innerHTML = set;
//function if/else, when clicking on each img what will happen
/*
function addNum() {
	var gem = document.querySelectorAll('img');
	var number = gem.getAttribute('data-num');
	console.log(number);
	if (this.getAttribute('class') == 'ruby'){
		total = total + number;
	}else if (this.getAttribute('class') == 'emerald'){
		total = total + number;
	}else if (this.getAttribute('class') == 'sapphire'){
		total = total + number;
	}else if(this.getAttribute('class') == 'topaz'){
		total = total + number;
	}

	var score = document.querySelector('.scoreBox');
	score.innerHTML = total;
	return total;
}
addNum();
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
