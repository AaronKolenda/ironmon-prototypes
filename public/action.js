/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Action = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  It reduces the opponent's health by an integer 
    between 1 and the context's power.

  It returns the amount of damage done.

  (This is copied over from last night's assignment. Wheeee!!) 
*/
Action.prototype.use = function(opponent) {
  var damage = Math.ceil(Math.random() * this.power)

  if (this.type === "water" && opponent.type === "fire") {damage = damage*2};
  if (this.type === "fire" && opponent.type === "grass") {damage = damage*2};
  if (this.type === "grass" && opponent.type === "water") {damage = damage*2};


  opponent.health = opponent.health - damage;


  return damage;
}