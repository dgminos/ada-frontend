// 1) Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

const obtenerNumeroMenor = (numeros) => {
    let min = numeros[0]; //El minimo por el momento es el primer elemento de nuestro array
    for (i = 1; i < numeros.length; i++) {  //empezamos desde la 2da posicion ya que el primero se deduce ser el menor hasta el momento 
        if (numeros[i] < min) {   //preguntamos si el proximo elemento de nuestro array (posicion i) es menor que el min
            (min = numeros[i])   // si se cumple la condicion reemplazamos el valor de min por el valor que se encuentra en nuestro array en la posicion i 
        }
    }
    //console.log(min); //una vez finalizado el recorrido y encontrado el menor valor lo mostramos por pantalla
}

// OTRA OPCION CON FOREACH (bucle que recorre TODO el Array sin necesidad de saber la longitud del mismo)
/*numeros.forEach(numero => {
    if (numero < min) {
        (min = numero)
    }

});
//console.log(min);*/

//console.log(obtenerNumeroMenor([5, 7, 99, 34, 2, 54, 12])); // 2

// 2) Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

const sumarNumeros = (numeros) => {
    let total = 0;
    for (let i of numeros)
        total += i;
    console.log(total);
}

//console.log(sumarNumeros([5, 7, 10, 12, 24])); // 58


// 3) Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false 
//dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

const numeros = [1, 2, 3, 4, 5];

const contiene = (numero, numeros) => {
    if (numero.includes(numeros)) {
        return true;
    }
    return false;
}
//console.log(contiene(numeros, 4));


// 4) Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, 
//es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const string = 'javascript'

const invertirCaso = (string) => {
    for (i = 0; i < string.length; i++) {
        let caracter = string.charAt(i);
        //console.log('analizando caracter ' + caracter + '...')
        //console.log('(caracter === string.charAt(i).toLowerCase) = ' + (caracter === string.charAt(i).toLowerCase))

        if (caracter === caracter.toLowerCase()) {
            console.log('caracter ' + caracter + ' es lowercase')
            nuevoCaracter = caracter.toUpperCase();
            string = string.replace(string.charAt(i), nuevoCaracter);
        }
        else if (caracter === caracter.toUpperCase()) {
            //console.log('caracter ' + caracter + ' es uppercase')
            nuevoCaracter = caracter.toLowerCase();
            string = string.replace(string.charAt(i), nuevoCaracter);
        }

    }
    return string;
}

//console.log(invertirCaso(string));


/* SOLUCION ALTERNATIVA CON OPERADOR TERNARIO:
const string = 'javascript'

const invertirCaso = (string) => {
    for (i = 0; i < string.length; i++) {
        let caracter = string.charAt(i);
        string = caracter === caracter.toLowerCase()
        ? string.replace (caracter,caracter.toUpperCase())
        : string.replace (caracter,caracter.toUpperCase());
    }
    return string;
};*/

// 5) Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados 
//por un lado y los gatos por otro. Ejemplo:


const perrosYGatos = "PGPGGPPPGPG";
//P = emoji de perro
//G = emoji de gato

let gatos = '';
let perros = '';

const separar = (string) => {
    let primerEmoji = string[0];


    for (let emoji of string) {
        if (emoji === primerEmoji) {
            perros += emoji
        }
        else {
            gatos += emoji
        }
    }
    return perros + ' - ' + gatos;
}

//console.log(perrosYGatos);
//console.log(separar(perrosYGatos));


// 6) Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. 
//Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

const gano = (tragaMonedas) => {
    for (let i = 0; i < 4; i++) {
        if (tragaMonedas[i] !== tragaMonedas[i + 1]) return false;
    }
    return true;
}

//console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])); // false
//console.log(gano(['💫', '💫', '💫', '💫', '💫'])); // true
//console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])); // true

// Aca pueden usar x, o, -



// 7) Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo,
// ya sea antes o después, o false sino. Ejemplo:


const estanJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo');//1 1 2 0
    const sam = personajes.indexOf('Sam');//0 -1 0 1
    //if (frodo === -1 || sam === -1) {
    //return false;
    //}

    if (frodo === (sam + 1) || frodo === (sam - 1)) {
        return true;
    }
    return false;
};

//RESOLUCIÓN ALTERNATIVA CON FOR
/*const estanJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo');//1 1 2 0
    const sam = personajes.indexOf('Sam');

    for (i = 0; i < personajes.length; i++) {
        if (frodo === -1 || sam === -1) {
            return false;
        }
        else if (frodo === (sam + 1) || frodo === (sam - 1)) {
            return true;
        }
        return false;
    }
}
*/
//console.log(personajes);
console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])); //true
console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])); //false
console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])); //false