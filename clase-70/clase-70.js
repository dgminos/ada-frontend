
// - Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// - Mostrar en consola el objeto sobreMi

// 1- Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// - Mostrar en consola el objeto sobreMi

const sobreMi = {
    nombre: "Maria",
    apellido: "Lopez",
    edad: "30"
}
//console.log(sobreMi);

//2 - Crear una variable llamada user, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: fullname, email, age
// - Mostrar en consola el objeto user
// - Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre 
//es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = {
    fullname: "Maria Lopez",
    email: "marialopez@gmail.com",
    age: 30,
}
//console.log("Hola mi nombre es: " + user.fullname + " y tengo " + user.age + " años.");
//console.log(`Hola mi nombre es: ${user.fullname} y tengo ${user.age} años.`);
//console.log(user);

// 3- Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion,
// a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, 
//y duracion (en segundos, ya que en el objeto original song está en milisegundos)

var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
};

var cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration / 1000,
    album: song.album,

};

//console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

//4- Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
var Ada = {
    id: 001,
    nombre: "Ada",
    email: "ada@terra.com",
    telefono: "1029384756"
}
var Grace = {
    id: 002,
    nombre: "Grace",
    email: "grace@terra.com",
    telefono: "1029384789"
}
var Hedy = {
    id: 003,
    nombre: "Hedy",
    email: "hedy@terra.com",
    telefono: "1029384745"
}

var Radia = {
    id: 004,
    nombre: "Radia",
    email: "radia@terra.com",
    telefono: "5689384745"
}
var Sheryl = {
    id: 005,
    nombre: "Sheryl",
    email: "sheryl@terra.com",
    telefono: "8839384745"
}


// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
//console.log(Ada.nombre);

// 2. El ID de Grace
//console.log(Grace.id);

// 3. El email de Hedy
//console.log(Hedy.email);

// 4. El ID y nombre de Radia
//console.log(${Radia.id}  ${Radia.nombre});

// 5. El telefono de Sheryl
//console.log(Sheryl.telefono);

//5- Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.
// El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
};

datos.telefono = "0192837465";
//datos.edad = 29;
datos.edad = parseInt(datos.edad);

// finalmente, mostramos los datos
//console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }


//6- Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
};

if (datos.programa === true) {
    datos.lenguajeFavorito = "JavaScript";
}

// finalmente, mostramos los datos
//console.log(datos);

// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }

// 7- Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y 
//programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
};

if (datos.programa === true) {
    datos.lenguajesFavoritos = ["Java", "JavaScript"]
}

// aca mostrar la frase
//console.log(`Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajesFavoritos}`);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"



//8- Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje
// "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

var disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};

var nombreDisco = disco.nombre;
var anioDisco = disco.anioLanzamiento;
var nombreBanda = disco.banda.nombre;

//console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

// 9) Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

var userLinkedin = {
    id: 123456789,
    name: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion
userLinkedin.skills.push('Javascript');

// despues de la solucion
//console.log(userLinkedin);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }

// 10) Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, 
//alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

const size = { width: 2, length: 5, height: 1 };

const getBoxVolume = () => {
    volume = size.width * size.length * size.height;
    return volume;
}
//console.log(getBoxVolume(size)); // returns 10


// 11) Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// Cada objeto tiene las propiedades nombre, temporada y foto.
// Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

const ganadoras = [
    {
        nombre: "Bebe Zahara Benet",
        temporada: "1",
        foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
    },
    {
        nombre: "Tyra Sanchez",
        temporada: "2",
        foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
    },
    {
        nombre: "Raja",
        temporada: "3",
        foto: "http://www.nokeynoshade.party/images/raja.jpg",
    },
    {
        nombre: "Sharon Needles",
        temporada: "4",
        foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
    },
    {
        nombre: "Jinkx Monsoon",
        temporada: "5",
        foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
    },
    {
        nombre: "Bianca Del Rio",
        temporada: "6",
        foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
    },
];

/*for (ganadora of ganadoras) {
    console.log(`${ganadora.nombre} ganó la temporada ${ganadora.temporada}`);
}*/

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6


// 12) Tenemos un array de objetos, que representa un listado de bandas
// Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
// Mostrar en consola cada banda del array, con la siguiente lógica:
// Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
// Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

var bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];
/*
bandas.forEach(element => {
    if (element.activa === true) {
        console.log(`${element.nombre} está activa desde desde el año ${element.fundacion}`)

    } else if (element.activa === false) {
        console.log(`${element.nombre} no está activa`)
    }

}
);*/
/* RESOLUCIÓN CON FOR OF??
for (banda of bandas) {

    if (`${banda.activa} === true`) {
        console.log(`${banda.nombre} está activa desde desde el año ${banda.fundacion}`)
    }
    else if (`${banda.activa} === false`) {
        console.log(`${banda.nombre} no está activa`)
    }
}
*/


///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990


// 13) Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
// Queremos mostrar:
// La duración total del disco (suma de la duración de cada canción)
// La duración promedio por canción (un promedio entre todas las duraciones)

const banda = {
    name: "Led Zeppelin",
    year: 1968,
    active: false,
    thumbnail:
        "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    albums: [
        {
            name: "Led Zeppelin",
            year: 1969,
            songs: ["Good Times, Bad Times", "Communication Breakdown"],
            duration: 2691,
        },
        {
            name: "Led Zeppelin II",
            year: 1969,
            songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
            duration: 2502,
        },
        {
            name: "Led Zeppelin III",
            year: 1970,
            songs: ["Immigrant Song"],
            duration: 2489,
        },
        {
            name: "Led Zeppelin IV",
            year: 1971,
            songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
            duration: 2559,
        },
    ],
};

// completa el codigo para lograr el resultado esperado

anioLanzamiento = banda.year;
cantidadMiembros = banda.members.length;
miembros = banda.members;
cantidadDiscos = banda.albums.length;

let albums = banda.albums;
let duracionTotal = 0;
let cantidadTotalCanciones = 0;


albums.forEach(element => {
    cantidadTotalCanciones = cantidadTotalCanciones + element.songs.length;
    duracionTotal = duracionTotal + element.duration;

});

let promedioDuracionAlbum = duracionTotal / banda.albums.length;
const duracionPromedioCancion = duracionTotal / cantidadTotalCanciones;

///// RESULTADO
console.log("Led Zeppelin se fundó en el año " + anioLanzamiento + '.');
console.log("Tiene " + cantidadMiembros + " miembros: " + miembros + '.');
console.log("Tiene en total " + cantidadDiscos + " discos.");
console.log("Tiene un total de " + cantidadTotalCanciones + " canciones entre todos los discos.");
console.log("En promedio, cada album dura " + promedioDuracionAlbum + " segundos.");
console.log("En promedio, cada canción dura " + duracionPromedioCancion + " segundos.");

// ESPERADO
  // Led Zeppelin se fundó en el año 1968
  // Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
  // Tiene en total 4 discos
  // Tiene en total 9 canciones entre todos los discos.
  // En promedio, cada canción dura 1137.888888888889 segundos