/*//empty object
var emptyObject = {};

//object with properties
var facebookFriend = {
	name			: "",
	age				: 0,
	vocation		: ""
	rstatus			: true
};

facebookFriend.name = "Jonas";
console.log(facebookFriend.name);


//
//an object is a container on a bigger scale
//boolean operators: and, or
//math operators: +, %
//. is an operator here. it is an accessor. 
//it lets you access what is in the object container

facebookFriend.age = 37;
console.log(facebookFriend.age);

console.log(facebookFriend.name + " just turned " + facebookFriend.age + "!");
//this is concatenation

facebookFriend.rstatus = true;
if (facebookFriend.rstatus){

console.log(facebookFriend.name + "is in a relationship!");
}
*/

var robot = {
	name   : " ",
	city   : " ",
};

robot.name = "sally";
robot.city = "boston";
console.log(robot.age);

//TODO


//another example below
//a variable doesnt have to be just one thing. they can be a whole chunk of things
var team = {
	city		: "",
	teamName	: "",
	foundingYear: 0
};
team.city = "San Jose";
team.teamName = "Sharks";
team.foundingYear = 1991;
var item = "the " + team.city + " " + team.teamName + " played their first session"

console.log(item);




