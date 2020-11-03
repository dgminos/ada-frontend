// 1) Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora 
//respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe 
//devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada 
//array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

//const jugadasA = ['piedra', 'piedra', 'tijera'];
//const jugadasB = ['papel', 'tijera', 'tijera'];

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate

/*const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
    let puntosA = 0;
    let puntosB = 0;

    if (jugadasA.length != jugadasB.length) {
        return false;
    }
    for (i = 0; i < jugadasA.length; i++) {
        if (jugadasA[i] == jugadasB[i]) {
            puntosA++
            puntosB++;
        }
        const ganoJugador1 =
            (jugadasA[i] == "piedra" && jugadasB[i] == "tijera") ||
            (jugadasA[i] == "tijera" && jugadasB[i] == "papel") ||
            (jugadasA[i] == "papel" && jugadasB[i] == "piedra");

        if (ganoJugador1) {
            puntosA++;
        } else {
            puntosB++;
        }

        /*if (jugadasA[i] === piedra && jugadasB[i] === papel) {
            puntosB++
        }
        else if (jugadasA[i] === piedra && jugadasB[i] === tijera) {
            puntosA++
        }
        else if (jugadasA[i] === tijera && jugadasB[i] === piedra) {
            puntosB++;
        }
        else if (jugadasA[i] === tijera && jugadasB[i] === papel) {
            puntosA++
        }
        else if (jugadasA[i] === papel && jugadasB[i] === tijera) {
            puntosB++
        }
        else if (jugadasA[i] === papel && jugadasB[i] === piedra) {
            puntosA++
    
        }*/
/*
console.log(puntosA, puntosB)
}

if (puntosA > puntosB) {
return jugadoraA;
}
else if (puntosA < puntosB) {
return jugadoraB;
}
else {
return 'Empate';
}
}
/*
//RESOLUCIÓN ALTERNATIVA:

/*const comprobarGanador = (jugadaJugador1, jugadaJugador2) => {
if (jugadaJugador1 == jugadaJugador2) {
return;
}
const ganoJugador1 =
(jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera") ||
(jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") ||
(jugadaJugador1 == "papel" && jugadaJugador2 == "piedra");

if (ganoJugador1) {
puntaje1++;
} else {
puntaje2++;
}
};*/

//console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra'])); // Grace
//console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel'])); // Empate
//console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['piedra', 'papel', 'papel', 'piedra', 'tijera'], ['papel', 'piedra', 'tijera', 'tijera', 'papel'])); // Ada


//2) Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice 
//del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
/*
const obtenerIndice = (valor, array) => {

    for (i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === valor) {
            return i;
        }
    }
    return -1;
}
*/
const obtenerIndice = (valor, array) => {
    return array.indexOf(valor);
}

//console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // 2
//console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // -1


// 3) Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido 
//cantidad de veces.

const repetir = (valor, cantidad) => {
    array = new Array(cantidad);
    for (i = 0; i < array.length; i++) {
        array[i] = valor;
    }
    return array;
}

//console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
//console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
//console.log(repetir("html", 0)); // []


// 4) Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando 
//desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero) => {
    let total = 0;
    for (i = 1; i <= numero; i = i + 2) {
        if (i % 2 === 1) {
            total += i
        }
    }
    return total;
}

//console.log(sumarImparesHasta(5)); // 9 (1 + 3 + 5 = 9)
//console.log(sumarImparesHasta(13)); // 49
//console.log(sumarImparesHasta(47)); // 576


// 5) Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem 
//sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

const crearCuentaRegresiva = (numeroInicial) => {
    cuentaRegresiva = [];
    for (i = numeroInicial; i >= 0; i--) {
        cuentaRegresiva.push(i);
    }
    return cuentaRegresiva;
}

//console.log(crearCuentaRegresiva(3)); // [3, 2, 1, 0]
//console.log(crearCuentaRegresiva(5)); // [5, 4, 3, 2, 1, 0]


// 6) Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.

const invertir = (array) => {
    arrayInvertido = array.reverse()

    return arrayInvertido;
}

