let led = document.getElementById("led");
let intro_game_boy = document.getElementById("intro-game-boy");
let pantalla = document.getElementById("pantalla");
let game = document.getElementById("juego");
let boton_encendido = document.getElementById("boton-encendido");

var consolaEncendida = false;

const apretarBoton = (boton) =>{
    document.getElementById(boton).style.transform=("scale(0.9)");
    setTimeout(() => {
        document.getElementById(boton).style.transform=("scale(1)");
    }, 50);
}
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
        juego.style.display="none";
    }
}
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
const arrancarJuego = () =>{
    if (consolaEncendida) {
        setTimeout(() => {
            intro_game_boy.style.display="none";
            juego.style.display="block";
        }, 4100);
    }
    else{
        juego.style.display="none";
    }
}