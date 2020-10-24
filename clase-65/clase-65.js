/* 1) calcularPorcentaje(numero, porcentaje)
Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número
calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
*/

const calcularPorcentaje = (num, porc) => {
    let resultado = num * (porc / 100)
    return resultado
}

/* 2)restarPorcentaje(numero, porcentaje)
Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. 
Usar la función calcularPorcentaje para obtener el porcentaje a restar
restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
*/

const restarPorcentaje = (num, porc) => {
    let paraRestar = calcularPorcentaje(num, porc);
    let restar = num - paraRestar;
    return restar;
}

mostrar = restarPorcentaje(100, 15);
console.log(mostrar);

/* 3) burlarse(str)
Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por 
la letra i
burlarse('programar es dificil') // 'prigimir is dificil'
*/

const burlarse = (str) => {
    const vocales = ["a", "e", "o", "u"];
    for (let i = 0; str.length > i; i++) {
        if (vocales.includes(str[i])) {
            str = str.replace(str[i], 'i');
        }
    }
    return str;
}

const rta = burlarse('programar es dificil');
console.log(rta);

/*const burlarseConExpresionRegular = (str) => {
    let reemplazo = str.replace((/a|e|o|u/gi), function (i) {
        return "i";
    })
    return reemplazo;
}
*/

/* 4) aHackerSpeak(str)
Crear una función aHackerSpeak que tome como argumento un string str y devuelva el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes
reglas:
- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'
*/

const aHackerSpeak = (string) => {
    console.log('input: ' + string)
    string = string.replaceAll('i', '1');
    string = string.replaceAll('I', '1');
    string = string.replaceAll('a', '4');
    string = string.replaceAll('A', '4');
    string = string.replaceAll('e', '3');
    string = string.replaceAll('E', '3');
    string = string.replaceAll('s', '5');
    string = string.replaceAll('S', '5');
    string = string.replaceAll('o', '0');
    console.log('output: ' + string);
    return string;
}

const resultado1 = aHackerSpeak('javascript');
const resultado2 = aHackerSpeak('soy una hacker');
const resultado3 = aHackerSpeak('ADA LOVELACE');
console.log(resultado1 + ' - ' + resultado2 + ' - ' + resultado3);

