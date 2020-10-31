// 1) Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, 
// y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número 
//ingresado. Ejemplo:

const multiplicar = (multiplicador, numeros) => {
    let resultado = [];
    numeros.forEach(numero => {
        resultado.push(numero * multiplicador);
    });
    return resultado;
};

console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
console.log(multiplicar(10, [2, 5, 77])); // [20, 50, 770]


// 2) Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array 
//con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

const filtrarPorLongitud = (longitud, arrayPalabras) => {
    let longitudMayor = [];
    for (i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i].length > longitud) {
            longitudMayor.push(arrayPalabras[i]);
        }
    }
    return longitudMayor;
}

//console.log(filtrarPorLongitud(4, ["dia", "remolacha", "azul", "sorpresa", "te", "verde",])); // ['remolacha', 'sorpresa', 'verde']
//filtra por palabras que tienen mas de 4 letras.


// 3) Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array 
//con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. 
//Por ejemplo, elefante recortada a 4 letras queda elef.

const recortar = (cantidadLetras, arrayDeStringsPalabras) => {
    palabrasRecortadas = [];
    for (i = 0; i < arrayDeStringsPalabras.length; i++) {
        let stringPalabra = arrayDeStringsPalabras[i];
        nuevaPalabra = '';
        for (j = 0; j < cantidadLetras; j++) {
            nuevaPalabra = nuevaPalabra + stringPalabra.charAt(j);

        }
        palabrasRecortadas.push(nuevaPalabra);
    }
    return palabrasRecortadas;
}

console.log(recortar(4, ["elefante", "dinosaurio", "chocolate", "avion", "america"])); // ['elef', 'dino' 'chocolate', 'avio', 'amer']
console.log(recortar(1, ["algoritmo", "bug", "compilador"])); // ['a', 'b', 'c']


// 4) Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores 
//en la misma posición, o false sino.

//arrayPredefinido = ["azul","verde","rojo","amarillo"];
//arrayUsuario = ["azul","rojo","blanco","negro"];

const sonIguales = (a, b) => {
    if (a.length != b.length) {
        return false;
    }
    else {
        for (i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])); // true
console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])); // false
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])); // false


/* 5) Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora 
respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la 
ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la 
jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const puntajesA = [3, 5, 2];
const puntajesB = [4, 6, 2];

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate
*/

const obtenerResultado = (juagadoraA, jugadoraB, puntajesA, puntajesB) => {

    if (puntajesA.length != puntajesB.length) {
        return false;
    }
    else {
        for (i = 0; i < puntajesA.length; i++) {
            if (puntajesA[i] > puntajesB[i]) {
                return juagadoraA;
            }
            else if (puntajesA[i] < puntajesB[i]) {
                return jugadoraB;
            }
            else if (puntajesA[i] = puntajesB[i]) {

                return 'Empate';
            }
        }

    }
}

// Resultado final: Gana Jugadora B
console.log(obtenerResultado("Ada", "Grace", [4, 4, 4], [1, 2, 3])); // Ada
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7],
    [4, 1, 2, 9])); // Empate
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])); // Grace