const boton = document.getElementById('color');
const caja = document.getElementById('caja');

boton.addEventListener('click', cambiar);

function cambiar(){
    if (document.body.style.backgroundColor == "white"){
        caja.style.color = "white";
        document.body.style.backgroundColor = "blue";
    } else {
        caja.style.color = "black";
        document.body.style.backgroundColor = "white";
    }
    
}