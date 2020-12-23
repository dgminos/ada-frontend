
//Ejercicio 3 - Si o NO

//Utilizando el template de ejercicio Si o NO, se debe cambiar la etiqueta img por un gif y cambiar el texto por el resultado 
//de la api cuando se apriete el botón.


const btn = document.getElementById('btn');
const contenedor = document.getElementById('contenedor');

const urlBase = 'https://yesno.wtf/api';


const mostrarImagen = (data) => {
    let img = document.createElement("img");
    img.className = "img";
    img.setAttribute("src", `${data.image}`);
    const contenedor = document.getElementById('contenedor');
    contenedor.appendChild(img);

}

