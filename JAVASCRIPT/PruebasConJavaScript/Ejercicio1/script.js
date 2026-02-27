const button = document.getElementById('boton1');
const input = document.getElementById('Intento');
const p = document.getElementById('respuesta'); 

const numero = Math.floor(Math.random() * 10)+ 1;

function adivinar() {

    const valor = Number(input.value);

    if (valor == numero) {
        p.textContent = '¡¡Número Correcto!!';
    } else if (valor > numero) {
        p.textContent = 'El número que tienes que adivinar es más pequeño que el que has introducido';
    } else if (valor < numero) {
        p.textContent = 'El número que tienes que adivinar es más grande que el que has introducido.';
    }
}

button.addEventListener('click', adivinar);