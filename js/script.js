let randomNumber = Math.floor(Math.random()*100) + 1;
function checkGuess (){
const inputElement = document.getElementById("guess")
const feedbackElment = document.getElementById("feedback")
const guess = inputElement.value;
if (guess == randomNumber) {
    feedbackElment.textContent = "ganaste"; feedbackElment.style.color="green";
} else if (guess < randomNumber) {
    
} else {

}
}
    


