//array of alphabet and numbers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//variables to track wins, losses, and number of guesses
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;
var playingLetters = false;
var playingNumbers = false;

//On start click for letters game
function isLetter() {

	var lettersGuessed = [];
	playingLetters = true;

	//clear winTag and lossTag
	document.getElementById("winTag").innerHTML = '<div id="winTag"></div>';
	document.getElementById("lossTag").innerHTML = '<div id="lossTag"></div>';
	//random letter guess for computer
	var computerLetter = letters[Math.floor(Math.random() * letters.length)];

	alert("Select any letter key to play.");

	document.onkeyup = function(event) {
        // Determine which key was pressed
        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1){

	        if (guessesLeft !== 0){
			    if ((userGuess !== computerLetter) && (guessesLeft > 0)){
			    	lettersGuessed.push(userGuess);
			    	guessesLeft--;
			    	//print that to html
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : " + guessesLeft + "</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: " + lettersGuessed + "</p>";

			    } else if (userGuess === computerLetter){
			    	document.getElementById("winTag").innerHTML =
			    	'<div class="alert alert-dismissible alert-success">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Oh snap!</strong> You must be a pyschic.' +
					'</div>';
					//alert("Press Start to play again!");
			    	winCounter ++;
			    	guessesLeft = 9;
			    	document.getElementById("wins").innerHTML = "<p>Wins: " + winCounter + "</p>";
			    	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
			    	document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			    }
			 } else {
			 	document.getElementById("lossTag").innerHTML =
			    	'<div class="alert alert-dismissible alert-danger">' +
					'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
					'<strong>Uh oh!</strong> Looks like you are not a pyschic. The answer was ' + computerLetter +
					'</div>';
			 	//alert("Game over! The answer was " + computerLetter + ". Looks like you are not psychic...");
			 	//alert("Click Start to play again!")
			 	lettersGuessed = [];
			 	lossCounter ++;
			 	guessesLeft = 9;
			 	//print to html
			 	document.getElementById("losses").innerHTML = "<p>Losses: " + lossCounter + "</p>";
			 	document.getElementById("guessLeft").innerHTML = "<p>Guesses Left : 10</p>";
				document.getElementById("lettersGuessed").innerHTML = "<p>Your Guesses so far: </p>";
			 }
		}

    };

}


