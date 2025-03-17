
let textInput = document.getElementById("textInput");
let submitInput = document.getElementById("submitInput");
let result = document.getElementById("result");
let guess;
let computerNumber;
computerNumber = Math.floor(Math.random() * 100)


submitInput.onclick = function(){
    
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
        console.log("Well Done!")
        result.textContent = "Well Done!"
    }






}