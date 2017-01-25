//IIFE - immediately invoked functional expressions
//we create and use functional expressions all the time.
//create a function called greeting that take a name and console logs "hello " + name

var greeting = function(name){
	console.log("Hello " + name);
}//second way...invoke here: 
("Lindsay");
//()tells js to run the function automatically even without the name being defined
//this is a functional expression. it now needs to be invoked.

// 1st way.... invoke here: 
//greeting("Lindsay");
// greeting("Sarah");

var printValue = (function(value) {
	console.log(value);
})("Sarah");