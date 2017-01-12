//--------------------------------------------------------------
//--------------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
Write a function with two strings as parameters.
		The function should concatenate the string.

Write a function that will help me easily calculate monthly bills.

Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.
*/

/*

function farewell(name){
	return "goodbye " + name + " , have fun";
}

var addFarewell = farewell("Sarah");


console.log(addFarewell);
////////////////////////////////

function bills(waterBill, phoneBill, dogfoodBill){
	return "Your monthly bill is " + totalBill;
}

var waterBill =num1;
var phoneBill =num2;
var dogfoodBill =num3;
var totalBill = num1 + num2 + num3;

console.log(totalBill(275, 388, 45))
*/


/*
Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.
*/
/*
function priceCheck(quantity, price, tax, itemName){
	var quantity = ""
	var price = ""
	var tax = ""
	var itemName
}



function setLine(){
	console.log("-----------------------------------------");
}
//to break up space on console
*/
//answers for the challenge is below:

//bronze:
function twoStrings(edgar, allen){
	return edgar + allen
}
console.log(twoStrings("nevermore ", "nevermore"))

//silver:
function billz(rent, water){
	var billzTotal = rent + water
	return billzTotal
}
console.log(billz(550, 50))

//gold:
//this references the previous functio
console.log(calculatePriceIndiana(100, .99, 0.07))














