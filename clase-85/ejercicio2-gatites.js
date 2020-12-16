// Ejercicio 2 - Gatites
// API

// Utilizando el template de ejercicio Gatites, se deben mostrar dos imágenes aleatorias de gatites cuando se apriete el botón.

const btn = document.getElementById('btn');

const urlBase = 'https://api.thecatapi.com/v1/images/search';
//const apiKey = '9c2da6c3-dd40-4c80-a6d8-dcc3eb2bad3e';


const mostrarGatiteRandom = () => {
    fetch(`${urlBase}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)

        })
        .catch(error => {
            console.log(error);
        })
}
btn.addEventListener('click', mostrarGatiteRandom);

