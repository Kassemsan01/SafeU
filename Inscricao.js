let btn = document.querySelector('#VerSenha')
let btnConfirm = document.querySelector('#VerConfirmSenha')

let nome = document.querySelector("#nome")
let LabelNome = document.querySelector("#LabelNome")

let usuario = document.querySelector("#usuario")
let LabelUsuario = document.querySelector("#LabelUsuario")

let senha = document.querySelector("#senha")
let LabelSenha = document.querySelector("#LabelSenha")

let ConfirmSenha = document.querySelector("#ConfirmSenha")
let LabelConfirmSenha = document.querySelector("#LabelConfirmSenha")

nome.addEventListener("keyup", ()=>{
    if(nome.value.length <=2){
        LabelNome.setAttribute("style", "color: red")
        LabelNome.innerHTML = '<strong> nome *Insira no minimo 3 caracteres</strong>'
        nome.setAttribute("style", "border-color: red")
    } else{
        LabelNome.setAttribute("style", "color: green")
        LabelNome.innerHTML = "nome"
        nome.setAttribute("style", "border-color: green")
    }
})

usuario.addEventListener("keyup", ()=>{
    if(usuario.value.length <=4){
        LabelUsuario.setAttribute("style", "color: red")
        LabelUsuario.innerHTML = '<strong> nome *Insira no minimo 4 caracteres</strong>'
        usuario.setAttribute("style", "border-color: red")
    } else{
        LabelUsuario.setAttribute("style", "color: green")
        LabelUsuario.innerHTML = "nome"
        usuario.setAttribute("style", "border-color: green")
    }
})

senha.addEventListener("keyup", ()=>{
    if(senha.value.length <= 7){
        LabelSenha.setAttribute("style", "color: red")
        LabelSenha.innerHTML = '<strong> nome *Insira no minimo 8 caracteres</strong>'
        senha.setAttribute("style", "border-color: red")
    } else{
        LabelSenha.setAttribute("style", "color: green")
        LabelSenha.innerHTML = "nome"
        senha.setAttribute("style", "border-color: green")
    }
})

ConfirmSenha.addEventListener("keyup", ()=>{
    if(senha.value !=  ConfirmSenha.value){
        LabelConfirmSenha.setAttribute("style", "color: red")
        LabelConfirmSenha.innerHTML = '<strong> Confirmar senha *As senhas não conferem</strong>'
        ConfirmSenha.setAttribute("style", "border-color: red")
    } else{
        LabelConfirmSenha.setAttribute("style", "color: green")
        LabelConfirmSenha.innerHTML = "Confirmar Senha"
        ConfirmSenha.setAttribute("style", "border-color: green")
    }
})

function cadastrar(){

}

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('Type')=="password"){
        inputSenha.setAttribute('type', 'text')
    }
    else{
        inputSenha.setAttribute('type', 'password')
    }
})



btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#ConfirmSenha')

    if(inputConfirmSenha.getAttribute('Type')=="password"){
        inputConfirmSenha.setAttribute('type', 'text')
    }
    else{
        inputConfirmSenha.setAttribute('type', 'password')
    }
})