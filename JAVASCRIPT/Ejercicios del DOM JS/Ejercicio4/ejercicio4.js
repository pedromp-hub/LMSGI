const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', agregar);

function agregar(){
    const nuevoli = document.createElement('li');
    nuevoli.textContent = "Nuevo elemento";
    nuevoli.classList.add('item');
    lista.appendChild(nuevoli);
}