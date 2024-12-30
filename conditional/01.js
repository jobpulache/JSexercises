/*Mi primer condicional

Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario 
que introduzca su nombre (“No ha introducido ningún nombre”).
Una vez hecho esto, que se despliegue una alerta de bienvenida cong el nombre del usuario.*/

let nameUser = prompt("Enter nameUser:")
if (nameUser === "") {
    prompt("Enter nameUser please")
}
else {
    alert(`Welcome ${nameUser}`)
}