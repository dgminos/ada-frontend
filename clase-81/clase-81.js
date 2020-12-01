//CONTINUACIÓN EJERCICIOS DOM.

// 10) Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), 
//y agregar esas canciones como ítems de la lista desordenada

/*const div = document.getElementById('lista-canciones');
const ul = document.createElement('ul');

const pedirCanciones = () => {
    const arrayCanciones = [];
    for (i = 0; i < 5; i++) {
        const cancion = prompt('Seleccione su canción');
        arrayCanciones.push(cancion);
    }
    for (let cancion of arrayCanciones) {
        const li = document.createElement('li');
        li.innerHTML = cancion;
        ul.appendChild(li);
        div.appendChild(ul);
    }
}

btn.addEventListener('click', pedirCanciones);*/

// 11) Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, 
//se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

/*const h1 = document.getElementById('valor');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

let numero = 0;
h1.innerHTML = numero;


btn1.addEventListener('click', () => {
    numero--;
    h1.innerHTML = numero;
});

btn2.addEventListener('click', () => {
    numero++;
    h1.innerHTML = numero;
});

btn3.addEventListener('click', () => {
    numero -= 5;
    h1.innerHTML = numero;
});

btn4.addEventListener('click', () => {
    numero += 5;
    h1.innerHTML = numero;
});

btn5.addEventListener('click', () => {
    numero -= 10;
    h1.innerHTML = numero;
});

btn6.addEventListener('click', () => {
    numero += 10;
    h1.innerHTML = numero;
});*/

// 12) Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en
// el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. 
//Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta 
//correcta con un color de fondo verde y los otros dos con un color de fondo rojo.

/*const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');

const respuestaCorrecta = () => {
    btnC.style.backgroundColor = 'green';
    const div = document.getElementById('correcta');
    const p = document.createElement('p');
    p.innerHTML = 'Correcto!';
    div.appendChild(p)
}

btnC.addEventListener('click', respuestaCorrecta);*/

/*const respuestaIncorrecta = () => {
    btnA.style.backgroundColor = 'red';
    btnB.style.backgroundColor = 'red';
    btnC.style.backgroundColor = 'green';
    const div = document.getElementById('correcta');
    const p = document.createElement('p');
    p.innerHTML = 'Incorrecto!';
    div.appendChild(p)
}

btnA.addEventListener('click', respuestaIncorrecta);
btnB.addEventListener('click', respuestaIncorrecta);*/


//VERSIÓN CON QUERYSELECTORALL

/*const botonesIncorrectos = document.querySelectorAll('.incorrecto');

const respuestaIncorrecta2 = () => {
    for (data of botonesIncorrectos) {
        data.style.backgroundColor = 'red';
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p)
        data.addEventListener('click', respuestaIncorrecta2);
    }
}*/

/*const botonesIncorrectos = document.querySelectorAll('.incorrecto');

const respuestaIncorrecta2 = () => {
    for (data of botonesIncorrectos) {
        data.style.backgroundColor = 'red';
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p)
        data.addEventListener('click', respuestaIncorrecta2);
    }
}*/

/*for (let i = 0; i < botonesIncorrectos.length; i++) {
    botonesIncorrectos[i].addEventListener('click', () => {
        for (element of botonesIncorrectos) {
            element.style.backgroundColor = 'red';
        }
        btnC.style.backgroundColor = 'green';
        const div = document.getElementById('correcta');
        const p = document.createElement('p');
        p.innerHTML = 'Incorrecto!';
        div.appendChild(p);

    })
}*/

// 13) Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su 
//color de fondo al mismo color de fondo que el del botón clickeado.

/*const colores = document.getElementById('colores');

const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnNaranja = document.getElementById('btnNaranja');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVioleta = document.getElementById('btnVioleta');

btnRojo.style.backgroundColor = 'red';
btnAzul.style.backgroundColor = 'blue';
btnVerde.style.backgroundColor = 'green';
btnNaranja.style.backgroundColor = 'orange';
btnAmarillo.style.backgroundColor = 'yellow';
btnVioleta.style.backgroundColor = 'purple';

colores.style.width = '200px';
colores.style.height = '200px';
colores.style.backgroundColor = '#c2c2c2';*/


/*btnRojo.addEventListener('click', () => {
    colores.style.backgroundColor = 'red';
});

btnAzul.addEventListener('click', () => {
    colores.style.backgroundColor = 'blue';
});
btnVerde.addEventListener('click', () => {
    colores.style.backgroundColor = 'green';
});
btnNaranja.addEventListener('click', () => {
    colores.style.backgroundColor = 'orange';
});
btnAmarillo.addEventListener('click', () => {
    colores.style.backgroundColor = 'yellow';
});
btnVioleta.addEventListener('click', () => {
    colores.style.backgroundColor = 'purple';
});*/


