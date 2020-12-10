const inputKm = document.createElement('input');
inputKm.setAttribute('type', 'number');
inputKm.setAttribute('name', 'km');
inputKm.setAttribute('placeholder', 'Ingrese un número');
const inputMillas = document.createElement('input');
inputMillas.setAttribute('type', 'number');
inputMillas.setAttribute('name', 'millas');
inputMillas.setAttribute('placeholder', 'Ingrese un número');

document.body.appendChild(inputKm);
document.body.appendChild(inputMillas);

function kmAMillas(km) {
    return km * 0.621371;
}

function millasAKm(millas) {
    return millas / 0.621371;
}

const kmToMiles = () => {
    let kilometros = Number(inputKm.value);
    inputMillas.value = kmAMillas(kilometros);
}

const milesToKm = () => {
    let millas = Number(inputMillas.value);
    inputKm.value = millasAKm(millas);
}

inputKm.addEventListener('input', kmToMiles);
inputMillas.addEventListener('input', milesToKm);




