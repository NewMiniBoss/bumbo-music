function tocaSom() {
    document.querySelector('#tecla_som_pom').play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].onclick = tocaSomPom;
}