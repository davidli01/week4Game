var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox

/*
var array1= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var array2= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var array3= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var array4= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var length1 = array1.length;
var i1 = Math.floor(Math.random()*length);
var length2 = array2.length;
var i2 = Math.floor(Math.random()*length);
var length3 = array3.length;
var i3 = Math.floor(Math.random()*length);
var length4 = array4.length;
var i4 = Math.floor(Math.random()*length);

//assigning the 4 images with random numbers in the array, POSSIBLE DUPLICATE
var rubyNum = array1[i1];
var sapphireNum = array2[i2];
var emeraldNum = array3[i3];
var topazNum = array4[i4];
console.log(rubyNum, sapphireNum, emeraldNum, topazNum);
*/

var rubyNum = Math.floor(Math.random()*10)+1
console.log(rubyNum);
var sapphireNum = Math.floor(Math.random()*10)+1
var emeraldNum = Math.floor(Math.random()*10)+1
var topazNum = Math.floor(Math.random()*10)+1
console.log(sapphireNum);
console.log(emeraldNum);
console.log(topazNum);
//assign the randon numbers above to the images (class)
document.querySelector(".ruby").innerHTML = rubyNum;
document.querySelector(".sapphire").innerHTML = sapphireNum;
document.querySelector(".emerald").innerHTML = emeraldNum;
document.querySelector(".topaz").innerHTML = topazNum;
//assign random number for set number
var num = Math.floor(Math.random()*20)+30;
set = num;
console.log(set);

document.getElementByTagName("img").onclick = function(){

}

/*
//retieve the data-num from gems and setting to var, to be used later
var rubyNum = document.querySelector(".ruby").getAttribute("data-num");
var sapphireNum = document.querySelector(".sapphire").getAttribute("data-num");
var emeraldNum = document.querySelector(".emerald").getAttribute("data-num");
var topazNum = document.querySelector(".topaz").getAttribute("data-num");
//console.log(rubyNum);
//console.log(sapphireNum);
//console.log(emeraldNum);
//console.log(topazNum);
*/