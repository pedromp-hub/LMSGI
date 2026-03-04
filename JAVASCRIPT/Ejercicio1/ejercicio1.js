/*MANUAL*/
//let index = 0;
//const carrusel = document.getElementsByClassName("imagen");
//const boton1 = document.getElementById("boton1");
//const boton2 = document.getElementById("boton2");
//const boton3 = document.getElementById("boton3");

//boton1.addEventListener('click', function(){fboton(0)});
//boton2.addEventListener('click', function(){fboton(1)});
//boton3.addEventListener('click', function(){fboton(2)});

//function fboton(index){
//    for(let i=0; i<carrusel.length; i++){
//        carrusel[i].style.display = "none";
//    }
//    carrusel[index].style.display = "block";
//}

/*AUTOMATICO*/
let diapositivaactual = 0;
const carrusel = document.getElementsByClassName("imagen");
mostrarcarrusel();

function mostrarcarrusel(){
    for (i = 0; i < carrusel.length; i++){
        carrusel[i].style.display = "none";
    }
    carrusel[diapositivaactual].style.display = "block";
    diapositivaactual++;

    if (diapositivaactual >= carrusel.length){
        diapositivaactual = 0;
    }
    setTimeout(mostrarcarrusel, 2000);
}