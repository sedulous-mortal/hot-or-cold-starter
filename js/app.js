'use strict';

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
        document.getElementById("userGuess").innerHTML = "";

        function newSecret() {
            var secret_num = Math.floor((Math.random() * 100) + 1);
        }
        newSecret();
    }
    //temporary answer-giver to test code
    document.getElementById("feedback").innerHTML = "The secret number is " + secret_num + "!";

    //handler for submit form:
    preventDefault();
    var userGuess = document.getElementById("userGuess").innerHTML;
    //turn userGuess string into a number
    userGuess = +userGuess;
    compareGuess() {
        secret_num === userGuess;
        return;
    }
    if ('compareGuess()') {
        $('#feedback').append('You guessed the right number! Click \"New Game\" to play again.')
    }


});
