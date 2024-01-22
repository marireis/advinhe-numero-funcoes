
let numeroSecreto = gerarNumAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute= document.querySelector('input').value
    console.log(chute == numeroSecreto);
    console.log(`${numeroSecreto}`);
    saudacao();
}

function gerarNumAleatorio(){
   return parseInt(Math.random() * 10 + 1)
}