//console.log(invertir([1, 2, 3])); // [3, 2, 1]
//console.log(invertir([5, 7, 99, 34, 54, 2, 12])); // [12, 2, 54, 34, 99, 7, 5]


// 7) Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array 
//pero sin valores duplicados.

//RESOLUCIÓN CON .FILTER E .INDEXOF:

/*const removerDuplicados = (array) => {
    let resultado = array.filter((item, index) => { //retorna un nuevo arreglo con los elementos que cumplan la condición implementada por la 
        //función utilizada como argumento. filter itera sobre los elementos del arreglo y aplica la función argumento en cada item retornando 
        //un valor _boolean, si el elemento pasa la condición se retorna true indicando que este será agregado al nuevo arreglo.
        return array.indexOf(item) === index; //Para este caso de remover elementos duplicados utilizamos como método auxiliar la 
        //función Array.indexOf. Este método retorna el primer indice del arreglo en donde se encuentre un elemento dado.
        //En este caso, podemos identificar un duplicado cuando el indice no es igual al resultado de indexOf
        //array.indexOf(item) === index ,retornará siempre la primera ocurrencia del item.
    })
    return resultado;
}*/

//RESOLUCIÓN CON REDUCE:

/*const removerDuplicados = (array) => {
    const resultado = array.reduce((acc, item) => { // ejecuta una función sobre cada elemento del arreglo y retorna un valor como un único 
        //resultado. Básicamente permite transformar un arreglo a otro tipo de valor.recibe dos parámetros, una función , llamada reductora, 
        //que tiene a lo menos dos argumentos: el acumulador y el item actual de la iteración y como segundo parámetro que indica el valor 
        //inicial en este caso un arreglo vacío
        if (!acc.includes(item)) {
            acc.push(item); //En este caso la función utilizada simplemente revisa si el item actual se encuentra dentro del resultado 
            //identificado por la variable acc, de no estarlo, simplemente agrega el valor al acumulador
        }
        return acc;
    }, [])
    return resultado;
}*/

//RESOLUCIÓN CON SET:

const removerDuplicados = (array) => {
    const dataArr = new Set(array); //El objeto global Set es una estructura de datos, una colección de valores que permite sólo almacenar valores
    // únicos de cualquier tipo, incluso valores primitivos o referencias a objetos.Es posible iterar sobre los elementos en el orden de inserción.
    //El caso de utilizar Set para remover duplicados creamos un nuevo Set basado en el arreglo original utilizando new Set.

    let resultado = [...dataArr]; //convierte el nuevo Set a un arreglo nuevamente utilizando la sintaxis spread.
    return resultado;
}

//RESOLUCIÓN CON FOREACH????
//console.log(removerDuplicados([1, 1, 1])); // [1]
//console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
//console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]


// 8) Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva un string donde cada 
//letra de palabra esté repetida cantidad de veces.

const repetirLetras = (palabra, cantidad) => {
    let resultado = '';
    //let caracter = '';
    //console.log("palabra: " + palabra)
    for (i = 0; i < palabra.length; i++) {
        //caracter = caracter + palabra.charAt(i);
        nuevoCaracter = '';
        //console.log("multiplicando caracter " + caracter + " " + cantidad + " veces.")
        for (j = 0; j < cantidad; j++) {
            nuevoCaracter = nuevoCaracter + palabra.charAt(i);
        }
        //console.log(nuevoCaracter)
        resultado = resultado + nuevoCaracter;
    }
    //console.log("resultado: " + resultado);
    return resultado;
}

//console.log(repetirLetras("hola", 2)); // 'hhoollaa'
//console.log(repetirLetras("ada", 3)); // 'aaadddaaa'
//console.log(repetirLetras("ah!", 5)); // 'aaaaahhhhh!!!!!'
//console.log(repetirLetras("basta", 1)); // 'basta'


// 9) Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada 
//(con la primera letra mayúscula). Dejar las demás letras como están.


