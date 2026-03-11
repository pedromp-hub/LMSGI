const boton = document.getElementById('btn');
const palabra = document.getElementById('texto');

boton.addEventListener('click', cambiar);

function cambiar(){
    palabra.textContent = "Texto cambiado con JAVASCRIPT";
}