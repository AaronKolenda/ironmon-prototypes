$(document).ready(function(){

	getTemplates();
	var currentGame = new Game();

	$("#createOne").click(function(){

		if (currentGame.leftCreated === true) {
		console.log(currentGame.leftCreated);
		alert("You already created a left player this game");
		return;
		}

		var nameOne = $("#nameOne").val();
		var typeOne	= $("#typeOne").val();

		
		playerOne = new Ironmon(nameOne, typeOne);
		console.log(playerOne);
		

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").append(playerOneString);

      	currentGame.leftCreated = true;

	});

	$("#createTwo").click(function(){

		if (currentGame.rightCreated === true) {
		alert("You already created a right player this game");
		return;
		}

		var nameTwo = $("#nameTwo").val();
		var typeTwo	= $("#typeTwo").val();

		playerTwo = new Ironmon(nameTwo, typeTwo);		
		console.log(playerTwo);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").append(playerTwoString);

      	currentGame.rightCreated = true;
	});

	$("#oneGo").click(function(){

		if (currentGame.turn === false) {
			alert("It isn't your turn!");
			return;
		}

		var move = $("#moveOne").val();

		if (move === "simple") {var action = new Simple();}
		if (move === "charge") {var action = new Charge();}
		if (move === "elixir") {var action = new Elixir();}
		if (move === "feedback") {var action = new Feedback();}
		if (move === "leech") {var action = new Leech();}
		if (move === "heal") {
			playerOne.heal();
			var playerOneString = templates.playerOneInfo(playerOne);
      		$("#leftWrap").html(playerOneString);
      		currentGame.takeTurn();
      		return;
		}
		if (move === "train") {
			playerOne.train();
			var playerOneString = templates.playerOneInfo(playerOne);
      		$("#leftWrap").html(playerOneString);
      		currentGame.takeTurn();
      		return;
		}

		playerOne.action(playerTwo, action);
		if (playerTwo.active() === false) {
			alert((playerOne.name + " won the game!"));
			$("#rightWrap").html("");
			$("#leftWrap").html("");
			currentGame.leftCreated = false;
			currentGame.rightCreated = false;
			return;
		}

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").html(playerOneString);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").html(playerTwoString);

      	currentGame.takeTurn();
	});


	$("#twoGo").click(function(){

		if (currentGame.turn === true) {
			alert("It isn't your turn!");
			return;
		}

		var move = $("#moveTwo").val();

		if (move === "simple") {var action = new Simple();}
		if (move === "charge") {var action = new Charge();}
		if (move === "elixir") {var action = new Elixir();}
		if (move === "feedback") {var action = new Feedback();}
		if (move === "leech") {var action = new Leech();}
		if (move === "heal") {
			playerTwo.heal();
			var playerTwoString = templates.playerTwoInfo(playerTwo);
      		$("#rightWrap").html(playerTwoString);
      		currentGame.takeTurn();
      		return;
		}
		if (move === "train") {
			playerTwo.train();
			var playerTwoString = templates.playerTwoInfo(playerTwo);
      		$("#rightWrap").html(playerTwoString);
      		currentGame.takeTurn();
      		return;
		}

		playerTwo.action(playerOne, action);
		if (playerOne.active() === false) {
			alert((playerTwo.name + " won the game!"));
			$("#rightWrap").html("");
			$("#leftWrap").html("");
			currentGame.leftCreated = false;
			currentGame.rightCreated = false;
			return;
		}

		

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").html(playerTwoString);

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").html(playerOneString);

      	currentGame.takeTurn();
	});

	$("#nameOne").click(function(){
		$("#nameOne").val(" ");
		$("#nameOne").css("color", "black");
	});

	$("#nameTwo").click(function(){
		$("#nameTwo").val(" ");
		$("#nameTwo").css("color", "black");
	});




});

var templates = {};

var playerOne, playerTwo;

var getTemplates = function(){

  var playerOneTemplateString = $("#playerOne-template").text()
  templates.playerOneInfo = Handlebars.compile(playerOneTemplateString);

  var playerTwoTemplateString = $("#playerTwo-template").text()
  templates.playerTwoInfo = Handlebars.compile(playerTwoTemplateString);

  };