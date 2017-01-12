/*var footballTeam = "Packers";
// for(i = 0; i < footballTeam.length; i++)
for (var letter in footballTeam) {
//char can stand instead of letter....stands for character
	console.log(footballTeam[letter])
}	
console.log("----------------------")
var favShow = "Reign";
for (var letter in favShow) {
	console.log(favShow[letter])
}

*/

//create a for in loop for your favfood
//then can you count each vowel that occurs in that food?
//for in loop
//use conditional to check if letter at an index is a vowel
//? ==
//vowelCount = 0
var vowelCount = 0;
var favFood = "apple";
for (letter in favFood) {
	if (favFood[letter].toLowerCase() === "a" || ){
		vowelCount++;
	}
}
console.log("There are " + vowelCount + " vowels in " + favFood);
//play around to find the solution