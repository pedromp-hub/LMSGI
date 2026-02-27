const button = document.getElementById('boton1');
const input = document.getElementById('Intento');
const p = document.getElementById('respuesta');
let intentos = 0; 

const numero = Math.floor(Math.random() * 10)+ 1;

function adivinar() {

    const valor = Number(input.value);

    if (valor == numero) {
        intentos++;
        respuesta.textContent = '¡¡Número Correcto!!' + ' Lo has conseguido en ' + intentos + ' Intentos' ;
    } else if (valor > numero) {
        intentos++;
        respuesta.textContent = 'El número que tienes que adivinar es más pequeño que el que has introducido. ' + ' Llevas ' + intentos + ' intentos';
    } else if (valor < numero) {
        intentos++;
        respuesta.textContent = 'El número que tienes que adivinar es más grande que el que has introducido. ' + ' Llevas ' + intentos + ' intentos';
    }
}

button.addEventListener('click', adivinar);