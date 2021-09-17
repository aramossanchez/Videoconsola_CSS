let led = document.getElementById("led");
let intro_game_boy = document.getElementById("intro-game-boy");
let pantalla = document.getElementById("pantalla");

const apretarBoton = (boton) =>{
    console.log(boton);
    document.getElementById(boton).style.transform=("scale(0.9)");
    setTimeout(() => {
        document.getElementById(boton).style.transform=("scale(1)");
    }, 50);
}
const encenderConsola = () =>{
    led.classList.remove("led-apagado");
    led.classList.add("led-encendido");
    pantalla.style.backgroundColor="rgb(10, 10, 10)";
    setTimeout(() => {
        intro_game_boy.style.display="inline";
        intro_game_boy.play();
    }, 150);
}