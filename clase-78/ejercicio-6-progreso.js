// 6) (progreso) Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt 
//por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso 
//tiene que ocupar el 75% de la barra contenedora)

const modificarBarraProgreso = () => {
    const progreso = Number(prompt('Indique un porcentaje de progreso'));
    const div1 = document.createElement('div');
    const div2 = document.createElement('span');
    div1.appendChild(div2);
    console.log(div1)

    div2.style.height = '25px';
    div2.style.backgroundColor = 'blue';
    div2.style.display = 'inline-block';

    div1.style.width = '500px';
    div1.style.backgroundColor = 'red';

    document.body.appendChild(div1);

    for (i = 0; i < progreso; i++) {
        setTimeout(() => {
            console.log(i)
            div2.style.width = `${i}%`;
        }, 3000);
    }
    document.body.append(`La barra de progreso actualmente ocupa un ${progreso}% del ancho de la barra contenedora`);
}
modificarBarraProgreso();









