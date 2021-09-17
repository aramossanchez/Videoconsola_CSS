let led = document.getElementById("led");
let start = document.getElementById("boton-start-redondo")

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
}