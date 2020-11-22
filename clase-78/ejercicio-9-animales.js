
// 9) (animales) En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa 
//que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente
// la imagen del animal elegido.

const imgGato = document.getElementById('gato');
const imgPerro = document.getElementById('perro');
const imgCaballo = document.getElementById('caballo');

imgGato.style.display = 'none';
imgPerro.style.display = 'none';
imgCaballo.style.display = 'none';

const mostrarAnimal = () => {

    const animal = prompt('Si desea ver un gato, escriba la palabra: "gato". Si desea ver un perro, escriba la palabra: "perro" o si desea ver un caballo, escriba la palabra: "caballo"')
    if (animal === 'gato') {
        imgGato.style.margin = 'auto';
        imgGato.style.marginTop = '100px';
        imgGato.style.display = 'flex';
        imgGato.style.flexDirection = 'column';
        imgGato.style.justifyContent = 'center';
    }
    if (animal === 'perro') {
        imgPerro.style.margin = 'auto';
        imgPerro.style.marginTop = '100px';
        imgPerro.style.display = 'flex';
        imgPerro.style.flexDirection = 'column';
        imgPerro.style.justifyContent = 'center';
    }
    if (animal === 'caballo') {
        imgCaballo.style.margin = 'auto';
        imgCaballo.style.marginTop = '100px';
        imgCaballo.style.display = 'flex';
        imgCaballo.style.flexDirection = 'column';
        imgCaballo.style.justifyContent = 'center';
    }
}
mostrarAnimal();

