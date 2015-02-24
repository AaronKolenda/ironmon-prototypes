/*
  This class represents an action undertaken by a character.

  It doesn't take in any parameters or have any properties.
*/
var Charge = function(){ }

/*
  This function should be executed in the context of an Ironmon instance.
  This function accepts another, opponent Ironmon instance as a parameter.

  If the "charged" property on the context Ironmon is true,
    it reduces the opponent's health by an integer between 1 and two times the context's power
    and then sets "charged" on the context to false.

  Otherwise, if the "charged" property on the context Ironmon is false,
    it doesn't reduce the opponent's health at all,
    and it sets "charged" on the context to true.

  It returns the amount of damage done (which can be 0)
*/
Charge.prototype.use = function(opponent) {

  var damage = 0;

  if (this.charged === true) {
    var min = this.power;
    var max = (this.power * 2);

    damage = _.random(min, max);

    opponent.health = opponent.health - damage;

    this.charged = false;
    return damage;
  }

  if (this.charged === false) {
      this.charged = true;
  }
  return damage;
  
}