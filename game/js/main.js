


var juego = document.getElementById("juego");

juego.style.display="none";

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
personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
personaje.style.backgroundSize="contain";
personaje.style.backgroundRepeat="no-repeat";

juego.appendChild(personaje);

//MOVIMIENTO DEL PERSONAJE
var x = 0;

var tecla = undefined;
console.log(tecla);


document.onkeydown = function (e) {
    tecla=e.key;
};

document.onkeyup = function (e) {
    tecla = undefined;
    contador = 0;
};

console.log(tecla);

setInterval( mainLoop , 10);


var contador = 0;

const saltar = () =>{
    personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-saltando-derecha.png)"
    personaje.style.transition="0.3s"
    personaje.style.backgroundSize="contain";
    personaje.style.backgroundRepeat="no-repeat";
    personaje.style.bottom = "35%";
    setTimeout(() => {
        personaje.style.bottom = "0";
    }, 400);
    setTimeout(() => {
        personaje.style.transition="0s";
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"        
    }, 600);
}

const saltoHorizontal = () =>{
    personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-volando-derecha.png)";
    personaje.style.transition="0.3s"
    personaje.style.left = x + 20 + "%";
    x = x + 20;
    personaje.style.bottom = "35%";
    setTimeout(() => {
        personaje.style.bottom = "0";
    }, 400);
    setTimeout(() => {
        personaje.style.transition="0s";
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"        
    }, 600);
}

function mainLoop() {
    if(tecla==="d"){
        x += 0.5;
        personaje.style.left = x + "%";
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
        setTimeout(() => {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-andando-derecha.png)"
        }, 50);
        setTimeout(() => {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
        }, 200);
        }
    if(tecla==="a"){
        x -= 0.5;
        personaje.style.left = x + "%";
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-izquierda.png)"
        setTimeout(() => {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-andando-izquierda.png)"
        }, 50);
        setTimeout(() => {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-izquierda.png)"
        }, 200);
    }
    if(tecla==="w" && contador<1){
        saltar();
        contador++;
    }
    if(tecla==="f" && contador<1){
        saltoHorizontal();
        contador++;
    }
}

