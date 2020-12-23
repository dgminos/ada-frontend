// Ejercicio 2 - Gatites
// API

// Utilizando el template de ejercicio Gatites, se deben mostrar dos imágenes aleatorias de gatites cuando se apriete el botón.

const btn = document.getElementById('btn');

const urlBase = 'https://api.thecatapi.com/v1/images/search';
//const apiKey = '9c2da6c3-dd40-4c80-a6d8-dcc3eb2bad3e';

const mostrarImagen = (data) => {
    let img = document.createElement("img");
    img.className = "img";
    img.setAttribute("src", `${data}`);
    img.setAttribute('width', '200px');
    const contenedor = document.getElementById('contenedor');
    contenedor.appendChild(img);

}

const obtenerGatite = () => {
    fetch(urlBase)

        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(data => {
            for (let props in data) {
                const mamaGatite = data[props];
                for (let prop in mamaGatite) {

                    if (prop === 'url') {
                        const gatite = mamaGatite[prop];
                        console.log(gatite)
                        mostrarImagen(gatite);
                    }
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
    fetch(urlBase)

        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(data => {
            for (let props in data) {
                const mamaGatite = data[props];
                for (let prop in mamaGatite) {

                    if (prop === 'url') {
                        const gatite = mamaGatite[prop];
                        console.log(gatite)
                        mostrarImagen(gatite);
                    }
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
}

btn.addEventListener('click', obtenerGatite);
