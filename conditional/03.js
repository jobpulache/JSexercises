/*Números pares o impares

Declara una variable que se llame peliculaElegida y asignale el método prompt() para que le puedas solicitar al
 usuario que ingrese su película favorita de una lista, que tú vas a proporcionar en dicho método.
Importante: para que puedas enlistar las opciones de películas una debajo de otra, necesitaras el carácter especial
 (\n ) ó colocar un br para hacer un salto de línea. Sino te queda muy claro cómo usarlo, deberás googlea para ver un
  ejemplo.
Evalúa cada uno de los casos con el condicional switch (utilizaremos este método para practicarlo). En el bloque de 
código de cada case le diremos que “su ticket ha sido emitido”, pero, lo haremos a través del método document.write()
 y en su argumento(dentro de los paréntesis)
 haremos un template literals con el formato HTML del texto y la imagen de la película elegida.*/
const chosenMovie = prompt("Choosen the favorite movie: 1.-Your fault \n 2.- Respira \n 3.- Juego calamar \n 4.- Elite")
switch (chosenMovie) {
    case "1":
        document.write(`
            <h2>The ticket has been issued for your fault</h2>
            <img src="https://imgs.search.brave.com/QgM34rqqem1wmmc4xYxDxx4TyJygWTG1416s1seNfYA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFKYzhQaE1pWEwu/bnVsbF9TWTI1MF8u/anBn"> `)
        break;
    case "2":
        document.write(`
           <h2>The ticket has been issued for res breathe</h2>
           <img src="https://imgs.search.brave.com/pplbsD6e9TBjDFJQEIfKMk9_HNTJnJEhsiHKQVInOkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9yZXNw/aXJhLW5ldGZsaXgt/c2VyaWUtNjZkMDVi/ZTMxZTBmZS5wbmc_/Y3JvcD0xeHc6MC45/OTk3MDM3OTE0Njkx/OTQzeGg7Y2VudGVy/LHRvcCZyZXNpemU9/MTIwMDoq"> `)
        break;
    case "3":
        document.write(`
            <h2>The ticket has been issued for Juego de calamar
            <img src="https://imgs.search.brave.com/ZVoGyaxtg_QeJ7lMK7d7empQWJW4xY9KrlE1VH6Yzqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jbGRucnkucy1u/YmNuZXdzLmNvbS9p/bWFnZS91cGxvYWQv/dF9maXQtNzYwdyxm/X2F1dG8scV9hdXRv/OmJlc3QvbmV3c2Nt/cy8yMDIxXzM4LzE3/Nzk4ODMvc3F1aWQt/Z2FtZS1tcy10b2Rh/eS1pbmxpbmUtMjEw/OTI2LTAxLmpwZw"> `)
        break;
    case "4":
        document.write(`
           <h2>The ticket has been issued for Elite</h2>
           <img src="https://imgs.search.brave.com/PX3txj-P-9_D-iO41WqyQztH6euuYtnSASIqONHlRLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9UVmlabU15/TkdVdFpEaGlNeTAw/TkdJeExUZ3pOekV0/Wm1SaFlqQTRZMkUz/TmpJd1hrRXlYa0Zx/Y0djQC5qcGc"> `)
        break;
    default:
        document.write("Movie invalid")
}

