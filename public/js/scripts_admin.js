const caixa = document.querySelector('.caixa')
const btn_adicionar = document.querySelector('#btn-adicionar')
const caixa_btn_cancel = caixa.querySelector('#btn-cancel')
const caixa_btn_save = caixa.querySelector('#btn-save')
const table = document.querySelector('.table')
const corpo_da_tabela = table.querySelector('#list')
const btn_edit_table = document.getElementsByClassName('btn-edit')
const btn_read_table = document.getElementsByClassName('btn-read')
const btn_deletar = document.querySelector('#btn-deletar')

function esconder() { caixa.classList.add('escondido') }

function criarLista(cargo, nome) {
    let coluna = document.createElement('tr')
    let btn_edit = btn_edit_table.item(1).cloneNode(true)
    let btn_read = btn_read_table.item(1).cloneNode(true)
    let coluna_nome = document.createElement('td')
    let coluna_cargo = document.createElement('td')

    coluna_cargo.innerText = cargo
    coluna_nome.innerText = nome

    coluna.appendChild(coluna_cargo)
    coluna.appendChild(coluna_nome)
    coluna.appendChild(btn_edit)
    coluna.appendChild(btn_read)
    corpo_da_tabela.appendChild(coluna)

    for (let i = 0; i < btn_edit_table.length; i++) {
        let edit_column = () => {

            if(btn_edit_table.item(i)){
                let tr = btn_edit_table.item(i).parentElement
                let conteudo = tr.children
                let dados = pegarDados()
                conteudo.item(0).innerText = dados.cargo
                conteudo.item(1).innerText = dados.nome
                esconder()
            } else {
                console.log(`Elemento nao encontrado`)
            }

        }
        let UPDATE = () => {
            caixa_save_function(edit_column)
        }
        btn_edit_table.item(i).onclick = UPDATE
    }
    for(let i = 0 ; i < btn_read_table.length ; i++){
        let func = () => {
            console.log('teste %d', i)
        }
    
        btn_read_table.item(i).onclick = func

    }
}

function caixa_save_function(func) {
    caixa.classList.remove('escondido')
    caixa_btn_save.onclick = function() {
        if(pegarDados().cargo == '' || pegarDados.nome == ''){
            alert('Confira os dados')
        } else {
            func()

            esconder()
        }
    }
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
    }
    caixa_save_function(func)
}


let CANCEL_FUNCTION = () => {
    esconder()
}

let DELETE_FUNCTION = () => {
}


caixa_btn_cancel.onclick = CANCEL_FUNCTION
btn_adicionar.onclick = ADD_FUNCTION
btn_deletar.onclick = DELETE_FUNCTION
for (let i = 0; i < btn_edit_table.length; i++) {
    let edit_column = () => {
        let tr = btn_edit_table.item(i).parentElement
        let conteudo = tr.children
        let dados = pegarDados()
        conteudo.item(0).innerText = dados.cargo
        conteudo.item(1).innerText = dados.nome
    }
    let UPDATE = () => {
        caixa_save_function(edit_column)
    }
    btn_edit_table.item(i).onclick = UPDATE
}

for(let i = 0 ; i < btn_read_table.length ; i++){
    let func = () => {
        console.log('teste %d', i)
    }

    btn_read_table.item(i).onclick = func
}