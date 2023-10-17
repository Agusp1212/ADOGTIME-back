// --------------------CAMBIO DE IMAGENES DEL MENU PRINCIPAL-----------------
const opcionAdogtame = document.getElementById("opcion-adopcion");
const opcionAdogtour = document.getElementById("opcion-tour");
const opcionAdogtoy = document.getElementById("opcion-toy");
const opcionAdogtell = document.getElementById("opcion-tell");
const opcionAdogtool = document.getElementById("opcion-tool");
const opcionAdogtor = document.getElementById("opcion-tor");
const s1Div1 = document.querySelector(".s1-div1");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
// Define las imágenes y textos para cada opción del menú
const imagenes = {
    adogtame: "../img/2-ADOGTAME.jpg",
    adogtour: "../img/3-ADOGTOUR.jpg",
    adogtoy: "../img/4-ADOGTOY.jpg",
    adogtell: "../img/5-ADOGTELL.jpg",
    adogtool: "../img/6-ADOGTOOL.jpg",
    adogtor: "../img/7-ADOGTOR.jpg",
    predeterminada: "../img/1-HOME.jpg"
};
// Establece la imagen de fondo y el texto predeterminados
s1Div1.style.backgroundImage = `url(${imagenes.predeterminada})`;
// Agrega oyentes de eventos para detectar cuando el mouse pasa sobre las opciones del menú
opcionAdogtame.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtame})`;
});
opcionAdogtour.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtour})`;
});
opcionAdogtoy.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtoy})`;
});
opcionAdogtell.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtell})`;
});

opcionAdogtool.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtool})`;
});

opcionAdogtor.addEventListener("mouseover", () => {
    s1Div1.style.backgroundImage = `url(${imagenes.adogtor})`;
});

// Restaura la imagen de fondo y el texto predeterminados cuando el mouse no está sobre ninguna opción del menú
document.addEventListener("mouseout", (event) => {
    const target = event.target;
    const exclusiones = [
        opcionAdogtame,
        opcionAdogtour,
        opcionAdogtoy,
        opcionAdogtell,
        opcionAdogtool,
        opcionAdogtor
    ];
    if (!exclusiones.includes(target)) {
        s1Div1.style.backgroundImage = `url(${imagenes.predeterminada})`;
    }
});
//-----------------CAMBIAR TITULOS Y SUBTITULOS---------------------
// Función para mostrar un elemento
function mostrarElemento(elementId) {
    document.getElementById(elementId).classList.remove("hidden");
    
}
// Función para ocultar un elemento
function ocultarElemento(elementId) {
    document.getElementById(elementId).classList.add("hidden");
}
// Manejar eventos al pasar el mouse sobre "Adogtame"
document.getElementById("opcion-adopcion").addEventListener("mouseover", () => {
    mostrarElemento("titulo-adopcion");
    mostrarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
document.getElementById("opcion-tour").addEventListener("mouseover", () => {
    mostrarElemento("titulo-tour");
    mostrarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
document.getElementById("opcion-toy").addEventListener("mouseover", () => {
    mostrarElemento("titulo-toy");
    mostrarElemento("subtitulo-toy");
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
document.getElementById("opcion-tell").addEventListener("mouseover", () => {
    mostrarElemento("titulo-tell");
    mostrarElemento("subtitulo-tell");
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
document.getElementById("opcion-tool").addEventListener("mouseover", () => {
    mostrarElemento("titulo-tool");
    mostrarElemento("subtitulo-tool");
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
document.getElementById("opcion-tor").addEventListener("mouseover", () => {
    mostrarElemento("titulo-tor");
    mostrarElemento("subtitulo-tor");
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo");
    ocultarElemento("subtitulo");
});
// Restablecer los estilos predeterminados cuando el mouse no está sobre ninguna opción del menú
document.querySelector("nav").addEventListener("mouseleave", () => {
    ocultarElemento("titulo-tour");
    ocultarElemento("subtitulo-tour");
    ocultarElemento("titulo-toy");
    ocultarElemento("subtitulo-toy");
    ocultarElemento("titulo-adopcion");
    ocultarElemento("subtitulo-adopcion");
    ocultarElemento("titulo-tell");
    ocultarElemento("subtitulo-tell");
    ocultarElemento("titulo-tool");
    ocultarElemento("subtitulo-tool");
    ocultarElemento("titulo-tor");
    ocultarElemento("subtitulo-tor");
    mostrarElemento("titulo");
    mostrarElemento("subtitulo");
});