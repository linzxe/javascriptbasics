//indexing 0123456789
//dry = dont repeat yourself
//wet = write everything
//want code to be as dry as possible
/*
var name ="lindz mergy";
/*console.log(name.length);
console.log(name[0] + name[1] + name[2] + name[3] + name[4] + name[5] + name[6] );
console.log(name[0].toUpperCase() + name[1] + name[2] + name[3] + name[4]);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]);

var lcv = 0;
while(lcv < 15) { //this is a loop control variable
	//...it will run until the statement becomes false
	//lcv < 15 is a conditional statement
	console.log(name.toUpperCase());
	lcv +=1;//THIS IS CRITICAL!! no variable, leads to an infinity loop
}

//create a while loop that starts at zero and ends at 10
//should print each number of the lcv
//make your lcv "count"

var count = 1
while(count <= 10) {
	console.log(count);
	count +=1;//++ is equal to +=1
}
console.log("-----------------------------");
var num = 10; //lcv but we named it num
while(num > 0){
	console.log(num)//writing in curly braces becomes a code block
	num -= 1;

}
console.log("-----------------------------");

var evenCount = 0;
while (evenCount < 20) {
	
	evenCount++;
	if (evenCount % 2 == 0){
		console.log(evenCount + " is even");
	}else {
		console.log(evenCount + " is odd")
	}
}

//all loops need a loop control variable
//need a situation where the situation is false
//
//create a while loop that will count to 50 by 5
//use the lcv variable of countFive
var countFive = 0;
while (countFive <= 50) {
	countFive ++;
	if (countFive % 5 == 0){
			console.log(countFive + " is divisable by 5");
	}
	}
}
*/


////////
var countFive = 0;
while (countFive <= 50) {
	console.log(countFive);
}
	countFive+= 5; //shorthand for countFve = countFive + 5
	