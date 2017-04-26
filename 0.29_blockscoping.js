/*var a = 1;

function() {
	var b = 2;
}

console.log(b);
//the above, nothing happens bc b was not defined in correct scope
*/
var b;
var a = 1;

if (true) {
	var b = 2;
}

console.log(b);
//defining a variable in the scope, and then changing it

//let allows us to define scope in a block

let a = 1;

if (20) {
	let b = 2;
}
console.log(b);

//yif statements, if/else, loops all use blocks
//new for this loop, destroyed after this loop

//const also uses block scope.  cannot be overridden. 

const foo = 1;

if(true) {
	const bar = { a: 1 };
	bar.a = 2;
}

console.log(bar);