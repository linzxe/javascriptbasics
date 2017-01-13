var player = {
	//properties
	name		: "computer",
	life		: 100,
	damage		: 0,
	hasSword	: true,
	//dont forget your commas
	//the above is a cookie cutter in OOP



	//methods
	challenge	: function(){
		//flipping the normal way to use a function
			console.log("let's do something cool")
	},
	bigChallenge : function(){
		console.log(this.name + " says: OH YOU'VE DONE IT NOW, YOU ARE DEAD TO ME")
	},

	response : function(){
		console.log(this.name + " says: I will fighT TO THE DEATH!")
	},
	attack	 : function(target){
		console.log(this.name + " throws the fist at " + target + " and does " + this.damage + " damage")
	},
	pickedUpSword : function(){
		if(this.hasSword){
			console.log(this.name + " has picked up a sword.")
		}
	}


}

var melkor = Object.create(player);
melkor.name = "Melkor";
melkor.damage = 50;

var miley = Object.create(player);
miley.name = "Miley";
miley.damage = 25;

// console.log(melkor.name);
// console.log(miley.name);

// console.log(miley.life);
//wil return 100 bc 100 is the default already set

//access methods

melkor.bigChallenge();
miley.response();
//challenge is a function so it needs parentheses and semicolon
//parameters would now go in those parentheses
miley.attack(melkor.name);
melkor.hasSword = true;
melkor.pickedUpSword();
