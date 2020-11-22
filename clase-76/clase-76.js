
// 1) (saludo) Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo 
//con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por 
//defecto.

const saludo = () => {
    let name = prompt('¿Cuál es su nombre?');
    document.querySelector('.saludo').innerHTML += `Hola, ${name}`;
}
//saludo();

// 2) (color) Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado 
//ponga el color de fondo del body con dicho color.

function pedirColor() {
    let color = prompt('¿Qué color quisiera ver en el fondo de esta página? Escriba el color en hexadecimal. Por ejemplo, #92b9b9');
    let backgroundHex = document.querySelector('.fondo');
    backgroundHex.style.backgroundColor = color;
}
//pedirColor();

// 3) (rgb) Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema 
//rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde
// y azul.

const pedirColorRgb = () => {
    let colors = {};
    for (let i = 0; i < 3; i++) {
        colors[i] = prompt(`Ingrese el valor ${i + 1} que sea un número del 0 al 255 inclusive`);
    }
    document.body.style = `background-color: rgb(${colors[0]},${colors[1]},${colors[2]})`;
}
//pedirColorRgb();

// 4) (imagen) Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles 
//chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. 
//Por ejemplo:
// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px

const seleccionarTamanioDeImagen = () => {

    let tamanio = prompt('Seleccione el tamaño de su imagen en píxeles. Si desea una imagen chica, ingrese: 200px. Si desea una imagen mediana, ingrese: 500px. Si desea una imagen grande, ingrese: 800px');
    const imagen = document.getElementById('imagen');
    imagen.style.width = tamanio
}
//seleccionarTamanioDeImagen();