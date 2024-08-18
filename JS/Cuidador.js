
const menuu = document.querySelector("#menu-h");
let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = "Olá " + userLogado.nome

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Tela_de_login.html"
}

function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "../HTML/Tela_de_login.html"
}


function clickMenu(){
    if (menuu.style.display == 'block'){
        menuu.style.display = 'none';
    } else{
        menuu.style.display = 'block';
    }
}




let nome = document.querySelector("#nome")
let LabelNome = document.querySelector("#LabelNome")
let validNome = false

let coren = document.querySelector("#coren")
let LabelCoren = document.querySelector("#LabelCoren")
let validCoren = false

let telefone = document.querySelector("#telefone")
let LabelTelefone = document.querySelector("#LabelTelefone")
let validTelefone = false

let email = document.querySelector("#email")
let Labelemail = document.querySelector("#Labelemail")
let validemail = false

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

coren.addEventListener("keyup", ()=>{
    if(coren.value.length <=9){
        LabelCoren.setAttribute("style", "color: red")
        LabelCoren.innerHTML = '<strong> Coren *Insira no minimo 10 caracteres</strong>'
        coren.setAttribute("style", "border-color: red")
        validCoren = false
    } else{
        LabelCoren.setAttribute("style", "color: green")
        LabelCoren.innerHTML = "Coren"
        coren.setAttribute("style", "border-color: green")
        validCoren = true
    }
})

telefone.addEventListener("keyup", ()=>{
    if(telefone.value.length <= 10){
        LabelTelefone.setAttribute("style", "color: red")
        LabelTelefone.innerHTML = '<strong> Telefone *Insira 10 caracteres contando o DDD</strong>'
        telefone.setAttribute("style", "border-color: red")
        validTelefone = false
    } 
    else{
        LabelTelefone.setAttribute("style", "color: green")
        LabelTelefone.innerHTML = "Telefone"
        telefone.setAttribute("style", "border-color: green")
        validTelefone = true
    }
})

email.addEventListener("keyup", ()=>{
    if(email.value.length >= 65){
        LabelEmail.setAttribute("style", "color: red")
        LabelEmail.innerHTML = '<strong> email *Maximo de caracterer é de 65</strong>'
        email.setAttribute("style", "border-color: red")
        validemail = false
    } 
    else{
        LabelEmail.setAttribute("style", "color: green")
        LabelEmail.innerHTML = "email"
        email.setAttribute("style", "border-color: green")
        validEmail = true
    }
})


function cadastrar(){
    if(validNome && validTelefone && validCoren && validEmail){

        let listaCuid = JSON.parse(localStorage.getItem("listaCuid") || "[]")

        listaCuid.push(
            {
                nomeCad: nome.value,
                corCad: coren.value,
                telCad: telefone.value,
                emaCad: email.value
            }
        )

        localStorage.setItem("listaCuid", JSON.stringify(listaCuid))

        msgSuccess.setAttribute("Style", "display: block")
        msgSuccess.innerHTML = "<strong>Cadastrando Cuidador...</strong>"
        msgError.innerHTML = ""
        msgError.setAttribute("Style", "display: none")

        setTimeout(()=>{
            window.location.href = "../HTML/Tela_Inicial.html"
        },3000)

    } 
    else{
        msgError.setAttribute("Style", "display: block")
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgSuccess.innerHTML = ""
        msgSuccess.setAttribute("Style", "display: none")

        setTimeout(()=>{
            window.location.href = "../HTML/Cadastro_cuidador.html"
        },1500)
    }
}



if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Tela_de_login.html"
}

function voltar(){
    window.location.href = "../HTML/Tela_Inicial.html"
}

function SOS(){
    
}