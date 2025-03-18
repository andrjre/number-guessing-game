
let textInput = document.getElementById("textInput");
let submitInput = document.getElementById("submitInput");
let result = document.getElementById("result");
let guess;
let computerNumber;
let numberOfTries = 0;
let tries;
computerNumber = Math.floor(Math.random() * 100)

submitInput.onclick = function(){
    
    numberOfTries = ++ numberOfTries;
    tries = document.getElementById("tries").innerHTML = `Number of guesses: ${numberOfTries}`;

    guess = textInput.value;
    console.log(computerNumber)

    if(guess < computerNumber){
        console.log("higher")
        result.textContent = "The computers number is higher."
    }
    else if(guess > computerNumber){
        console.log("lower")
        result.textContent = "The computers number is lower."
    }
    else if (guess == computerNumber){
        console.log("Well Done!");
        result.textContent = "Well Done!";
        tries = document.getElementById("tries").innerHTML = `It took you ${numberOfTries} tries to guess the number!`;
        
    }

    // work on making higher and lower font colors green and red respectively //
    // possible animation on completion //

}