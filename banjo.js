/**
 write a function that answers the question "are you playing banjo?".
 if name starts with "R" or "r", you are playing banjo.

 Example: name + "plays banjo"
 	  name + "does not play banjo"
 
 */
function banjo(name){
	if(name[0] === 'R' || name[0] === 'r'){
		name + "plays banjo"
	}
	else {
		name + "does not play banjo"
	}
}
