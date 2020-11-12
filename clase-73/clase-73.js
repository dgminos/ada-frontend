

/*const getpersonajes = () => {
    return [
      {
        id: 0,
        name: "Tobus Quickwhistle",
        thumbnail:
          "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age: 306,
        weight: 39.065952,
        height: 107.75835,
        hair_color: "Pink",
        professions: [
          "Metalworker",
          "Woodcarver",
          "Stonecarver",
          " Tinker",
          "Tailor",
          "Potter",
        ],
        friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
      },*/

// 14) Mostrar en pantalla el personaje mas enano de "Brastlewark"

const personajes = getInhabitants();
//console.log(personajes);

let elMasEnano = personajes[0];
personajes.forEach((inhabitant) => {

    if (elMasEnano.height > inhabitant.height) {
        elMasEnano = inhabitant
    }
});
console.log(elMasEnano);

let elMasEnano = personajes[0];
personajes.forEach((inhabitant) => {
    const { height: height1 } = elMasEnano;
    const { height: height2 } = inhabitant;
    if (height1 > height2) {
        elMasEnano = inhabitant
    }
});
console.log(elMasEnano);

//const { id, name, thumbnail, age, weight, height, hair_color, professions, friends } = elMasEnano;
//console.log(elMasEnano)

// 15) Crear una funcion que devuelva los personajes por ID en base a un rango numerico.

const personajePorId = (min, max) => {
    const resultado = personajes.filter(personaje => personaje.id >= min && personaje.id <= max);
    return resultado;
};

//console.log(personajePorId(10, 15));

// 16) Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

const habitantesPorColorDePelo = (color) => {
    const colorPelo = personajes.filter(personaje => personaje.hair_color === color)
    return colorPelo;
}
//console.log(habitantesPorColorDePelo("Pink"));

// 17) Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y un valor enviados como parámetros.

const showProperty = (prop, valor) => {
    let property = personajes.filter((inhabitant) => inhabitant[prop] == valor);

    return property;
}

/*console.table(showProperty('age', 306))
console.table(showProperty('weight', 39.065952))
console.table(showProperty('professions', "Metalworker"))*/

// 18) Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".

const habitante = (caracteristica) => {
    let resultado = {};

    switch (caracteristica) {
        case 'alto':
            resultado = getMax('height')
            return resultado;
        case 'bajo':
            resultado = getMin('height')
            return resultado;
        case 'anciano':
            resultado = getMax('age')
            return resultado;
        case 'joven':
            resultado = getMin('age')
            return resultado;
        case 'ancho':
            resultado = getMax('weight')
            return resultado;
        default:
            console.log("No existen valores")
    }
}

const getMax = (prop) => {
    let valorMax = personajes[0][prop]
    let inhabitat = personajes[0]

    for (i = 0; i < personajes.length; i++) {
        let value = personajes[i][prop]
        if (value > valorMax) {
            valorMax = value
            inhabitat = personajes[i]
        }
    }
    return inhabitat
}

const getMin = (prop) => {
    let valorMin = personajes[0][prop]
    let inhabitat = personajes[0]

    for (i = 0; i < personajes.length; i++) {
        let value = personajes[i][prop]
        if (valorMin > value) {
            valorMin = value
            inhabitat = personajes[i]
        }
    }
    return inhabitat
}

//console.table(habitante('alto'));
//console.table(habitante('joven'));
//console.table(habitante('ancho'));

// 19) Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

const showFriends = () => {
    let fizwood = personajes.filter(inhabitant => inhabitant.name === "Fizwood Mysttink")[0];  //trae el objeto y no el array porque 
    //le ponemos indice [0]  

    let friendsName = fizwood.friends;
    let friends = [];


    for (i = 0; i < friendsName.length; i++) {
        friends[i] = personajes.filter(inhabitant => inhabitant.name === friendsName[i])[0]
    }

    friends.unshift(fizwood);
    // console.table(friends)
}
//console.table(showFriends());

// 20) Listar a todos los personajes que tengan como profesión "Woodcarver".

const showprofession = (profesion) => {
    let woodcarver = personajes.filter((inhabitant) => inhabitant.professions == profesion);
    return woodcarver;
}

//console.table(showprofession("Woodcarver"));

// 21) Listar a todos los personajes que tengan como profesion un dato enviado como como parámetro.

const showprofession2 = (profesion) => {
    let profession = personajes.filter((inhabitant) => inhabitant.professions == profesion);
    return profession;
}

//console.log(showprofession2("mechanic"));

//22) // Crear una función que a partir de un string, devuelva todos los habitantes que contienen dicho string en su nombre.

const obtenerString = (string) => {
    let nombreString = personajes.filter((personaje) => personaje.name.includes(string));
    return nombreString;
}
//console.log(obtenerString("Midwig"));

// 23) Crear una función que devuelva un objeto con una propiedad con todas las profesiones que se desarrollan en "Brastlewark" y otra 
//con la cantidad de profesiones encontradas.

const obtenerProfesiones = () => {
    let profesiones = [];
    personajes.forEach(personaje => {
        personaje.professions.forEach(profession => {
            if (!profesiones.includes(profession)) {
                profesiones.push(profession);
            }
        });
    });
    //console.log("profesiones: " + profesiones);
    const objProfesiones = {
        profesiones: profesiones,
        cantidad: profesiones.length

    }
    return objProfesiones;
}

// {
//     profesiones: ['', ''], 
//     cant: number
// }

//console.log(obtenerProfesiones());


// 24) Crear una funcion que devuelva el habitante con mayor volumen de "Brastlewark". Calculamos el volumen multiplicando el alto 
//por el ancho.

const habitanteConMayorVolumen = () => {

    personajes.forEach(personaje => {
        let volumen = (personaje.height * personaje.weight);
        //console.log(volumen)
        personaje.volumen = volumen;
    });
    let personajeConMasVolumen = personajes[0];
    for (const personaje of personajes) {
        if (personajeConMasVolumen.volumen < personaje.volumen) {
            personajeConMasVolumen = personaje;
            //console.log(personajeConMasVolumen);
        }
    }
    //console.log(personajes);
    return personajeConMasVolumen;
}

//console.log(habitanteConMayorVolumen());
