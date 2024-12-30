/*Pedirle al usuario que introduzca 1 numero.
Comparar si es par o no, a través de un if/else. Si es par que muestre una alerta 
indicando que el número es par o en caso contrario que muestre una alerta que es impar.*/
let number = parseInt(prompt("Enter the number"))
if(number % 2 == 0){
    alert("It's number par")
}else{
    alert("It's impar")
}