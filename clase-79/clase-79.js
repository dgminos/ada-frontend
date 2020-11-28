// 1) Crear una función crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el
//nombre de un usuario, y luego ejecutar el callback.

/*let user = prompt('Ingrese su nombre de usuario');
const confirmarCreacion = () => alert(`${user} . Usuario creado!`); // callback

const crearUsuario = (callback) => {
    if (user != '') {
        callback();
    } else {
        alert('Debe ingresar un nombre!');
    }
}

//crearUsuario(confirmarCreacion);*/
// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!


// 2) Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, 
//haga alguna validación, y devuelva true o false si pasa dicha validación o no. La función validarUsuario, al ejecutarse, debe pedir mediante un prompt 
//ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el 
//usuario ingresado es correcto o no.

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres*
// - que no tenga números
// - que tenga mayúsculas

/*let usuario = prompt('Ingrese un nombre de usuario');

const validarUsuario = (callback) => {

    if (callback(usuario)) {
        alert('Usuario creado!');
    } else {
        alert('El nombre de usuario debe ser menor a 10 caracteres.');
    }
}

const validador = (string) => {
    if (string.length < 10) {
        return true;
    } else {
        return false;
    }
}

validarUsuario(validador);*/


// 3) Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.

// Ejemplo:
// const numeros = [1, 2, 3]
//const duplicar = (x) => x * 2
//map(numeros, duplicar) // [2, 4, 6]

/*const numeros = [1, 2, 3];
const duplicar = (x) => x * 2; //callback

const map = (array, callback) => {
    let numerosDuplicados = [];
    for (let element of array) {
        numerosDuplicados.push(callback(element));
    }
    return numerosDuplicados;
}

let resultado = map(numeros, duplicar);
console.log(resultado);
// [2, 4, 6]*/


// 4) Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".

// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]

/*const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0; //callback

const filter = (array, callback) => {
    let resultado = [];
    for (let element of array) {
        if (callback(element) === true) {
            resultado.push(element);
        }
    }
    return resultado;
}

let arrayFinal = filter(numeros, multiploDe10)
console.log(arrayFinal);*/
// [10, 40, 50]


// 5) Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true

// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0; //callback
const esPositivo = (x) => x >= 0; //callback

const every = (array, callback) => {

    for (let element of array) {
        if (!callback(element)) return false;
    }
    return true;

    //return array.every(callback) //.every devuelve true si la función de devolución de callback devuelve un valor de truthy para cada elemento del array, de lo contrario, false. (TRUTHY:todos los valores son verdaderos a menos que se definan como falso. Es decir, excepto false, 0, "", null, undefined, y NaN)

}

console.log(every(numeros, multiploDe10)); // false
console.log(every(numeros, esPositivo)); // true*/


// 6) Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true

// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

/*const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0 //callback
const esPositivo = (x) => x >= 0 //callback

const some = (array, callback) => {
    for (let element of array) {
        return array.some(callback)
    }
}

console.log(some(numeros, multiploDe10)); // true
console.log(some(numeros, esPositivo)); // true*/