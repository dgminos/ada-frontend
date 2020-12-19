
// Ejercicio 1 - Zorro
// Utilizando el template de ejercicio Zorro, se debe mostrar una imagen aleatoria de un zorro cuando se apriete el botón.

const urlBase = 'https://randomfox.ca/?i=';

function idAleatoria(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let endpoint = urlBase + idAleatoria(1, 122);
console.log('vamos a obtener el recurso ' + endpoint);

const mostrarImagen = () => {
    let img = document.createElement("img");
    img.className = "img";
    img.setAttribute("src", endpoint);
    document.body.appendChild(img);
    document.body.innerHTML = img;
}

btn.addEventListener('click', () => {

    fetch(endpoint, {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })
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
})


