/* function hello(){
	console.log("Hello Sarah!");
}

//the above is the master copy. it is easier to write it once and then call the function multiple times, than to write it all multiple times as below.
//greeting will only greet sarah

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");


hello();

//this calls the function
//once you establish a function, you can go back from thousands of lines
//below, writing a function called greeting


function greeting(){
	console.log("Hello Aurora!")
}

greeting();

//below, adding numbers to functions
/*
function printNumber(){
	console.log(1)
}

printNumber();
//these parentheses after the function name establish that we are working with functions

function sumNum(){
	var num1 = 4;
	var num2 = 6;
	console.log(num1 + num2);
}

sumNum();

//writing functions for dividing, multiplying, and subtracting

function divisionNum(){
	var num1 = 10;
	var num2 = 2;
	console.log(num1 / num2);
}

divisionNum();

//using num1 and num2 is ok for every single one bc it only has local context. they only live here

function multiplyNum(){
	var num1 = 2;
	var num2 = 4;
	console.log(num1 * num2);
}

multiplyNum();

//

function subtractNum(){
	var num1 = 5;
	var num2 = 1;
	console.log(num1 - num2);
}

subtractNum();

//

function modNum(){
	var num1 = 12;
	var num2 = 5;
	console.log(num1 % num2);
}

modNum();

//function with parameters is expecting two numbers to be provided....building functions with information that will come later
//functions love to return things
//called parameters when you create them, called arguments when you call them
//parameters hold the value when they're created...."we are expecting this value...i.e. firstNumber, etc"
//arguments go in place of the parameters, "1, 2, 3"...the actual data




//in functional programming, always keep functions at the top for clarity
//functions keep your coding dry, reusable, transfersable
//naming should reflect what it's doing 


//below, adding parameters to the number functions
//
function yourNum(number){
	return("You are " + number);
}

yourNum("4");

//
function divisionNum(number){

	return(num1 / num2);
}

divisionNum(num1 = 2, num2 = 4);

//
function multiplyNum(number){

	return(num1 * num2 * num3);
}

multiplyNum(num1 = 2, num2 = 14, num3 = 9);

//

function subtractNum(){
	var num1 = 5;
	var num2 = 1;
	return(num1 - num2);
}

subtractNum();

//typcially the developer establishes the parameters, not the user


/*
function greeting(name){
	console.log("Good 'ay, " + name);
}

var addGreeting = greeting("Paul") + ", how are you today?";

console.log(addGreeting);
//above, no bueno bc you can't console.log a console.log



function greeting(name){
	return "Good 'ay, " + name;
}

var addGreeting = greeting("Paul") + ", how are you today?";

console.log(addGreeting);
//this is the correct way to do it. need to use return instead of console.log





function calculatePriceIndiana(quantity, price){
	var  tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalprice = totaltax + quantity * price;
//totalprice is the end all be all of the functions, and what we are ultimately looking for
	return totalprice;
}

console.log(calculatePriceIndiana(17, 5));
//anything inside of the curly braces is there for a reason. anything outside of it is outside for a reason
//pay attention to your code block
//order of operations....paretheses, exponents, multiply, divide, etc



//built-in functions example

var today = Date();
	console.log(today);
	//js knows it has a function for that


//console.log is a great tool for developers to be able to debug things

//built in objects example
var today = new Date();
	console.log(today.toDateString);

//if you hardcode it as a date, it'll forever be that date


function checkOdd(num){
	if (num % 2 == 0){
		return "great job!" + num +" is even"
	}else{
		return "whatchu doin, " + num +" is odd"
	}
}
console.log(checkOdd(9))

//above, evaluating a situation.....real life situation


function checkThree(num){
	if (num % 3 == 0){
		return "yay dude! " + num + " is divisible by three!"
	}else{
		return "ur a weirdo, " + num + " isn't even divisible by three"
	}
}
console.log(checkThree(6))
//checking if it is divisible by 3


//create a greeting function with customizable greeting depending on their name

function greetingCheck(name){
	if (name == "Erika"){
		return "hey gurl hey"
	}else if (name == "Mckenzie"){
		return "hey"
	}else{
		return "bye"
	}
}
var addGreeting = greetingCheck("Erika");
//come back to this later to make it work!!
*/










