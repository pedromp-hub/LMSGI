const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');
const elemento = document.getElementById('elemento');

boton.addEventListener('click', agregar);

function agregar() {
    const nuevoli = document.createElement('li');
    nuevoli.textContent = elemento.value;
    nuevoli.classList.add('item');

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'X';

    function borrar() {
        nuevoli.remove();
    };

    botonBorrar.addEventListener('click', borrar);

    nuevoli.appendChild(botonBorrar);
    lista.appendChild(nuevoli);

    elemento.value = '';
}