/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Leech = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by exactly 1.

  50% of the time, it increases the context's power by 1.

  It returns 1.
*/
Leech.prototype.use = function(opponent) {

	opponent.health = opponent.health - 1;

	var fiftyPercentChance = _.sample([1,2]);

	if (fiftyPercentChance === 1) {
		this.power + this.power + 1;
		return 1;
	}

	return 1;
  
}