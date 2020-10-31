/*1) Crear una función puedeVerPelicula que tome como argumentos
un número edad y un booleano tieneAutorizacion, y devuelva true 
si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, 
o tiene autorización de sus padres.*/

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion) {
        return true;
    }
    else {
        return false;
    }
}

//console.log(puedeVerPelicula(12, false)); 
//console.log(puedeVerPelicula(12, true)); 
//console.log(puedeVerPelicula(16, false));
//console.log(puedeVerPelicula(18, true)); 


/*2)// Crear una función estaEnRango que tome como argumentos tres 
números, un valor, un número minimo y un número maximo, y devuelva 
true si el valor se encuentra entre los números minimo y maximo 
o false si no (si el valor es igual a uno de los extremos se 
considera que está dentro del rango)*/

const estaEnRango = (valor, numMin, numMax) => {
    if (valor <= numMax && valor >= numMin) {
        return true;
    }
    else {
        return false;
    }
}


//console.log(estaEnRango(3, 1, 10));  // true
//console.log(estaEnRango(1, 1, 10));  // true
//console.log(estaEnRango(10, 1, 10)); // true
//console.log(estaEnRango(12, 1, 10)); // false
//console.log(estaEnRango(-3, 1, 10));  // false


/*3) Crear una función puedeAvanzar que tome como argumento un string con el 
color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa 
un color válido, debe devolver un string que diga: Error: color de semáforo inválido*/

const puedeAvanzar = (str) => {
    switch (str) {
        case "verde":
            return true;
            break;
        case "amarillo":
        case "rojo":
            return false;
            break;
        default: return "Error: color de semáforo inválido"
    }
}

//console.log(puedeAvanzar('verde'));     // true
//console.log(puedeAvanzar('amarillo'));  // false
//console.log(puedeAvanzar('rojo'));      // false
//console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'


/* 4) Crear una función esVocal que tome como argumento un string letra y devuelva true si 
letra es una vocal o false si no lo es.*/

const esVocal = (letra) => {
    let vocales = ["a", "e", "i", "o", "u"]
    if (vocales.includes(letra)) {
        return true;
    }
    else {
        return false;
    }
}

/*console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true*/


/*5) Crear una función esConsonante que tome como argumento un string letra y devuelva true 
si letra es una consonante o false si no lo es*/

const esConsonante = (letra) => {
    let vocales = ["a", "e", "i", "o", "u"]
    if (vocales.includes(letra)) {
        return false;
    }
    else {
        return true;
    }
}

/*console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true*/

/* 6) Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y 
determine si es una hora válida del día o no*/

const esHoraValida = (str) => {
    const hora = str.split(":")
    //console.log(hora)
    return (hora[0] <= 23 && hora[1] <= 59)
}


/*console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true*/


// 7) Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y 
//devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó 
//los tests, no tiene multas impagas y pagó todos los impuestos

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true) {
        return true;
    }
    else {
        return false
    }
}

/*console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false*/


// 8) Crear una función puedeGraduarse que tome como argumentos dos números porcentajeDeClasesAsistidas y materiasAprobadas y un booleano tesisAprobada, y 
//devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de porcentajeDeClasesAsistidas o más, 50 materias 
//aprobadas o más y la tesis aprobada.

const puedeGraduarse = (porcentajeDeClasesAsistidas, materiasAprobadas, tesisAprobada) => {
    if (porcentajeDeClasesAsistidas >= 75 && materiasAprobadas >= 50 && tesisAprobada === true) {
        return true;
    }
    else {
        return false;
    }
}

/*console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false*/


/* 9) Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
par si el numero es par, o el string impar si el numero es impar*/

const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';

/*console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'*/


// 10) Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, 
//o el string negativo si el numero es negativo

const esPositivoONegativo = (num) => {
    if (Math.sign(num) === 1) {
        return 'positivo';
    }
    else {
        return 'negativo';
    }
}

/*console.log(esPositivoONegativo(3));  // 'positivo'
console.log(esPositivoONegativo(-5)); // 'negativo'
*/

//el ejercicio 11) es el mismo que el 3)

// 12) Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días 
//que tenga ese mes

const obtenerDiasMes = (mes) => {
    switch (mes) {
        case 'enero':
            numeroMes = 1;
            break;
        case 'febrero':
            numeroMes = 2;
            break;
        case 'marzo':
            numeroMes = 3;
            break;
        case 'abril':
            numeroMes = 4;
            break;
        case 'mayo':
            numeroMes = 5;
            break;
        case 'junio':
            numeroMes = 6;
            break;
        case 'julio':
            numeroMes = 7;
            break;
        case 'agosto':
            numeroMes = 8;
            break;
        case 'septiembre':
            numeroMes = 9;
            break;
        case 'octubre':
            numeroMes = 10;
            break;
        case 'noviembre':
            numeroMes = 11;
            break;
        case 'diciembre':
            numeroMes = 12;
    }


    const year = new Date().getFullYear(); // retorna el corriente año
    const dias = new Date(year, numeroMes, 0).getDate(); ////Day 0 is the last day in the previous month

    return dias; //retorna los dias del mes del corriente año
}

