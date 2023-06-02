/*const nome = prompt("Digite seu nome")

const resultadoNaTela = document.getElementById("paragrafoResultado");

console.log( "O resultado é " + nome)*/

//PEGAR DADOS

function calculoDaConta() {
    

const pegaValorTotal = document.querySelector("#valorConta")
const pegaValorTaxa = document.querySelector("#valorTaxa")
const qntPessoas = document.querySelector('#quantidadePessoas')

const somaTotalDaConta = (parseInt(pegaValorTotal.value) + parseInt(pegaValorTaxa.value)) 
/ parseInt(qntPessoas.value)

document.getElementById("resultado").innerHTML = "O valor que cada um irá pagar é R$" + somaTotalDaConta.toFixed(2)

}

function formEvent(){
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        calculoDaConta()
 })

}



