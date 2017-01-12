/*var age = 19;

if (age >= 18 && age < 21){
	console.log("You can vote");
} else if (age >= 21){
	console.log("You can drink");
} else if (age >= 25){
	console.log("You can rent a car");
}





else {
	console.log("You live a boring life");
}
*/
//order of operations problem?
//need to be nested together to return all answers
//need to return only one answer?
//possible to have one conditional handling too many things
//be aaware of what we are trying to achieve
//when you think of new features, dont always just automatically add them. think first. everything has consequences
//else should be used if you want to make sure there is some return to the user





//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"
/*
var isLoggedin = true
var isAdmin = false
var isManager = false
var isEmployee = true

if(isEmployee === true){
	console.log("clock in and clock out please")
}

else if(isManager === true){
	console.log("This is the dashboard for your employee records, you can only read but not create users");
}

else if(isAdmin === true){
	console.log("This is the dashboard for your employee records, you have master control!");
}

else if(isLoggedin === true){
	console.log("You're Logged In!")
}

//better way below:
if (isLoggedIn) {
	console.log("Welcome! " + firstName);
	if(isAdmin){
		console.log("boo")
	} else if(isManager){
	console.log("of course ur the best")
	} else if (isEmployee){
		console.log("You are the smartest")
	}
}





*/



//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */
 /*
var coltsWinBig = false
var patriotsWinBig = false
var coltsWinBarely = false
var patriotsWinBarely = true

if(coltsWinBig === true){
	console.log("We always knew the colts were better anyways");
}

else if(patriotsWinBig === true){
	console.log("Obviously the patriots will always be the best");
}

else if(coltsWinBarely === true){
	console.log("We can always hold faith in our colts. I wasn't even worried");
}
else if(patriotsWinBarely === true){
	console.log("Never forget we can trust the patriots. They're in it to win it")
}
*/





//CHALLENGE: GOLD

//1. Write a program that prompts your users in the browser to enter a
//number from 1 to 5 about how optimistic they are about the Colts next year.
//2. Have a different response for each number.

//*HINT*
 //you have to build this in relp.it 
//Research prompt