//console.log(obtenerDiasMes('diciembre')); // 31
//console.log(obtenerDiasMes('febrero'));   // 29


// 13) Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que 
//pertenece, siguientdo estas reglas:

// Baby boomer	    => 1949-1968
// Generación X	    => 1969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010

const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return 'Baby boomer';
    }
    else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return 'Generación X';
    }
    else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return 'Millennials';
    }
    else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
        return 'Generación Z';
    }
}

//console.log(obtenerGeneracion(1980));


// 14) Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, 
//con las siguientes reglas:
// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!

const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return '¡Está helando!'
    }
    else if (temperatura > 0 && temperatura < 15) {
        return '¡Hace frío!'
    }
    else if (temperatura > 15 && temperatura < 25) {
        return 'Está lindo'
    }
    else if (temperatura > 25 && temperatura < 30) {
        return 'Hace calor'
    }
    else if (temperatura <= 30) {
        return '¡Hace mucho calor!'
    }

}
//console.log(obtenerSensacion(30));


// 15) Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, 
//con las siguientes reglas:

// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido

const obtenerNota = (puntaje) => {
    if (puntaje < 6) {
        return 'Desaprobado'
    }
    else if (puntaje >= 6 && puntaje < 7) {
        return 'Regular'
    }
    else if (puntaje >= 7 && puntaje < 8) {
        return 'Bueno'
    }
    else if (puntaje >= 8 && puntaje < 10) {
        return 'Muy bueno'
    }
    else if (puntaje = 10) {
        return 'Excelente'
    }
    else if (puntaje < 0 || puntaje > 10) {
        return 'Puntaje inválido'
    }
}
console.log(obtenerNota(7.5));


// 16) Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y 
//dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

const jugarPiedraPapelTijera = (a, b) => {

    const piedra = 'piedra';
    const papel = 'papel';
    const tijera = 'tijera';

    if (a == b) {
        return '¡Empate!'
    }
    else if (a == piedra && b == papel) {
        return '¡Ganó papel!'
    }
    else if (a == piedra && b == tijera) {
        return '¡Ganó piedra!'
    }
    else if (a == papel && b == piedra) {
        return '¡Ganó papel!';
    }
    else if (a == papel && b == tijera) {
        return '¡Ganó tijera!';
    }
    else if (a == tijera && b == papel) {
        return '¡Ganó tijera!';
    }
    else if (a == tijera && b == piedra) {
        return '¡Ganó piedra!';
    }

}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'));  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'));  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'));  // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'));  // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'));  // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'));  // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'));  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'));  // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'));  // ¡Empate!


/* 17) Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando 
cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más 
dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e 
impedir seguir retirando.*/

let dineroInicial = 35000
const retirarDinero = (monto) => {
    //let monto = prompt("Ingrese el monto que desea retirar: ")
    if (monto <= dineroInicial) {
        return dineroInicial - monto;
    }
    else {
        return ("Monto insuficiente")
    }
}
//console.log(retirarDinero(40000));

/* 18) Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, 
felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando 
un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). 
Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
ALIMENTAR: +3 energía, +2 felicidad
JUGAR: +2 felicidad, -2 energía, -1 limpieza
DORMIR: +5 energía, +2 salud, -2 limpieza
VACUNAR: +5 salud, -6 felicidad
BAÑAR: +3 salud
RETAR: -3 felicidad
ACARICIAR: +4 felicidad
Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
*/
const obtenerrandom = () => {
    return Math.floor(Math.random() * 10);
}
//console.log(obtenerrandom());

let salud = obtenerrandom()
let felicidad = obtenerrandom()
let limpieza = obtenerrandom()
let energia = obtenerrandom()

const alimentar = () => {
    energia = energia + 3
    felicidad = felicidad + 2
}
const jugar = () => {
    felicidad = felicidad + 2
    energia = energia - 2
    limpieza = limpieza - 1
}
const dormir = () => {
    energia = energia + 5
    salud = salud + 2
    limpieza = limpieza - 2
}
const vacunar = () => {
    salud = salud + 5
    felicidad = felicidad - 6
}
const bañar = () => {
    salud = salud + 3
}
const retar = () => {
    felicidad = felicidad - 3
}
const acariciar = () => {
    felicidad = felicidad + 4
}

const tamagochi = (accion) => {
    console.log(`Mi Mascota = Salud: ${salud}, Felicidad: ${felicidad}, Limpieza: ${limpieza}, Energia: ${energia}`);
    switch (accion) {
        case "alimentar": alimentar();
            break;
        case "jugar": jugar();
            break;
        case "dormir": dormir();
            break;
        case "vacunar": vacunar();
            break;
        case "bañar": bañar();
            break;
        case "retar": retar();
            break;
        case "acariciar": acariciar();
            break;
    }
    return `Luego de ${accion} = Salud: ${salud}, Felicidad: ${felicidad}, Limpieza: ${limpieza}, Energia: ${energia}`

}

console.log(tamagochi("dormir"));





