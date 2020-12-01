// 6) (progreso) Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt 
//por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso 
//tiene que ocupar el 75% de la barra contenedora)

let contenedor = document.getElementById("contenedor");
let barra = document.getElementById("barra");

const modificarBarraProgreso = () => {

    let valor = parseInt(prompt("Ingrese un porcentaje"));
    contenedor.style.width = "500px";
    contenedor.style.height = "30px";
    contenedor.style.background = "#c2c2c2";
    barra.style.width = `${valor}%`;
    barra.style.height = "30px";
    barra.style.background = "red";
    barra.innerHTML = `${valor}%`;

    document.body.append(`La barra de progreso actualmente ocupa un ${valor}% del ancho de la barra contenedora`);
}
modificarBarraProgreso();









