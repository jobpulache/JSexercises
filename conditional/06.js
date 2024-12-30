/*Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.

Preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato.*/
let choseOperation = prompt("Choose Operation: \n 1.- sum \n 2.- rest \n 3.-multiplication \n 4.-Division")
let numberOne = parseInt(prompt("Enter first Number"))
let numberTwo = parseInt(prompt("Enter the second number"))
switch (choseOperation) {
    case "1":
        alert(`Result the sum is ${numberOne + numberTwo}`)
        break;
    case "2":
        alert(`Result the rest is: ${numberOne - numberTwo} `)
        break;
    case "3":
        alert(`Result the multiplication is: ${numberOne * numberTwo}`)
        break;
    case "4":
        alert(`Result the division is: ${numberOne / numberTwo}`)
        break;
    default:
        alert("Invalid operation")
}