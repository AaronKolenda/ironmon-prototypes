/*
  This class represents a character in a video game.

  It contains three default properties:
    - health (which starts at 25)
    - power (which starts at 1)
    - charged (with starts as false)

  It also contains a property passed in as a parameter:
    - name
*/
var Ironmon = function(name, type) {
  this.health = 25;
  this.power = 1;
  this.charged = false;

  this.name = name;
  this.type = type;

}

/*
  This function determines a random *integer* between 1 and 5.
  
  It adds that number to the health of the Ironmon.

  An Ironmon's health cannot go above 25. If healing would 
    make the Ironmon's health go above 25, it becomes 25 instead.
*/
Ironmon.prototype.heal = function() {

  healthAdd = _.sample([1, 2, 3, 4, 5]);
  this.health = this.health + healthAdd;

  if (this.health > 25) {
    this.health = 25;
  }

}

/*
  This function adds one to the power of the Ironmon.
*/
Ironmon.prototype.train = function() {
  this.power = this.power + 1;
}

/*
  This function returns true if the Ironmon's health is greater than 0.

  Otherwise, it returns false.
*/
Ironmon.prototype.active = function() {
  if (this.health > 0) {
    return true;
  }
  return false;
}

/*
  This function accepts two parameters..
    - Another, opponent Ironmon instance
    - An Action instance to execute

  It executes the "use" method of the Action 
    *within the context of this Ironmon*,
    passing in the opponent Ironmon as a parameter.
*/

Ironmon.prototype.action = function(opponent, act) {

  var doubler = function() {
    var returnOne = act.use.call(this, opponent);
    var returnTwo = act.use.call(this, opponent);
    var attackReturn = returnOne + returnTwo;
    return attackReturn;
  }

  if (this.type === "water" && opponent.type === "fire") {
    return doubler();
  };

  if (this.type === "fire" && opponent.type === "grass") {
    return doubler();
  };

  if (this.type === "grass" && opponent.type === "water") {
    return doubler();
  };

    var attackReturn = act.use.call(this, opponent);
    return attackReturn;

    console.log("act is ", act);
    console.log("opp is ", opponent);
    console.log("this is ", this);
    console.log("act.use is ", act.use);
}

