var wins = 0;//win
var loses = 0;//lose

var set;//number
var total = 0;//scoreBox

var array = [10, 7, 5, 3];
var length = array.length;
var i = Math.floor(Math.random()*length);
var number = array[i];
console.log(number);
//retieve the data-num from gems and setting to var, to be used later
var rubyNum = document.querySelector(".ruby").getAttribute("data-num");
var sapphireNum = document.querySelector(".sapphire").getAttribute("data-num");
var emeraldNum = document.querySelector(".emerald").getAttribute("data-num");
var topazNum = document.querySelector(".topaz").getAttribute("data-num");
//console.log(rubyNum);
//console.log(sapphireNum);
//console.log(emeraldNum);
//console.log(topazNum);

