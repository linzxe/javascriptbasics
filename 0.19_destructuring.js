var foo = {
	bar: 1,
	baz: 2
};

var { bar, baz } = foo;

//useful when taking a value out of a large object
//creating a local variable

var tenses = ["me", "you", "he"];
var [ firstPerson ] = tenses;
//use a space on each side, to denote destructuring
//this automatically grabs #1

Promise.all([promise1, promise2]).then(function(results1, results2) {
})
//destructuring an array

