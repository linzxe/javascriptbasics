//how to create an array in js
var names = ["john", "hope", "vanessa", "sarah"];
var nums =[1,2,3,4,5];
var mixed = ["dog", false, 6, "squirrel", 2]
console.log(names[2], names[3])
//the fourth character of name two would be names[2][4]

//console.log(nums[3])
//console.log(mixed[1])
//use a for in loop to iterate and console log each name in names

for (name in names); {
	console.log(names);
}//above not finished
//create array of fav candy bars
console.log("---------------------------")
var candyBars = ["twix", "butterfingers", "snickers", "milky ways"];
console.log(candyBars);
//to add to an array afterwards...
candyBars.push("pb cups", "mnm's");
console.log(candyBars);
//to remove from an array afterwards...
candyBars.pop();
console.log(candyBars);
console.log(candyBars.slice(0,2));
//arrays can be all strings, all numbers, booleans, or mixed
//an array is just a collection of data
//pop and push change the array.....slice does not
//truncating/limiting the view
console.log("---------------------");
console.log(candyBars.indexOf("twix"));
candyBars.splice(0, 1);
console.log(candyBars)