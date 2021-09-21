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
// personaje.style.backgroundColor="red";
personaje.style.position="absolute";
personaje.style.bottom="5%";
personaje.style.left="42%";
personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-quieto-derecha.png)"
personaje.style.backgroundSize="contain";
personaje.style.backgroundRepeat="no-repeat";

juego.appendChild(personaje);

var enemigoDerechaExiste = false;

setInterval(() => {
    //CREACION DEL ENEMIGO DERECHA
    var enemigoDerecha = document.createElement("div");
    enemigoDerecha.style.height="10.75%";
    enemigoDerecha.style.width="8.75%";
    // enemigoDerecha.style.backgroundColor="red";
    enemigoDerecha.style.position="absolute";
    enemigoDerecha.style.bottom="75%";
    enemigoDerecha.style.left="7.5%";
    enemigoDerecha.style.backgroundImage="url(/Videoconsola_CSS/game/img/enemigo-derecha.png)"
    enemigoDerecha.style.backgroundSize="cover";
    enemigoDerecha.style.backgroundRepeat="no-repeat";
    enemigoDerecha.setAttribute("id", "enemigoDerecha");
    juego.appendChild(enemigoDerecha);
    enemigoDerechaExiste = true;
    console.log(document.getElementById("enemigoDerecha"));
}, 4000);


var enemigoIzquierdaExiste = false;
setTimeout(() => {
    setInterval(() => {
        //CREACION DEL ENEMIGO IZQUIERDA
        var enemigoIzquierda = document.createElement("div");
        enemigoIzquierda.style.height="10.75%";
        enemigoIzquierda.style.width="8.75%";
        // enemigoIzquierda.style.backgroundColor="red";
        enemigoIzquierda.style.position="absolute";
        enemigoIzquierda.style.bottom="75%";
        enemigoIzquierda.style.left="84%";
        enemigoIzquierda.style.backgroundImage="url(/Videoconsola_CSS/game/img/enemigo-izquierda.png)"
        enemigoIzquierda.style.backgroundSize="cover";
        enemigoIzquierda.style.backgroundRepeat="no-repeat";
        enemigoIzquierda.setAttribute("id", "enemigoIzquierda");
        juego.appendChild(enemigoIzquierda);
        enemigoIzquierdaExiste = true;
        console.log(document.getElementById("enemigoIzquierda"));
    }, 4000);
}, 500);


//MOVIMIENTO DEL PERSONAJE
var x = 42;
var y = 5;
var mirandoDerecha = true;
var tecla = undefined;

//MOVIMIENTO DEL ENEMIGO DERECHA
var xEDer = 7.5;
var yEDer = 75;

//MOVIMIENTO DEL ENEMIGO IZQUIERDA
var xEIzq = 84;
var yEIzq = 75;


document.onkeydown = function (e) {
    tecla=e.key;
};

document.onkeyup = function (e) {
    tecla = undefined;
    contador = 0;
};

setInterval( personajeLoop , 10);
    setInterval(() => {
        if (enemigoDerechaExiste) {
            var enemigoCreadoDerecha = document.getElementById("enemigoDerecha");
            enemigoLoop(enemigoCreadoDerecha);
        }
    }, 10);
    setInterval(() => {
        if (enemigoIzquierdaExiste) {
            var enemigoCreadoIzquierda = document.getElementById("enemigoIzquierda");
            enemigoLoop(enemigoCreadoIzquierda);
        }
    }, 10);
setInterval( deathLoop , 10);


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
    y += 30;
    personaje.style.bottom = y + "%";
    setTimeout(() => {
        y -= 30;
        personaje.style.bottom = y + "%";
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
    y += 30
    personaje.style.bottom = y + "%";
    if (lado === "derecha") {
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
        y -= 30;
        personaje.style.bottom = y + "%";
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

var puntuacion = 0;

function personajeLoop() {
    if(tecla==="d" && x < 86){
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
function enemigoLoop(enemigoCreadoDerecha) {
    if (yEDer > 5 ) {
        yEDer -= 1;
        enemigoCreadoDerecha.style.bottom = yEDer + "%";        
    }
    if (xEDer < 91) {
        xEDer += 0.25;
        enemigoCreadoDerecha.style.left = xEDer + "%";
    }else{
        juego.removeChild(enemigoCreadoDerecha);
        enemigoDerechaExiste = false;
        puntuacion++;
        xEDer = 7.5;
        yEDer = 75;
    }
}
// function enemigoLoop(enemigoCreadoIzquierda) {
//     if (yEIzq > 5 ) {
//         yEIzq -= 1;
//         enemigoCreadoIzquierda.style.bottom = yEIzq + "%";        
//     }
//     if (xEIzq > 10) {
//         xEIzq -= 0.25;
//         enemigoCreadoIzquierda.style.left = xEIzq + "%";
//     }else{
//         juego.removeChild(enemigoCreadoIzquierda);
//         enemigoIzquierdaExiste = false;
//         puntuacion++;
//         xEIzq = 84;
//         yEIzq = 75;
//     }
// }
function deathLoop() {   
    if (yEDer == y && xEDer == x) {
        juego.style.display="none";
        console.log(xEDer + "---" + x);
    }
    // if (yEIzq == y && xEIzq == x) {
    //     juego.style.display="none";
    //     console.log(xEIzq + "---" + x);
    // }
}
