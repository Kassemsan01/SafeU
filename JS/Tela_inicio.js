let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = "Olá " + userLogado.nome

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Interface.html"
}

function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "../HTML/Interface.html"
}

const menuu = document.querySelector("#menu-h");

function clickMenu(){
    if (menuu.style.display == 'block'){
        menuu.style.display = 'none';
    } else{
        menuu.style.display = 'block';
    }
}





    


