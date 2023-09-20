let btn = document.querySelector('#VerSenha')
let btnConfirm = document.querySelector('#VerConfirmSenha')

let nome = document.querySelector("#nome")
let LabelNome = document.querySelector("#LabelNome")
let validNome = false

let usuario = document.querySelector("#usuario")
let LabelUsuario = document.querySelector("#LabelUsuario")
let validUsuario = false

let senha = document.querySelector("#senha")
let LabelSenha = document.querySelector("#LabelSenha")
let validSenha = false

let ConfirmSenha = document.querySelector("#ConfirmSenha")
let LabelConfirmSenha = document.querySelector("#LabelConfirmSenha")
let validConfirmsenha = false

let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

nome.addEventListener("keyup", ()=>{
    if(nome.value.length <=2){
        LabelNome.setAttribute("style", "color: red")
        LabelNome.innerHTML = '<strong> nome *Insira no minimo 3 caracteres</strong>'
        nome.setAttribute("style", "border-color: red")
        validNome = false
    } else{
        LabelNome.setAttribute("style", "color: green")
        LabelNome.innerHTML = "nome"
        nome.setAttribute("style", "border-color: green")
        validNome = true
    }
})

usuario.addEventListener("keyup", ()=>{
    if(usuario.value.length <=4){
        LabelUsuario.setAttribute("style", "color: red")
        LabelUsuario.innerHTML = '<strong> Usuario *Insira no minimo 5 caracteres</strong>'
        usuario.setAttribute("style", "border-color: red")
        validUsuario = false
    } else{
        LabelUsuario.setAttribute("style", "color: green")
        LabelUsuario.innerHTML = "Usuario"
        usuario.setAttribute("style", "border-color: green")
        validUsuario = true
    }
})

senha.addEventListener("keyup", ()=>{
    if(senha.value.length <= 7){
        LabelSenha.setAttribute("style", "color: red")
        LabelSenha.innerHTML = '<strong> Senha *Insira no minimo 8 caracteres</strong>'
        senha.setAttribute("style", "border-color: red")
        validSenha = false
    } 
    else{
        LabelSenha.setAttribute("style", "color: green")
        LabelSenha.innerHTML = "Senha"
        senha.setAttribute("style", "border-color: green")
        validSenha = true
    }
})

ConfirmSenha.addEventListener("keyup", ()=>{
    if(senha.value !=  ConfirmSenha.value){
        LabelConfirmSenha.setAttribute("style", "color: red")
        LabelConfirmSenha.innerHTML = '<strong> Confirmar senha *As senhas não conferem</strong>'
        ConfirmSenha.setAttribute("style", "border-color: red")
        validConfirmsenha = false
    } else{
        LabelConfirmSenha.setAttribute("style", "color: green")
        LabelConfirmSenha.innerHTML = "Confirmar Senha"
        ConfirmSenha.setAttribute("style", "border-color: green")
        validConfirmsenha = true
    }
})

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmsenha){

        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem("listaUser", JSON.stringify(listaUser))

        msgSuccess.setAttribute("Style", "display: block")
        msgSuccess.innerHTML = "<strong>Cadastrando Usuario...</strong>"
        msgError.innerHTML = ""
        msgError.setAttribute("Style", "display: none")

        setTimeout(()=>{
            window.location.href = "../HTML/Interface.html"
        },3000)

    } 
    else{
        msgError.setAttribute("Style", "display: block")
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgSuccess.innerHTML = ""
        msgSuccess.setAttribute("Style", "display: none")
    }
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

function voltar(){
    window.location.href = "../HTML/Interface.html"
}