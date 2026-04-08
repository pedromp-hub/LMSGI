const numeros = document.getElementById('numero');
const suma = document.getElementById('sumar');
const resta = document.getElementById('restar');
const resetear = document.getElementById('reset');

let valor = localStorage.getItem("valor");
numeros.textContent = valor;

suma.addEventListener('click', sumando);
resta.addEventListener('click', restando);
resetear.addEventListener('click', reseteando);

function sumando(){
    valor++;
    localStorage.setItem("valor", valor);
    numeros.textContent = valor;
}

function restando(){
    valor--;
    localStorage.setItem("valor", valor);
    numeros.textContent = valor;
}

function reseteando(){
    valor = 0;
    localStorage.setItem("valor", valor);
    numeros.textContent = valor;
}