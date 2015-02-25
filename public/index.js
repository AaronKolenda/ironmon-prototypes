$(document).ready(function(){
	$("#createOne").click(function(){
		var nameOne = $("#nameOne").val();
		var typeOne	= $("#typeOne").val();

		var playerOne = new Ironmon(nameOne, typeOne);
		console.log(playerOne);
	});

	$("#createTwo").click(function(){
		var nameTwo = $("#nameTwo").val();
		var typeTwo	= $("#typeTwo").val();

		var playerTwo = new Ironmon(nameTwo, typeTwo);		
		console.log(playerTwo);
	});

});