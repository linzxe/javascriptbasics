//closures
//1. a closure gives you access to the variables set in a function
//		after the function has completed and returned.
//dont want everything on global scope....keep it local when you can.
//but sometimes we need some of it global...but only deliberately.
//users cannot use closures, only developers.
//2. helps keep variables from getting pushed into global scope.
//3. degree of protection. variable cant be overwritten.

var lindsay = {};

var setAge = function(myAge) {

	var birthday = "12/18/1997";
	return {
		getAge: function() {
			return myAge;
		},

		getBirthday: function(){
			return birthday;
		}
	}

}

lindsay.age = setAge(19);
console.log(lindsay.age);
console.log(lindsay.age.getAge());
console.log(lindsay.age.getBirthday())
//need to remember parentheses bc youre invoking a function
//data is hidden.....must be deliberately called
//a closure helps protect info from the global scope...it's still there, you just have to deliberate in calling it

//in js, objects are a key-value pair
//even though myAge is explicitly stated, js figures it out