//CONTINUACIÓN EJERCICIOS CALLBACKS CLASE 79.

// 7) Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

/*const numeros = [8, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;

const find = (array, callback) => {
    for (element of array) {
        return array.find(callback) //.find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada; de lo contrario, devuelve undefined.
    }
}

console.log(find(numeros, multiploDe10)); // 40*/


// 8) Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined // consultar si tiene que dar -1 cuando es falso ya que .findIndex retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. !!!

const numeros = [8, 2, 3, 4, 33, 5];
const multiploDe10 = (x) => x % 10 === 0;

const findIndex = (array, callback) => {
    for (element of array) {
        return array.findIndex(callback) ?? undefined
        //return array.findIndex(callback) || undefined
        //return array.findIndex(callback) === -1 ? true : undefined;

    }
}

console.log(findIndex(numeros, multiploDe10)); // 3 


// 9) Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez 
//agrega todos los elementos restantes a partir de dicho elemento inclusive)

/*const numeros = [40, 33, 50, 8, 2, 3, 20];
const multiploDe10 = (x) => x % 10 === 0;

const dropWhile = (array, callback) => {
    for (element of array) {
        if (!(callback(element))) {
            //console.log("primer elemento en dar false al pasarlo como argumento del callback: " + element)
            let droppedArray = array.slice(array.indexOf(element)) // creo un nuevo array desde el indice del primer elemento del input array que da false con el callback

            return droppedArray;
        }
    }
}

console.log(dropWhile(numeros, multiploDe10)); // [8, 2, 3, 20]*/


// 10) Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false

// (Inverso del dropWhile)
/*const numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = (x) => x % 10 === 0

const takeWhile = (array, callback) => {

    for (let element of array) {
        if (!(callback(element))) {
            let takeWhileArray = array.slice(0, array.indexOf(element)) // devuelvo un array con los elementos hasta el primer elemento que el callback devolvió false. Así funciona el .slice: ('0':desde el índice 0 del array, 'array.indexOf(element)':hasta el indeof del primer elemento que da false)
            return takeWhileArray;
        }
    }
}

console.log(takeWhile(numeros, multiploDe10)); // [40, 50]*/





