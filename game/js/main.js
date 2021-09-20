var juego = document.getElementById("juego");

// juego.style.display="none";

//CREACIÓN DEL FONDO
juego.style.width="100%";
juego.style.height="100%";
juego.style.position="relative";
juego.style.backgroundColor="green";
juego.style.backgroundImage="url(/Videoconsola_CSS/game/img/fondo-mario.png)"
juego.style.backgroundSize="contain";
juego.style.backgroundRepeat="no-repeat";

//CREACION DEL PERSONAJE
var personaje = document.createElement("div");
personaje.style.height="20%";
personaje.style.width="10%";
personaje.style.backgroundColor="red";
personaje.style.position="absolute";
personaje.style.bottom="5%";
personaje.style.left="42%";
personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
personaje.style.backgroundSize="contain";
personaje.style.backgroundRepeat="no-repeat";

juego.appendChild(personaje);

//MOVIMIENTO DEL PERSONAJE
var x = 42;
var mirandoDerecha = true;
var tecla = undefined;


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
    if(mirandoDerecha){
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-saltando-derecha.png)"
    }
    else{
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-saltando-izquierda.png)"
    }
    personaje.style.transition="0.3s"
    personaje.style.backgroundSize="contain";
    personaje.style.backgroundRepeat="no-repeat";
    personaje.style.bottom = "35%";
    setTimeout(() => {
        personaje.style.bottom = "5%";
    }, 400);
    setTimeout(() => {
        personaje.style.transition="0s";
        if(mirandoDerecha){
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
        }
        else{
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-izquierda.png)"
        }
    }, 600);
}

const saltoHorizontal = (lado) =>{
    personaje.style.transition="0.3s"
    personaje.style.bottom = "35%";
    if (lado === "derecha") {
        console.log(x);
        mirandoDerecha = true;
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-volando-derecha.png)";
        if(x < 86){
            if(x > 66 && x < 86){
                personaje.style.left = x + (86-x) + "%";
                x = 86;
            }
            else{
                personaje.style.left = x + 20 + "%";
                x = x + 20;
            }
        }
    }
    if (lado === "izquierda") {
        mirandoDerecha = false;
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-volando-izquierda.png)";
        if(x > 5){
            if(x > 5 && x < 25){
                personaje.style.left = x - (x-5) + "%";
                x = 5;
            }
            else{
                personaje.style.left = x - 20 + "%";
                x = x - 20;
            }
        }
    }
    setTimeout(() => {
        personaje.style.bottom = "5%";
    }, 400);
    setTimeout(() => {
        personaje.style.transition="0s";
        if (lado === "derecha") {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
        }
        if (lado === "izquierda") {
            personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-izquierda.png)"
        } 
    }, 600);
}

function mainLoop() {
    if(tecla==="d" && x < 86){
        console.log(tecla);
        console.log(contador);
        mirandoDerecha = true;
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
    if(tecla==="a" && x > 5){
        mirandoDerecha = false;
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
        setTimeout(() => {
            contador = 0;
        }, 300);
    }
    if(tecla==="e" && contador<1){
        saltoHorizontal("derecha");
        contador++;
        setTimeout(() => {
            contador = 0;
        }, 300);
    }
    if(tecla==="q" && contador<1){
        saltoHorizontal("izquierda");
        contador++;
        setTimeout(() => {
            contador = 0;
        }, 300);
    }
}
const darValor = (letra) =>{
    tecla = letra;
}
