/*//scope variables
var name = "lindz"
//this name var is in the global context...everything in this context can access this name
function greetings(){
	name ="ralph" //var label is very important
	//if you say var name =ralph, it will only change locally
	//if you only establish this as name =ralph, it is changing the global context
	//ralph is in the local context so it overpowers lindz
	return "Hello " + name;
}
console.log(greetings())
console.log(name)

//hoisting
*/

var name = "lindz"

function greetings(){
	name ="ralph";
	random = "bread";
	//random is defined here but established up at the top, due to hoisting
	//NAME YOUR VARIABLES APPROPRIATELY
	//mutating data is super simple and not good
	//you want to have as much control of data as possible....
	//wouldn't purposefully write things to be hoisted. want to write it to make it more clear
	//you do NOT want to hoist things
	return "Hello " + name;
}
console.log(greetings());
console.log(name)
console.log(random)


