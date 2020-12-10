const input = document.getElementById('input-datos');
const boton = document.getElementById('btn');
const ul = document.getElementById('lista');

const agregarDato = () => {
    let dato = input.value;
    if (dato != '') {
        let li = document.createElement('li');
        li.innerHTML = dato;
        console.log(li)
        ul.appendChild(li);
        input.value = '';
    }
};

boton.addEventListener('click', agregarDato);