$(document).ready(function(){

	getTemplates();

	$("#createOne").click(function(){
		var nameOne = $("#nameOne").val();
		var typeOne	= $("#typeOne").val();

		var playerOne = new Ironmon(nameOne, typeOne);
		console.log(playerOne);

		var playerOneString = templates.playerOneInfo(playerOne);
      	$("#leftPlayer").prepend(playerOneString);

	});

	$("#createTwo").click(function(){
		var nameTwo = $("#nameTwo").val();
		var typeTwo	= $("#typeTwo").val();

		var playerTwo = new Ironmon(nameTwo, typeTwo);		
		console.log(playerTwo);

		var playerTwoString = templates.playerTwoInfo(playerTwo);
      	$("#rightPlayer").prepend(playerTwoString);
	});

});

var templates = {};

var getTemplates = function(){

  var playerOneTemplateString = $("#playerOne-template").text()
  templates.playerOneInfo = Handlebars.compile(playerOneTemplateString);

  var playerTwoTemplateString = $("#playerTwo-template").text()
  templates.playerTwoInfo = Handlebars.compile(playerTwoTemplateString);

  };