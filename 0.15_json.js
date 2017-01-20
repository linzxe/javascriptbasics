//JSON is an acronym for JavaScript Object Notation
//benefit of using an object: can have proeprties inside the object vs just names in an array
//can include many types of data in an object
//var names = [["sally", "james", "polly"], ["harry", "collin", "brie"]];
//console.log(names[1][3])
 var list = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},
//curly brace here is a sign that its an object
//metatag is a way to describe
//always change your id from object to object so that it truly is a unique identifier
{
	"id": 2,
	"name": "Red Door",
	"price": 12.50,
	"tags": ["home", "red", ["wood"]]
	}
];



//for (item in list){
//	console.log(item)
//}

//above is my try

for(var i = 0; i<items.length; i++)
	console.log(items[i].name);
//

//console.log(items);
//printing console.log(items[0]) will print first item
//printing console.log(items[0].id) will print 1
//when you create an object, you create a key and value pairing
//console.log(items[1].id)
