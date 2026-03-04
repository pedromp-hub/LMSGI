let index = 0;
const carrusel = document.getElementsByClassName("imagen");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener('click', fboton1);
boton2.addEventListener('click', fboton2);
boton3.addEventListener('click', fboton3);

function fboton1(){
    for(let i=0; i<carrusel.length; i++){
        carrusel[i].style.display = "none";
    }
    carrusel[0].style.display = "block";
}

function fboton2(){
    for(let i=0; i<carrusel.length; i++){
        carrusel[i].style.display = "none";
    }
    carrusel[1].style.display = "block";
}

function fboton3(){
    for(let i=0; i<carrusel.length; i++){
        carrusel[i].style.display = "none";
    }
    carrusel[2].style.display = "block";
}