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
        case "verde": return true;
            break;
        case "amarillo":
        case "rojo": return false;
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


/* 5) Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
par si el numero es par, o el string impar si el numero es impar*/

const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';

/*console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'*/

/* 6) Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando 
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

/* 7) Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, 
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
    console.log(`Mascota = Salud: ${salud}, Felicidad: ${felicidad}, Limpieza: ${limpieza}, Energia: ${energia}`);
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

/* 8) Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y 
determine si es una hora válida del día o no*/

const esHoraValida = (str) => {
    const hora = str.split(":")
    //console.log(hora)
    return (hora[0] <= 23 && hora[1] <= 59)
}


console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true



