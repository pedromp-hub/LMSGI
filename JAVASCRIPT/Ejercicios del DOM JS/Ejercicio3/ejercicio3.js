const boton = document.getElementById('toggle');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', ocultar);

function ocultar(){
    if (mensaje.style.display === "block"){
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }
    
}