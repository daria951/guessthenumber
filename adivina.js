/*
1. Generate a random numer 
2. Playerul introduce un numar, si se tine cont de cate a introdus
3. Se verifica numarul
4. DOnt allow other numbers
5. etc
*/

//Generar numero aleatorio

let randomNumber = Math.floor(Math.random() * 100) + 1;

//Guardar las referencias a cada parrafi // keep the references to each paragraph

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//guardar referencias al input y button de enviar

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Variables para los intentos
let guessCount = 1;
let resetButton; //variable para guardae y crear el buton de resert
guessField.focus();

//Function para comprobar el numero a adivinar
function checkGuess() {
    //Guardar el numero ingresadon en el input
    //Nos aseguramos que sea un Number 
    let userGuess = Number(guessField.value);

    //comprobamos si estemos en el primer intento
    if (guessCount == 1) {
        guesses.textContent = "Intentos Anteriores: ";
    } 
    guesses.textContent += userGuess + " ";

    //Bloque para comprobar los pasos del 5 al 8
    if (userGuess === randomNumber) {
        lastResult.textContent = "Bravo!";
        lastResult.style.backgroundColor = "green";
        lastResult.style.color = "white";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "GameOver";
        setGameOver();
    } else {
        lastResult.textContent = "Incorect";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "The number is low";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "The number is big";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();    

}

guessSubmit.addEventListener("click", checkGuess);

//we add a listener to the button guessSubmit 
guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement ("button");
    resetButton.textContent = "Reset the game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(let i=0; i<resetParas.length; i++){
        resetParas[i].textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "black";

    randomNumber = Math.floor(Math.random()*100) + 1;
}