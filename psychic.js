var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']
var guessedLetters = [];
var computerGuess = [Math.floor(Math.random() * computerChoices.length)];
var letterToGuess = null;
}

var updateGuessesLeft = function() {
	document.getElementById('guessesleft').innerHTML = "Guesses left: " + guessesLeft
};

var updateLetterToGuess = function() {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
	document.getElementById('#letters').innerHTML = "Your Guesses:" + guessedLetters.join(', ');
};

var reset = function() {}
guessesLeft = 9;
guessedLetters = [];

updateLetterToGuess();
updateGuessesLeft();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkey = function(even) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keycode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessesLeft();

		if (guessesLeft > 0) {
			if (userGuess == letterToGuess){
				wins++;
				document.getElementById('#wins').innerHTML = "Wins"
				alert("Good Golly What are YOU!");
				reset();
			}
		}else if (guessesLeft ==0){
			losses++;
			document.getElementById('#losses').innerHTML = "Losses: " losses;
			alert("YOU LOSE");
			reset();
		}
	};
}






