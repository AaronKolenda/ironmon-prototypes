/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Elixir = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by exactly 1.

  50% of the time, it increases the context's power by 1.

  It returns 1.
*/
Elixir.prototype.use = function(opponent) {

	var currentHealth = this.health;
	this.health = this.health + 5;


	if (this.health > 25) {
		this.health = 25;
		return (25 - currentHealth);
	}

	return 5;
  
}