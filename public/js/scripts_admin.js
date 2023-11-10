const caixa = document.querySelector('.caixa')
const btn_adicionar = document.querySelector('#btn-adicionar')
const caixa_btn_cancel = caixa.querySelector('#btn-cancel')
const caixa_btn_save = caixa.querySelector('#btn-save')
const table = document.querySelector('.table')
const corpo_da_tabela = table.querySelector('#list')
const colunas = corpo_da_tabela.getElementsByTagName('tr')
const btn_edit_table = document.getElementsByClassName('btn-edit')



function criarLista(cargo, nome) {
    let coluna = document.createElement('tr')
    let btn_edit = btn_edit_table.item(1).cloneNode(true)
    let coluna_nome = document.createElement('td')
    let coluna_cargo = document.createElement('td')

    coluna_cargo.innerText = cargo
    coluna_nome.innerText = nome

    coluna.append(coluna_cargo)
    coluna.append(coluna_nome)
    coluna.append(btn_edit)
    corpo_da_tabela.appendChild(coluna)
}

function caixa_save_function(func) {
    caixa.classList.remove('escondido')
    caixa_btn_save.addEventListener('click', func)
}

function pegarDados() {
    let nome = caixa.querySelector('#nome')
    let cargo = caixa.querySelector('#cargo')
    let dados = { nome: nome.value, cargo: cargo.value }
    return dados
}


let ADD_FUNCTION = () => {
    let func = () => {
        let dados = pegarDados()
        criarLista(dados.cargo, dados.nome)
        caixa.classList.add('escondido')
    }
    caixa_save_function(func)
    caixa.classList.remove('escondido')
}


let CANCEL_FUNCTION = () => {
    caixa.classList.add('escondido')
}

for (let i = 0; i <= btn_edit_table.length; i++) {
    let EDITAR = () => {
        let pai = btn_edit_table.item(i).parentElement
        let colunas = pai.childNodes
        let dados = pegarDados()
        colunas.item(1).innerText = dados.cargo
        colunas.item(2).innerText = dados.nome
    }

    let edit_btn = () => {
        caixa_save_function(EDITAR)
    }
    btn_edit_table.item(i).onclick = edit_btn
    btn_adicionar.onclick = ADD_FUNCTION
    caixa_btn_cancel.onclick = CANCEL_FUNCTION
}