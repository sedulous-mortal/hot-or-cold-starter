'use strict';

var secret_num;

$(document).ready(function () {

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    //make new function called newGame
    function newGame() {
        $('#userGuess').val("");
        newSecret();
        $('#feedback').text("Make your Guess!");
        $('#guessList').empty();
        $('#count').text("0");
        console.log(secret_num);
    }

    function newSecret() {
        secret_num = Math.floor((Math.random() * 100) + 1);
    }

    $('.new').click(function (event) {
        event.preventDefault();
        newGame();
    });

    //handler for submit form:
    $('#guessButton').click(function (event) {
        event.preventDefault();
        var userGuess = $("#userGuess").val();
        userGuess = +userGuess;
        //if they guess a string that's not a number
        if (isNaN(userGuess)) {
            $('#feedback').text("That's not even a number...");
            $('#userGuess').val("");
            return;
        } //deal with it if they are guessing out of bounds
        else if (userGuess < 1 || userGuess > 100) {
            $('#feedback').text("Your guess must be a guess between 1 and 100. We won't count that one.");
            $('#userGuess').val("");
            return;
        } //if they guess legitimately
        else {
            compareGuess(userGuess);
            guessList(userGuess);
            $('#userGuess').val("");
            $('#count').text(+$('#count').text() + 1);
        }
    });

    function compareGuess(userGuess) {
        //find out if they're right and if not help them get to the answer with clues
        if (secret_num === userGuess) {
            $('#feedback').text('You guessed the right number! Click \"New Game\" to play again.')
        } else if (Math.abs(secret_num - userGuess) > 30) {
            $('#feedback').text("Ice Cold");
        } else if (Math.abs(secret_num - userGuess) > 20) {
            $('#feedback').text("Cold");
        } else if (Math.abs(secret_num - userGuess) > 10) {
            $('#feedback').text("Hot");
        } else if (Math.abs(secret_num - userGuess) < 5) {
            $('#feedback').text("Super Hot");
        }
    }
    //this line is to make sure that when the page first loads, a new game with a new secret_num is made
    newGame();

    //make a list inside the <ul> space below the count that shows which guesses have been made already
    function guessList(userGuess) {
        $('#guessList').append("<li>" + userGuess + "</li>");
    }
});
