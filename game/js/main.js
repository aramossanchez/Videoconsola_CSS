var juego = document.getElementById("juego");

// juego.style.display="none";

//CREACIÓN DEL FONDO
juego.style.width="100%";
juego.style.height="100%";
juego.style.position="relative";
juego.style.backgroundColor="green";

//CREACION DEL PERSONAJE
var personaje = document.createElement("div");
personaje.style.height="20%";
personaje.style.width="10%";
// personaje.style.backgroundColor="red";
personaje.style.position="absolute";
personaje.style.bottom="0";
personaje.style.left="0";
personaje.style.backgroundImage="url(../game/img/mario-quieto-derecha.png)"
personaje.style.backgroundSize="contain";
personaje.style.backgroundRepeat="no-repeat";
personaje.style.transition="0";

juego.appendChild(personaje);

//MOVIMIENTO DEL PERSONAJE
let posicionamientoIzquierdo = 0;
const moverDerecha = () =>{
    personaje.style.backgroundImage="url(../game/img/mario-quieto-derecha.png)"
    personaje.style.transition="0.2s";
    let movimiento = posicionamientoIzquierdo + 6;
    if (movimiento<=90) {
        personaje.style.left=movimiento + "%";
        posicionamientoIzquierdo = posicionamientoIzquierdo + 6;
    }
}

const saltar = () =>{
    personaje.style.transition="0";
    personaje.style.backgroundImage="url(../game/img/mario-saltando-derecha.png)"
    personaje.style.backgroundSize="contain";
    personaje.style.backgroundRepeat="no-repeat";
    personaje.style.transition="0.25s";
    personaje.style.bottom = "22%";
    setTimeout(() => {
        personaje.style.bottom = "0";
        personaje.style.backgroundImage="url(../game/img/mario-quieto-derecha.png)"
    }, 285);
    
}