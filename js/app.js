
'use strict';

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//make new function called newGame()
	//clear the entire div 
	//set rand(secret_num)
	//when value entered,
	//preventDefault();
	//assign that value to a new variable called var userGuess
	//turn userGuess string into a number
	userGuess = +userGuess;
		//make function called compareGuess() 
			//that evaluates whether secret_num === userGuess
	compareGuess();
});


