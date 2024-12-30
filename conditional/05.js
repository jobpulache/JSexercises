/*Crea un algoritmo utilizando el operador ternario que le pregunte al usuario cuantos tragos a tomado.

Si el número de trago es mayor a cero debe emitir una alerta que diga que no puede manejar.
Si el usuario indica que no ha tomado nada, entonces decirle que “Nos alegra que seas un conductor responsable”.*/
let numberDrinks = parseInt(prompt("Enter number Drinks"))
numberDrinks>0?alert("You can't drive"):alert("We are glad you are responsible driver");