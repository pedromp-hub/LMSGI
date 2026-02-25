const button = document.getElementById('agregar');
const listatareas = document.getElementById('listatareas');
const bcambiarcolor = document.getElementById('cambiarcolor');

/*const bborrar = document.getElementById('borrar');*/


const entrada = document.getElementById('entrada');

button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', colorrojo);
/*bborrar.addEventListener('click', borrar)*/

function colorrojo(){
    const listatareasli = document.querySelectorAll("li");
    for (let i=0; i<listatareasli.length; i++){
        listatareasli[i].style.color="red";
    }
}

function agregar(){
    const litarea = document.createElement("li");

    const node = document.createTextNode(entrada.value);

    litarea.appendChild(node);

    listatareas.appendChild(litarea);


    /*const enlace = document.createElement("a");
    const node2 = document.createTextNode(" Enlace a....");
    enlace.appendChild(node2);
    enlace.setAttribute("href", "https://www.ieszaidinvergeles.org")

    ptarea.appendChild(enlace);

    const imagen = document.createElement("img");
    tareas.appendChild(imagen);
    imagen.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/006/596/424/non_2x/waving-flag-of-catalan-independentist-estelada-vector.jpg");*/

}

/*function borrar(){
    ptarea.remove();

}*/