/*
'use strict' is an ecmascript feature that allows you to place a program
or function in a strict operating context. this catches common coding
bloopers, throws errors, and disables features that are confusing

let is a new keyword for variables, and it does away with hoisting.

const stands for constant, and we can now declare variables 
as constants which means they are unable to change

block scoping lets us declare a variable in curly braces and create
its scop within that perimeter. we no longer rely on function scope*/

/*'use strict';
console.log(productId);
var productId = 12;

the above is hoisting...which means a variable is 
declared after we log it out. no bueno 
this will return "undefined"*/

/*'use strict';
console.log(productId);
let productId = 12;



the above will return a reference error, which means 
no hoisting is happening here bc let does not allow hoisting. this has big potential
for solving bugs
*/

/*'use strict';
let productId = 12;
console.log(productId);

the above defines productId before we call it.
by using let, we make sure variable definition happens before 
the variable gets used.*/

/*'use strict';
let productId;
console.log(productId)

the above shows that if we dont initialize the variable, 
it gets set to undefined, just like var did
*/

/* 'use strict';
let productId = 12;
{
	let productId = 2000;
}
console.log(productId);

the above shows block scoping. we can redefine the variable 
within a block, and that variable will disappear after the block.
*/

/*
'use strict'
let productId = 42;
for (let productId = 0; productId < 10; productId++)
{
}
console.log(productId);

above is still block scoping.
we initialize productid to 42, but then
we declare productId as part of the for loop. we exit the for loop
when productId is >= to 10. this prints 42. productId is scoped to
the for loop. when the for loop ends, thats the end of the block and
we go  back to our initial declaration of productId.

*/
/*
'use strict';
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
	updateFunctions.push(function () { return i; });
}
console.log(updateFunctions[]());

the above is a problem from es5. we create an array of updateFunctions.
then we'll have a for loop, and for each iteration of the loop we have a
function to update functions that returns i. this loop loops through 0 and 1 for i. 
then we log updateFuncton's element 0 in the array. then we call the function. 2 shows
in the console. a closure is formed for the variable 1 bc of the function within a function. 

*/
/*
'use strict';
let updateFunctions = [];
for (let i = 0; i < 2; i++) {
	updateFunctions.push(function () { return i; });
}
console.log(updateFunctions[]());

when let is used instead of var, the console prints 0. when you use let in a for loop
each iteration of the loop gets its own variable of i, and any closures formed will close
over their own value of i. this does away with the problem of working with closures....
now closures work much better
*/

/*
'use strict';
const MARKUP_PCT = 100;
console.log(MARKUP_PCT);

above prints 100. uppercase is used for the constant. this is common practice

'use strict';
const MARKUP_PCT;
console.log(MARKUP_PCT)

above declares the constant but doesnt initialize it. we get a syntax error. 
*/
