let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('Type')=="password"){
        inputSenha.setAttribute('type', 'text')
    }
    else{
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar(){
    let usuario = document.querySelector("#usuario")
    let userLabel = document.querySelector("#userLabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError")
    let listaUser = []
    
    let userValid = {
        nome: "",
        user: "",
        senha: ""
    }

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){


    } else{
        userLabel.setAt

    }
}