const capitalizarPalabras = (string) => {

    const palabraSeparada = string.split(' '); //divide el string en un array de strings mediante la separación del string
    //en subtrings
    for (i = 0; i < palabraSeparada.length; i++) { //recorro la variable palabraSeparada
        palabraSeparada[i] = palabraSeparada[i].charAt(0).toUpperCase() + //pongo el primer elemento del string (la primer letra) en mayúsucula
            palabraSeparada[i].substring(1); // trae el resto el string que esta en minúscula y lo concateno a la primer letra en mayúscula
    }
    return palabraSeparada.join(' '); // retorna la concatenaciòn de  la palabra spliteada con la primer letra de cada palabra que se puso 
    //en mayúscula y las une con un espacio vacío
}
//console.log(capitalizarPalabras("Esto es un título")); // 'Esto Es Un Título'
//console.log(capitalizarPalabras("había una vez")); // 'Había Una Vez'
//console.log(capitalizarPalabras("OMG"));


// 10) Crear una función sumarSeccion que tome como argumento un array de números enteros 'array', un número entero 'comienzo' y un número entero 
//'cantidad', y que devuelva la suma de 'cantidad' de números de 'array' empezando a contar desde el ítem con índice 'comienzo'.

const sumarSeccion = (array, comienzo, cantidad) => {
    total = 0;
    final = comienzo + cantidad;
    nuevoArray = array.slice(comienzo, final); //.slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio 
    //hasta fin (fin no incluido). El array original no se modificará y tiene 2 parámetros: 'inicio'(Índice donde empieza la extracción. El primer
    // elemento corresponde con el índice  0 y 'fin'(Índice  que marca el final de la extracción. slice extrae hasta, pero sin incluir el final.)

    nuevoArray.forEach(element => {
        total = total + element;
    });
    return total;
}

//console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)); // 8 (2 + 2 + 4 = 8)
//console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)); // 37 (4 + 3 + 10 + 20 = 37)
//console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1)); // 10


// 11) Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente 
//subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.

const esSubconjunto = (subconjunto, conjunto) => {
    return subconjunto.every(i => conjunto.includes(i)); //.includes determina si el array conjunto incluye un determinado elemento,en este caso si conjunto
    //(segundo array) incluye cada (every) elemento de subconjunto(primer array), ya que .every determina si todos los elementos en el array 
    //satisfacen una condición.
    //ambos métodos devuelven true o false según corresponda.La función flecha implícitamente retorna true o false.
}

//console.log(esSubconjunto([1], [1, 2, 3])); // true
//console.log(esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])); // true
//console.log(esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])); // true
//console.log(esSubconjunto([1, 2, 3], [1, 2])); // false
//console.log(esSubconjunto([1], [2, 3, 4])); // false


// 12) Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un mensaje saludando a la persona 
//con dicho nombre. La función prompt devuelve el texto ingresado por el usuario.

/*const pedirNombre = () => {

    const nombre = prompt('Ingrese su nombre');

    if (nombre === '' || nombre === null) {
        alert('No ha ingresado ningún nombre');
    }
    confirm('Ingrese su nombre');
    if (nombre === false) {
        return alert('Ha seleccionado salir de la página')
    }
    if (nombre === null || nombre === '') {
        prompt('Ingrese su nombre')
    }
    let pregunta = confirm('Nombre ingresado: ' + nombre + ' ' + '¿Es correcto?');
    if (nombre !== null && pregunta == true) {
        alert('Hola ' + nombre + '!' + ' ' + 'Bienvenide a la web!');
    }
    else {
        prompt('Ingrese su nombre');
    }
}
*/

// 13) Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir 
//pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist 
//con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de 
//canciones.

const crearPlaylist = () => {
    let nombrePlaylist = prompt('Ingrese el nombre de la playlist')
    let cantidadCanciones = Number(prompt('Cuantas canciones desea agregar?'))

    let mensajeAMostrar = `Playlist: ${nombrePlaylist}.
    Canciones: `

    let cancionesRestantes = cantidadCanciones

    for (let i = 0; i < cantidadCanciones; i++) {
        let nombreCancion = prompt(`Quedan ${cancionesRestantes} canciones restantes. 
    Ingrese el nombre de la canción`)

        mensajeAMostrar += nombreCancion + ' ';
        cancionesRestantes--
        alert(mensajeAMostrar)
    }

    alert(mensajeAMostrar)
}

