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