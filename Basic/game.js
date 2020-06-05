//create secret number
var secretNumber = 4;

//ask user for a guess
var guess = Number(prompt("guess a num"));

if (guess === secretNumber) {
    alert("you got it right");
}

else if(guess > secretNumber) {  
    alert("too high. guess again");
}
else 
{ 
    alert("TOO LOW");
}