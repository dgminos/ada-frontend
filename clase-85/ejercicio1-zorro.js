
// Ejercicio 1 - Zorro
// Utilizando el template de ejercicio Zorro, se debe mostrar una imagen aleatoria de un zorro cuando se apriete el botón.

const urlBase = 'https://randomfox.ca';
const baseImg = '/?i=';

function idAleatoria(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let endpoint = urlBase + baseImg + idAleatoria(1, 122);
console.log('vamos a obtener el recurso ' + endpoint);


btn.addEventListener('click', () => {

    fetch(endpoint)
        .then(response => {
            console.log('Respuesta: ' + response)
            return response.text();
        })
        .then(data => {
            mostrarImagen(data);
        })
        .catch(error => {
            console.log(error);

        });
    let img = document.createElement("img");
    img.setAttribute("src", endpoint);
    img.className = "img";
    document.body.appendChild(img);
    document.body.innerHTML = img;
})


