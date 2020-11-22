// 8) (card) Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla
// - agregarle un borde
// - agregarle un sombreado
// - cambiarle la tipografía
// - cambiarle los tamaños de fuente
// - cambiarle los colores por defecto

const titulo = document.getElementById('titulo');
const imagen = document.getElementById('imagen');
const articulo = document.getElementById('articulo');
const tarjeta = document.getElementById('tarjeta');
const vermas = document.getElementById('verMas');

tarjeta.style.margin = 'auto';
tarjeta.style.display = 'flex';
tarjeta.style.flexDirection = 'column';
tarjeta.style.justifyContent = 'center';
tarjeta.style.alignItems = 'center';
tarjeta.style.backgroundColor = 'grey';
tarjeta.style.width = '400px';
tarjeta.style.border = '2px solid red';
tarjeta.style.boxShadow = '5px 10px #888888';
tarjeta.style.fontFamily = 'helvetica';
tarjeta.style.fontSize = '15px';
tarjeta.style.color = 'blue';


const card = () => {
    const title = prompt('Ingrese un título');
    const urlImagen = prompt('Ingrese la url de una imagen');
    const urlArticulo = prompt('Ingrese la url de un artículo');

    titulo.innerHTML = title;

    imagen.setAttribute('src', urlImagen);

    verMas.setAttribute('href', urlArticulo);

}
card();