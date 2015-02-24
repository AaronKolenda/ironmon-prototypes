describe("Hard mode", function(){

  it("deals twice the damege for type advantage", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Simple();

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "water";
      baddie.type = "fire";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(19);
    }

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "fire";
      baddie.type = "grass";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(19);
    }

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "grass";
      baddie.type = "water";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(19);
    }

  })

  it("doesn't double damage if type isn't at advantage", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Simple();

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "fire";
      baddie.type = "fire";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(22);
    }

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "fire";
      baddie.type = "water";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(22);
    }

    for (var i = 0; i < 100; i++) {
      baddie.health = 25

      foo.type = "water";
      baddie.type = "grass";

      foo.action(baddie, attack)

      expect(baddie.health).to.equal(22);
    }

  })

  it("returns the amount of damage done", function(){

    var foo = new Ironmon("bar")
    var baddie = new Ironmon("steve")

    var attack = new Simple()

    for (var i = 0; i < 100; i++) {
      baddie.health = 25;

      foo.type = "fire";
      baddie.type = "grass";

      var dmg = foo.action(baddie, attack)

      expect(dmg).to.equal(6)
      expect(25 - baddie.health).to.equal(dmg)
    }

  })

})