//SEGUNDA VERSIÓN(AGRUPANDO TODOS LOS BOTONES PONIENDOLE UNA CLASS CON EL MISMO NOMBRE A C/BOTÓN Y TRAYENDOLOS CON UN DOCUMENT.QUERYSELECTORALL)

/*const btnRojo = document.getElementById('btnRojo');
const btnAzul = document.getElementById('btnAzul');
const btnVerde = document.getElementById('btnVerde');
const btnNaranja = document.getElementById('btnNaranja');
const btnAmarillo = document.getElementById('btnAmarillo');
const btnVioleta = document.getElementById('btnVioleta');

btnRojo.style.backgroundColor = 'red';
btnAzul.style.backgroundColor = 'blue';
btnVerde.style.backgroundColor = 'green';
btnNaranja.style.backgroundColor = 'orange';
btnAmarillo.style.backgroundColor = 'yellow';
btnVioleta.style.backgroundColor = 'purple';

colores.style.width = '200px';
colores.style.height = '200px';
colores.style.backgroundColor = '#c2c2c2';

const colores = document.getElementById('colores');
const botones = document.querySelectorAll('.botones');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
        for (element of botones) {
            colores.style.backgroundColor = botones[i].style.backgroundColor;
        }
    });
}*/


//TERCERA VERSIÓN AGREGANDOLE EL UN DATA-COLOR COMO ATRIBUTO A C/BOTÓN EN EL HTML

/*const colores = document.getElementById('colores'); //obtengo el div
const botones = document.querySelectorAll('.botones'); //genera un array de nodos??? traigo todos los botones que están en el html
colores.style.width = '200px'; //agrego width al div
colores.style.height = '200px'; //agrego height al div
colores.style.backgroundColor = '#c2c2c2'; //agrego color de fondo al div

for (let i = 0; i < botones.length; i++) { //recorro array de nodos donde están los botones
    botones[i].style.backgroundColor = botones[i].getAttribute('data-color'); //a c/botón le igualo (guardo) su correspondiente color que está definido en html en el atributo "data-color"
    botones[i].addEventListener('click', () => { // a c/botón le paso la la función (.addEventListener)
        for (element of botones) { //recorro c/botón para...
            colores.style.backgroundColor = botones[i].style.backgroundColor; //igualo el color de fondo del div con el color de fondo del botón
        }
    });
}*/

//14) Crear un documento html que tenga:
// - un título h1 que diga: Mis emails
// - un título h2 que diga: Bandeja de entrada
// - una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris 
//(simulando que el email fue leído)


/*const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const ul = document.createElement('ul');

h1.innerHTML = 'Mis emails';
h2.innerHTML = 'Bandeja de entrada';

for (i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = 'Lorem ipsum dolor sit amet';
    li.style.fontWeight = '500';
    ul.appendChild(li)
    li.addEventListener('click', () => {
        li.style.fontWeight = '250';
        li.style.color = 'grey';
    })
}

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(ul);*/

//SEGUNDA VERSIÓN CREANDO ELEMENTOS DIRECTAMENTE EN EL HTML Y AGREGANDO ESTILOS DINÁMICAMENTE CON JS.

/*const liEmails = document.getElementsByClassName('email');

for (let i = 0; i < liEmails.length; i++) {
    liEmails[i].style.fontWeight = '500';
    liEmails[i].addEventListener('click', () => {
        liEmails[i].style.fontWeight = '250';
        liEmails[i].style.color = 'grey';
    });
}*/

// 15) Crear un documento html con
// - una barra de progreso (con un div dentro de otro)
// - un elemento de texto que indique el progreso (p. ej. 50%)
// - dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// - cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso 
//tiene que actualizarse
// - lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// - el incremento/decremento es del 10%


/*const btnIncremento = document.getElementById('incremento');
const btnDisminucion = document.getElementById('disminucion');
const h4 = document.getElementById('valor');

const barraProgreso = () => {

    let numero = 0;
    contenedor.style.width = "500px";
    contenedor.style.height = "30px";
    contenedor.style.background = "#c2c2c2";

    const incrementar = () => {
        if (numero < 100) {
            numero += 10;
            barra.style.width = `${numero}%`;
            barra.style.height = "30px";
            barra.style.background = "red";
            barra.innerHTML = `${numero}%`;
            h4.innerHTML = `La barra de progreso actualmente ocupa un ${numero}% del ancho de la barra contenedora`;
        }
    }
    btnIncremento.addEventListener('click', incrementar);

    const disminuir = () => {
        if (numero > 0) {
            numero -= 10;
            barra.style.width = `${numero}%`;
            barra.style.height = "30px";
            barra.innerHTML = `${numero}%`;
            h4.innerHTML = `La barra de progreso actualmente ocupa un ${numero}% del ancho de la barra contenedora`;
        }
    }
    btnDisminucion.addEventListener('click', disminuir);

    document.addEventListener("keydown", () => {
        if (event.keyCode === 37) { //37 es el keycode de la tecla flecha izquierda (disminuye progreso)
            disminuir();
        }
        if (event.keyCode === 39) {// 39 es el keycode tecla flecha derecha (incrementa progreso)
            incrementar();
        }
    });
}
barraProgreso();*/

