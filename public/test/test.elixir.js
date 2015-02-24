describe("Elixir", function(){

  it("always heals five health", function(){

    var foo = new Ironmon("bar");
    var heal = new Elixir();

    for (var i = 0; i < 100; i++) {
      foo.health = 20;

      foo.action(" ", heal)

      expect(foo.health).to.equal(25);
    }

  })

  it("doesn't heal to more than 25", function(){

    var foo = new Ironmon("bar");
    var heal = new Elixir();

    for (var i = 0; i < 100; i++) {
      foo.health = 24;

      foo.action(" ", heal)

      expect(foo.health).to.equal(25);
    }

  })

  it("returns the amount of health healed", function(){

    var foo = new Ironmon("bar")

    var heal = new Elixir();

    for (var i = 0; i < 100; i++) {
      foo.health = 24;

      var healed = foo.action(" ", heal)

      expect(healed).to.equal(1);
    }

  })

})