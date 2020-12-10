
const textArea = document.getElementById('textarea');
const span = document.getElementById('span');
const btn = document.getElementById('btn');

const contarCaracteres = () => {
    let textoIngresado = textarea.value;
    let contador = 240 - textoIngresado.length;
    span.textContent = contador + ' ' + 'caracteres restantes';

    if (textoIngresado.length > 0 && textoIngresado.length <= 240) {
        textArea.style.borderColor = 'green';
        btn.addEventListener('click', () => {
            span.innerHTML = 'Comentario enviado.';
            textArea.value = '';
        })
    }
    else {
        textArea.style.borderColor = 'red';
    }
}

textarea.addEventListener('keydown', contarCaracteres);

