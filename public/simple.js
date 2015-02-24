/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Simple = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by exactly 3.

  It returns 3. 
*/
Simple.prototype.use = function(opponent) {

	opponent.health = opponent.health - 3;
	return 3;
  
}