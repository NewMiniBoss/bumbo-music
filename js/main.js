// modulo 1 e 2 -> pegando o elemento com DOM e fazendo função para ativar o som

/* 
let pom = document.querySelector('.tecla_pom').onclick = tocaSomPom;
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
*/

// modulo 3 ->

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;
function tocaSomPom() {
    document.querySelector('#tecla_som_pom').play();
}