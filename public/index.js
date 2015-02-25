$(document).ready(function(){

	getTemplates();


	$("#createOne").click(function(){
		var nameOne = $("#nameOne").val();
		var typeOne	= $("#typeOne").val();

		
		playerOne = new Ironmon(nameOne, typeOne);
		console.log(playerOne);
		

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").append(playerOneString);

	});

	$("#createTwo").click(function(){
		var nameTwo = $("#nameTwo").val();
		var typeTwo	= $("#typeTwo").val();

		playerTwo = new Ironmon(nameTwo, typeTwo);		
		console.log(playerTwo);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").append(playerTwoString);
	});

	$("#oneGo").click(function(){

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
      		return;
		}
		if (move === "train") {
			playerOne.train();
			var playerOneString = templates.playerOneInfo(playerOne);
      		$("#leftWrap").html(playerOneString);
      		return;
		}

		playerOne.action(playerTwo, action);

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").html(playerOneString);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").html(playerTwoString);
	});


	$("#twoGo").click(function(){

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
      		return;
		}
		if (move === "train") {
			playerTwo.train();
			var playerTwoString = templates.playerTwoInfo(playerTwo);
      		$("#rightWrap").html(playerTwoString);
      		return;
		}

		playerTwo.action(playerOne, action);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightWrap").html(playerTwoString);

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftWrap").html(playerOneString);
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