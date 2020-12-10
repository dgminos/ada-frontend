const inputR = document.createElement('input');
const inputG = document.createElement('input');
const inputB = document.createElement('input');

inputR.setAttribute('type', 'number');
inputR.setAttribute('name', 'color');
inputR.setAttribute('placeholder', 'Ingrese un número entero entre 0 y 255 inclusive');
inputR.setAttribute('value', 255);
inputR.setAttribute('min', 0);
inputR.setAttribute('max', 255);

inputG.setAttribute('type', 'number');
inputG.setAttribute('name', 'color');
inputG.setAttribute('placeholder', 'Ingrese un número entero entre 0 y 255 inclusive');
inputG.setAttribute('value', 255);
inputG.setAttribute('min', 0);
inputG.setAttribute('max', 255);

inputB.setAttribute('type', 'number');
inputB.setAttribute('name', 'color');
inputB.setAttribute('placeholder', 'Ingrese un número entero entre 0 y 255 inclusive');
inputB.setAttribute('value', 255);
inputB.setAttribute('min', 0);
inputB.setAttribute('max', 255);

document.body.appendChild(inputR);
document.body.appendChild(inputG);
document.body.appendChild(inputB);

const colorearFondo = () => {
    let r = Number(inputR.value)
    let g = Number(inputG.value)
    let b = Number(inputB.value)
    //console.log("coloreando con valores: " + r + ", " + g + ", " + b);
    let rgb = 'rgb(' + r + "," + g + "," + b + ")";
    //console.log("rgb call: " + rgb)
    document.body.style.backgroundColor = rgb;
}
colorearFondo();
inputR.addEventListener('input', colorearFondo);
inputG.addEventListener('input', colorearFondo);
inputB.addEventListener('input', colorearFondo);

