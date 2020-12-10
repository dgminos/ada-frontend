const input = document.getElementById('input-imagen');
const btn = document.getElementById('btn');
const contenedor = document.getElementById('contenedor');

const agregarImagen = () => {
    let url = input.value;
    if (url != '') {
        let imagen = document.createElement('img');
        imagen.setAttribute('src', url);
        imagen.style.display = 'inline-block';
        imagen.style.width = '200px';
        imagen.style.height = '200px';
        imagen.style.margin = '10px';
        contenedor.appendChild(imagen);
        //imagen.innerHTML = img;
        //document.getElementById('div-img1').appendchild(img);
        input.value = '';
        imagen.addEventListener('click', () => {
            contenedor.removeChild(imagen);
        })
    }
}

btn.addEventListener('click', agregarImagen);