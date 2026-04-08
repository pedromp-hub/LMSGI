const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

let contador = 2;

boton.addEventListener('click' ,agregar);

function agregar(){
    const nuevoli = document.createElement('li');
    contador++;
    nuevoli.textContent = "Elemento" + contador;
    lista.appendChild(nuevoli);
    nuevoli.addEventListener('click', eliminar)
    function eliminar(){
        nuevoli.remove();
    }
    
}