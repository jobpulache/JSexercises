/*Crea la variable numeroSecreto y hazlo igual a un entero (Tú eliges el número).
Pregúntale al usuario que adivine el numero en un prompt.
Si el usuario adivina el numero deberá aparecer un alert diciendo que adivinó el número. (Tienes que hacer la
 comparación con ( === ) y no te olvides de parsearlo).
El algoritmo también debe decir, si numeroSecreto es más alto o más bajo del que dijo el usuario.
Por último, si el usuario no adivina el número, deberá aparecer un mensaje diciendo que se equivocó.*/
let secretNumber = 6;
let guessNumber = parseInt(prompt("Guess Secret Number"))
if (secretNumber === guessNumber) {
    alert("You managed to guess the number")

} if (secretNumber < guessNumber) {
    alert("the number is less")
} if (secretNumber > guessNumber) {
    alert("The number is greater")
}
else {
    alert("You were wrong")
}