describe("Feedback", function(){

  it("does opponent's power + 5 damage if opponent is charged", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Feedback();

    for (var i = 0; i < 100; i++) {
      baddie.health = 25
      baddie.charged = true;

      baddie.power = 1
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(19)
    }

    baddie.power = 10

    for (var i = 0; i < 100; i++) {
      baddie.health = 25
      baddie.charged = true;

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(10)
    }

  })

  it("only works if opponent is charged", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Feedback();

    for (var i = 0; i < 100; i++) {
      baddie.health = 25
      baddie.charged = false;

      baddie.power = 1
      foo.action(baddie, attack)

      expect(baddie.health).to.equal(25);
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Feedback();

    for (var i = 0; i < 100; i++) {
      baddie.health = 25
      baddie.charged = true;

      baddie.power = 1
      var dmg = foo.action(baddie, attack)

      expect(dmg).to.equal(6)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

})