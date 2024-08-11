// let é uma variável que pode ser reatribuída e redeclarada
// const é uma variável que não pode ser reatribuída, mas pode ser redeclarada
// var é uma variável que pode ser reatribuída e redeclarada (não use)
//variável nomeDoObjeto = { chave: valor}

let listaDeCompras = []

const from = document.getElementById("form-itens")
const input = document.getElementById("receber-item")

// Criando interatividade na página a partir do click no botão
//eventlistener é um método que é chamado quando um evento é disparado

form.addEventListener("subimit", function (evento){
    evento.preventDefault()
})