var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox


var elem1 = document.createElement("img");
//set attributes for img tag
elem1.setAttribute("class", "ruby");
elem1.setAttribute("src", "assets/image/ruby.jpg");
elem1.setAttribute("data-num", Math.floor(Math.random()*10)+1);
//append this new elem1 on to box1 
document.querySelector(".box1").appendChild(elem1);

var elem2 = document.createElement("img");
elem2.setAttribute("class", "sapphire");
elem2.setAttribute("src", "assets/image/Sapphire.png");
elem2.setAttribute("data-num", Math.floor(Math.random()*10)+1);
document.querySelector(".box2").appendChild(elem2);

var elem3 = document.createElement("img");
elem3.setAttribute("class", "emerald");
elem3.setAttribute("src", "assets/image/emerald.png");
elem3.setAttribute("data-num", Math.floor(Math.random()*10)+1);
document.querySelector(".box3").appendChild(elem3);

var elem4 = document.createElement("img");
elem4.setAttribute("class", "topaz");
elem4.setAttribute("src", "assets/image/topaz.jpg");
elem4.setAttribute("data-num", Math.floor(Math.random()*10)+1);
document.querySelector(".box4").appendChild(elem4);

/*
var rubyNum = Math.floor(Math.random()*10)+1
var sapphireNum = Math.floor(Math.random()*10)+1
var emeraldNum = Math.floor(Math.random()*10)+1
var topazNum = Math.floor(Math.random()*10)+1


//assign the randon numbers above to the images (class)
var el1 =document.querySelector(".ruby").innerHTML = rubyNum;
var el2 =document.querySelector(".sapphire").innerHTML = sapphireNum;
var el3 =document.querySelector(".emerald").innerHTML = emeraldNum;
var el4 =document.querySelector(".topaz").innerHTML = topazNum;

console.log(el1);
console.log(el2);
console.log(el3);
console.log(el4);
*/
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


