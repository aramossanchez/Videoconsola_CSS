/*
************************************************************************************************
INPUT
************************************************************************************************
*/

//OBTENEMOS ELEMENTOS DEL DOM

let led = document.getElementById("led");
let intro_game_boy = document.getElementById("intro-game-boy");
let pantalla = document.getElementById("pantalla");
let game = document.getElementById("juego");
let boton_encendido = document.getElementById("boton-encendido");
let pantalla_inicio_juego = document.getElementById("pantalla-inicio-juego");
var consola = document.getElementById("consola");
var pantallaDerrota = document.getElementById("pantalla-derrota");
var Puntuacion = document.getElementById("puntuacion");

let Blanco = document.getElementById("Blanco");
let Amarillo = document.getElementById("Amarillo");
let Rojo = document.getElementById("Rojo");
let Verde = document.getElementById("Verde");
let Azul = document.getElementById("Azul");

//CREAMOS VARIABLE PARA SABER SI LA CONSOLA ESTÁ ENCENDIDA Y SI EL JUEGO ESTÁ INICIADO

var consolaEncendida = false;
var juegoIniciado = false;

/*
************************************************************************************************
PROCESO
************************************************************************************************
*/

//CAMBIAR COLOR DE LA CONSOLA

const CambiarColor = (e) =>{
    switch (e) {
        case "Blanco":
            consola.classList.remove("blanco", "amarillo", "rojo", "verde", "azul");
            consola.classList.add("blanco");
            break;
        case "Amarillo":
            consola.classList.remove("blanco", "amarillo", "rojo", "verde", "azul");
            consola.classList.add("amarillo");
            break;
        case "Rojo":
            consola.classList.remove("blanco", "amarillo", "rojo", "verde", "azul");
            consola.classList.add("rojo");
            break;
        case "Verde":
            consola.classList.remove("blanco", "amarillo", "rojo", "verde", "azul");
            consola.classList.add("verde");
            break;
        case "Azul":
            consola.classList.remove("blanco", "amarillo", "rojo", "verde", "azul");
            consola.classList.add("azul");
            break;
        default:
            break;
    }
}

//EFECTO GRÁFICO PARA HACER QUE LOS BOTONES DE LA CONSOLA SEAN APRETADOS

const apretarBoton = (boton) =>{
    document.getElementById(boton).style.transform=("scale(0.9)");
    setTimeout(() => {
        document.getElementById(boton).style.transform=("scale(1)");
    }, 50);
}

//ENCIENDE LA CONSOLA: ENCIENDE EL LED Y MUESTRA EL VIDEO DE INTRO DE GAME BOY

const encenderConsola = () =>{
    if (!consolaEncendida) {
        led.classList.remove("led-apagado");
        led.classList.add("led-encendido");
        pantalla.style.backgroundColor="rgb(10, 10, 10)";
        setTimeout(() => {
            intro_game_boy.style.display="inline";
            intro_game_boy.play();
        }, 150);
    }
    else{
        led.classList.remove("led-encendido");
        led.classList.add("led-apagado");
        pantalla.style.backgroundColor="rgb(156, 156, 156)";
        intro_game_boy.style.display="none";
        pantalla_inicio_juego.style.display="none";
        pantallaDerrota.style.display="none";
        Puntuacion.style.display="none";
        juego.style.display="none";
    }
}

//MUEVE EL BOTÓN DE ENCENDIDO

const botonEncendido = () => {
    if (consolaEncendida) {
        boton_encendido.style.left="16%";
        consolaEncendida = false;
    }
    else{
        boton_encendido.style.left="54%";
        consolaEncendida = true;
    }
}

//HACE DESAPARECER LA INTRO DE GAME BOY Y MUESTRA LA INTRO DEL JUEGO, O HACE DESAPARECER EL JUEGO

const arrancarJuego = () =>{
    if (consolaEncendida) {
        setTimeout(() => {
            intro_game_boy.style.display="none";
            pantalla_inicio_juego.style.display="block";
            pantalla_inicio_juego.play();
            pantalla.style.backgroundColor="black";
            juegoIniciado = true;
        }, 4100);
    }
    else{
        juego.style.display="none";
        intro_game_boy.style.display="none";
    }
}

//HACE DESAPARECER LA INTRO DEL JUEGO E INICIA EL JUEGO

const IniciarJuego = () => {
    if(juegoIniciado){
        pantalla_inicio_juego.style.display="none";
        juego.style.display="block";
        pantalla_inicio_juego.pause();
    }
}