// 16) Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamaños y 
//tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre 
//modo oscuro y modo claro:

// - modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// - modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna


/*const h1 = document.querySelector('h1');
const p = document.getElementById('texto');
const btn = document.getElementById("btn");

btn.innerHTML = '☀';

btn.addEventListener('click', () => {
    switch (btn.innerHTML) {
        case '🌙':
            btn.innerHTML = '☀';
            btn.style.backgroundColor = '#000'
            document.body.style.backgroundColor = '#000';
            h1.style.color = '#fff';
            p.style.color = '#fff';
            btn.style.color = '#fff';
            break;
        case '☀':
            btn.innerHTML = '🌙';
            document.body.style.backgroundColor = '#fff';
            h1.style.color = '#000';
            p.style.color = '#000';
            btn.style.color = '#000';
            break;
    }
});*/

// 17) Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px,
// por ejemplo:

// Scroll
// 0px - 500px	    => Color de fondo
// 501px - 1000px	=> red
// 1001px - 1500px  => green
// 1501px - 2000px  => blue

/*document.body.style.height = '2000px';
document.body.style.backgroundColor = 'pink';

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset + 'px');
    if (window.pageYOffset >= 0) {
        document.body.style.backgroundColor = 'pink';
    }
    if (window.pageYOffset > 500) {
        document.body.style.backgroundColor = 'red';
    }
    if (window.pageYOffset > 1000) {
        document.body.style.backgroundColor = 'green';
    }
    if (window.pageYOffset > 1500) {
        document.body.style.backgroundColor = 'blue';
    }
})*/


// 18) Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). 
//Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

//const imgChicas = document.getElementsByClassName('img');

/*function mostrarImagenGrande() {
    for (let i = 0; i < imgChicas.length; i++) {
        imgChicas[i].addEventListener('click', () => {
            document.getElementById('imgGrande').setAttribute('src', imgChicas[i].src);
        })
    }
}
mostrarImagenGrande();*/

/*function mostrarImagenGrandeMouse() {
    for (let i = 0; i < imgChicas.length; i++) {
        imgChicas[i].addEventListener('mouseover', () => {
            document.getElementById('imgGrande').setAttribute('src', imgChicas[i].src);
        })
    }
}
mostrarImagenGrandeMouse();*/

// 19) Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas,
//hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

//HECHO EN EL HTML CON LA MISMA FUNCIÓN DEL EJ.19)


// 20) Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 
//4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar 
//sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

const mostrarPeliculas = () => {

    const contenedor = document.querySelectorAll('.contenedor');// traigo todas las imagenes que están dentro de cada contenedor
    const btnTerror = document.getElementById('terror');
    const btnComedia = document.getElementById('comedia');
    const btnAccion = document.getElementById('accion');
    const btnTodas = document.getElementById('todas');
    const imgTerror = document.getElementById('imagenesTerror');
    const imgComedia = document.getElementById('imagenesComedia');
    const imgAccion = document.getElementById('imagenesAccion');

    for (let i = 0; i < contenedor.length; i++) {
        contenedor[i].style.display = 'none';
    }
    const mostrarTerror = () => {
        for (let i = 0; i < contenedor.length; i++) {
            imgTerror.style.display = 'block';
            contenedor[i].style.display = 'none';
        }
    }
    const mostrarComedia = () => {
        for (let i = 0; i < contenedor.length; i++) {
            imgComedia.style.display = 'block';
            contenedor[i].style.display = 'none';
        }
    }
    const mostrarAccion = () => {
        console.log('flag');
        imgAccion.style.display = 'block';
        for (let i = 0; i < contenedor.length; i++) {
            contenedor[i].style.display = 'none';
        }
    }
    const mostrarTodas = () => {
        for (let i = 0; i < contenedor.length; i++) {
            contenedor[i].style.display = 'block';
        }
    }

    btnTerror.addEventListener('click', mostrarTerror);
    btnComedia.addEventListener('click', mostrarComedia);
    btnAccion.addEventListener('click', mostrarAccion);
    btnTodas.addEventListener('click', mostrarTodas);
}
mostrarPeliculas();


// 21) En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
// - Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, 
//se tiene que mostrar "13".
// - El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
// - El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
// - El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

const agregarNumero = () => {

    const btnNumeros = document.querySelectorAll('.numeros');
    const btnReiniciar = document.getElementById('reiniciar');
    const btnBorrar = document.getElementById('borrar');
    const texto = document.getElementById('texto');



    btnNumeros.addEventListener('click', () => {
        texto.innerHTML += btnNumeros.value;

    })
}


// 22) Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una
//imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, 
//se debe eliminar la imagen seleccionada de dicho contenedor.


// 24) Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función 
//obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).


// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// - si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// - si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// - si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.

// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:
// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"

// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! 
//Presione un número.)

