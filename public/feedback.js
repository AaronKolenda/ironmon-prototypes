/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Feedback = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by exactly 1.

  50% of the time, it increases the context's power by 1.

  It returns 1.
*/
Feedback.prototype.use = function(opponent) {

	var damage = 0;

	if (opponent.charged === true) {
		damage = opponent.power +5;
		opponent.health = opponent.health - damage;
		return damage;
	}

	return damage;
  
}