const jugador = document.getElementById("jugador");
const pais = document.getElementById("pais");
const imagen = document.getElementById("imagen");
const enviar = document.getElementById("boton");

enviar.addEventListener('click', envio);

function envio(){
    let imagenes = document.createElement('img');
    
    imagenes.setAttribute('src', 'imagen.png'); 
    
    const nombreTexto = jugador;
    const paisTexto = pais;

    const ju = document.createElement('h2');
    ju.textContent = nombreTexto;

    const pa = document.createElement('h2');
    pa.textContent = paisTexto; 
    
    
    imagen.appendChild(imagenes);
    imagen.appendChild(ju);
    imagen.appendChild(pa);

    jugador.remove();
    pais.remove();
}