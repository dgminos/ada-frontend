const input = document.getElementById('input');
let valorIngresado = document.getElementById('valor-ingresado');
let valorUnidad = document.getElementById('valor-unidad');
const btn = document.getElementById('btn');
const texto = document.getElementById('texto');

input.value = 1;
const convertir = () => {

    let valor = input.value;
    let unidadIngresada = valorIngresado.value;
    let unidadAConvertir = valorUnidad.value;
    let conversion = valor * unidadIngresada / unidadAConvertir;
    texto.innerHTML = conversion;
}
valorUnidad.addEventListener('change', convertir);

btn.addEventListener('click', () => {
    let unidadIngresada = valorIngresado.value;
    let unidadAConvertir = valorUnidad.value;
    //e.preventDefault();
    valorIngresado.value = unidadAConvertir;
    valorUnidad.value = unidadIngresada;
    //valorIngresado.value = valorUnidad.value;
    //valorUnidad.value = valorIngresado.value;
    convertir();
})


/*function obtenerPropiedades() {
    var texto
    texto = "El numero de opciones del select: " + valorIngresado.length
    var indice = valorIngresado.selectedIndex
    texto += "nIndice de la opcion escogida: " + indice
    var valor = valorIngresado.options[indice].value
    texto += "nValor de la opcion escogida: " + valor
    var textoEscogido = valorIngresado.options[indice].text
    texto += "nTexto de la opcion escogida: " + textoEscogido
    console.log((texto))
}*/
