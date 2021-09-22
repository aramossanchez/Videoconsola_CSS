// CREADO POR: Armando Ramos
// VERSION: 1.0 
/*
************************************************************************************************
INPUT
************************************************************************************************
*/

//OBTENEMOS ELEMENTOS DEL DOM

var juego = document.getElementById("juego");
var pantallaDerrota = document.getElementById("pantalla-derrota");
var Puntuacion = document.getElementById("puntuacion");

//VARIABLES PARA INDICAR QUE LOS ENEMIGOS NO EXISTEN

var enemigoDerechaExiste = false;
var enemigoIzquierdaExiste = false;

//VARIABLE PARA SABER SI ESTAMOS EN LA PANTALLA DE DERROTA

var pantallaDerrotaExiste = false;

//MOVIMIENTO DEL PERSONAJE

var x = 42;
var y = 5;
var mirandoDerecha = true;
var tecla = undefined;

//OBTENEMOS SONIDO DEL PERSONAJE

const salto = new Audio('/Videoconsola_CSS/audio/mario-bros-jump.mp3');
const gameOver = new Audio('/Videoconsola_CSS/audio/game-over.mp3');

// //MOVIMIENTO DEL ENEMIGO DERECHA

var xEDer = 7.5;
var yEDer = 75;

//MOVIMIENTO DEL ENEMIGO IZQUIERDA

var xEIzq = 84;
var yEIzq = 75;

//OBTENEMOS SONIDO DEL ENEMIGO

const muerteEnemigo = new Audio('/Videoconsola_CSS/audio/enemigo-muere.mp3');

//CONTADOR PARA EVITAR SALTAR EN BUCLE ANTES DE QUE ACABE EL SALTO ANTERIOR

var contador = 0;


//CONTADOR PARA SABER CUANTOS ENEMIGOS MUERTOS HAY
var puntuacion = 0;

/*
************************************************************************************************
PROCESO
************************************************************************************************
*/


//DESACTIVAMOS EL JUEGO
juego.style.display="none";

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


//CREACION DEL ENEMIGO DERECHA (SOLO LO EMPIEZA A CREAR EN BUCLE SI EL JUEGO ESTÁ ACTIVO)
setInterval(() => {
    if (juego.style.display == "block") {
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
    }    
}, 3500);


//CREACION DEL ENEMIGO IZQUIERDA (SOLO LO EMPIEZA A CREAR EN BUCLE SI EL JUEGO ESTÁ ACTIVO)
setInterval(() => {
    if (juego.style.display == "block") {
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
    }
}, 4000);

//CREADO PARA FUNCIONAMIENTO CON TECLADO. HECHO ASÍ PARA EVITAR EL DELAY QUE HABÍA CON EL MÉTODO ANTERIOR
//GUARDAMOS EN UNA VARIABLE LA TECLA QUE HA SIDO PULSADA. EL PROGRAMA SEGUIRÁ Y ACCEDERÁ AL BUCLE DE MOVIMIENTO, QUE MIRA
//QUE TECLA HAY GUARDADA EN LA VARIABLE Y EJECUTA LA ACCIÓN SEGÚN CORRESPONDA.
//CUANDO SUELTAS LA TECLA PULSADA LA VARIABLE SE QUEDA VACÍA, Y EL BUCLE NO EJECUTA NINGUNA ACCIÓN.

document.onkeydown = function (e) {
    tecla=e.key;
};

document.onkeyup = function (e) {
    tecla = undefined;
    contador = 0;
};

//DECLARAMOS CONDICIONES PARA QUE SE EJECUTEN LOS BUCLES: BUCLE DE PERSONAJE, BUCLE DE ENEMIGOS Y BUCLE DE MUERTE

setInterval( personajeLoop , 10);
    setInterval(() => {
        if (enemigoDerechaExiste) {
            var enemigoCreadoDerecha = document.getElementById("enemigoDerecha");
            enemigoLoopDerecha(enemigoCreadoDerecha);
        }
    }, 10);
    setInterval(() => {
        if (enemigoIzquierdaExiste) {
            var enemigoCreadoIzquierda = document.getElementById("enemigoIzquierda");
            enemigoLoopIzquierda(enemigoCreadoIzquierda);
        }
    }, 10);
