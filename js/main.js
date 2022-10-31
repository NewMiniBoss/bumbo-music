function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const teclas = listaDeTeclas[i];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }
}

/* EXEMPLO 
function tocaSomPom () {
    document.querySelector('#tecla_som_pom').play();
}
const listaDoPom = document.querySelector('.tecla_pom');
listaDoPom.onclick = tocaSomPom;
 */