let numero = 0;

const valor = document.getElementById('texto');
const botonsumar = document.getElementById('sumar');
const botonrestar = document.getElementById('restar');
const botonreset = document.getElementById('reset');

botonsumar.addEventListener('click', sumar);
botonrestar.addEventListener('click', restar);
botonreset.addEventListener('click', reset);

function sumar(){
    numero++
    valor.textContent = numero;
}

function restar(){
    numero--;
    valor.textContent = numero;
}

function reset(){
    numero = 0;
    valor.textContent = numero;
}