setInterval(() => {
    if (enemigoDerechaExiste) {
        var enemigoCreadoDerecha = document.getElementById("enemigoDerecha");
    }
    if (enemigoIzquierdaExiste) {
        var enemigoCreadoIzquierda = document.getElementById("enemigoIzquierda");
    }
    deathLoop(enemigoCreadoDerecha, enemigoCreadoIzquierda);
}, 10);


//FUNCIÓN SALTAR EN VERTICAL

const saltar = () =>{
    if(mirandoDerecha){
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-saltando-derecha.png)"
    }
    else{
        personaje.style.backgroundImage="url(/Videoconsola_CSS/game/img/mario-saltando-izquierda.png)"
    }
    salto.play();
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

//FUNCION SALTAR EN HORIZONTAL

const saltoHorizontal = (lado) =>{
    salto.play();
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

//MOVIMIENTOS DEL PERSONAJE

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

//FUNCIÓN CREADA PARA QUE FUNCIONEN LOS BOTONES DE LA CONSOLA

const darValor = (letra) =>{
    tecla = letra;
}

//FUNCIONES QUE DESCRIBEN EL COMPORTAMIENTO DE LOS ENEMIGOS

function enemigoLoopDerecha(enemigoCreadoDerecha) {
    if (yEDer > 5 ) {
        yEDer -= 1;
        enemigoCreadoDerecha.style.bottom = yEDer + "%";        
    }
    if (xEDer < 91) {
        xEDer += 0.25;
        enemigoCreadoDerecha.style.left = xEDer + "%";
    }else{
        juego.removeChild(enemigoCreadoDerecha);
        muerteEnemigo.play();
        enemigoDerechaExiste = false;
        puntuacion++;
        xEDer = 7.5;
        yEDer = 75;
        Puntuacion.innerHTML = "Puntuación: " + puntuacion;
    }
}

function enemigoLoopIzquierda(enemigoCreadoIzquierda) {
    if (yEIzq > 5 ) {
        yEIzq -= 1;
        enemigoCreadoIzquierda.style.bottom = yEIzq + "%";        
    }
    if (xEIzq > 3) {
        xEIzq -= 0.25;
        enemigoCreadoIzquierda.style.left = xEIzq + "%";
    }if( xEIzq == 3){
        juego.removeChild(enemigoCreadoIzquierda);
        muerteEnemigo.play();
        enemigoIzquierdaExiste = false;
        puntuacion++;
        xEIzq = 84;
        yEIzq = 75;
        Puntuacion.innerHTML = "Puntuación: " + puntuacion;
    }
}

//FUNCIÓN QUE DESCRIBE LA MUERTE DEL PERSONAJE

function deathLoop(enemigoCreadoDerecha, enemigoCreadoIzquierda) {   
    if (yEDer == y && xEDer == x) {
        gameOver.play();
        juego.style.display="none";
        pantalla.style.backgroundColor="none";
        pantallaDerrota.style.display="flex";
        pantallaDerrotaExiste = true;
        juego.removeChild(enemigoCreadoDerecha);
        puntuacion = 0;
        Puntuacion.innerHTML = "";
    }
    if (yEIzq == y && xEIzq == x) {
        gameOver.play();
        juego.style.display="none";
        pantalla.style.backgroundColor="none";
        pantallaDerrota.style.display="flex";
        pantallaDerrotaExiste = true;
        juego.removeChild(enemigoCreadoIzquierda);
        puntuacion = 0;
        Puntuacion.innerHTML = "";
    }
}

//FUNCION PARA REINICIAR LA PARTIDA TRAS APARECER LA PANTALLA DE GAME OVER

const ReiniciarPartida = () => {
    if(pantallaDerrotaExiste){
        gameOver.pause();
        pantallaDerrota.style.display="none";
        tecla = "";
        juego.style.display="block";
    }
}