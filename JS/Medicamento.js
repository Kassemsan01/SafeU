let nome = document.querySelector("#nome")
let LabelNome = document.querySelector("#LabelNome")
let validNome = false


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





function setAlarm() {

    const hour = parseInt(document.getElementById('hour').value);

    const minute = parseInt(document.getElementById('minute').value);

    const repeatDays = parseInt(document.getElementById('repeat').value);

 

    if (isNaN(hour) || isNaN(minute) || isNaN(repeatDays) || hour < 0 || hour > 23 || minute < 0 || minute > 59 || repeatDays < 1) {

        alert('Por favor, insira uma hora, minuto e número de dias válidos.');

        return;

    }

 

    const now = new Date();

    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);

 

    const timeDifference = alarmTime - now;

    

    if (timeDifference <= 0) {

        alert('O alarme deve ser definido para um horário futuro.');

        return;

    }

 

    for (let i = 0; i < repeatDays; i++) {

        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, hour, minute);

        const timeDifference = alarmDate - now;

        

        if (timeDifference >= 0) {

            let listaAlarme = JSON.parse(localStorage.getItem("listaAlarme") || "[]")

            setTimeout(function() {

                localStorage.setItem("alarmMessage", "Alarme disparado!");

                alert('Alarme disparado!');

            }, timeDifference);

        }

    }

}


function voltar(){
    window.location.href = "../HTML/Tela_inicial.html"
}


function cadastrar(){
    if(validNome){

        let listaRemedio = JSON.parse(localStorage.getItem("listaRemedio") || "[]")

        listaCuid.push(
            {
                nomeCad: nome.value
            }
        )

        localStorage.setItem("listaRemedio", JSON.stringify(listaRemedio))

        msgSuccess.setAttribute("Style", "display: block")
        msgSuccess.innerHTML = "<strong>Cadastrando remedio...</strong>"
        msgError.innerHTML = ""
        msgError.setAttribute("Style", "display: none")

        setTimeout(()=>{
            window.location.href = "../HTML/Tela_inicial.html"
        },3000)

    } 
    else{
        msgError.setAttribute("Style", "display: block")
        msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
        msgSuccess.innerHTML = ""
        msgSuccess.setAttribute("Style", "display: none")
    }
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = "Olá " + userLogado.nome

if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Interface.html"
}