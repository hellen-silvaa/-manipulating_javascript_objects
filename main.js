// let é uma variável que pode ser reatribuída e redeclarada
// const é uma variável que não pode ser reatribuída, mas pode ser redeclarada
// var é uma variável que pode ser reatribuída e redeclarada (não use)
//variável nomeDoObjeto = { chave: valor}
// Criando interatividade na página a partir do click no botão
//eventlistener é um método que é chamado quando um evento é disparado

let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")
const ulItensComprados = document.getElementById('itens-comprados')

form.addEventListener("submit", function (event) {
    event.preventDefault()
    salvarItem()
    mostrarItem()
    itensInput.focus()
})

function salvarItem() {
    ulItens.innerHTML = ''

    const comprasItem = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if (checarDuplicado) {
        alert("Item já existe na lista")
    } else {
        listaDeItens.push({
            valor: comprasItem,
            checar: false
        })
    }
    itensInput.value = ''
}

function mostrarItem() {
    ulItens.innerHTML = ''
    ulItensComprados.innerHTML = ''

    listaDeItens.forEach((elemento, index) => {
        if (elemento.checar) {
            ulItensComprados.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
        } else {
            ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
        `
        }
    })

    const inputCheck = document.querySelectorAll('input[type="checkbox"]')

    inputCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value')
            listaDeItens[valorDoElemento].checar = evento.target.checked
            mostrarItem()
        })
    })
}