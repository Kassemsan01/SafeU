
const user = JSON.parse(localStorage.getItem("userLogado"));

const log = document.querySelector("#logado");

const remedioForm = document.getElementById('remedioForm');

const remediosList = document.getElementById('remedios');


const menu = document.querySelector("#menu-h");

function clickMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}


log.innerHTML = "Olá " + user.nome

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Tela_de_login.html"
}

function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "../HTML/Tela_de_login.html"
}




function cadastrarRemedio() {

    const nome = document.getElementById('nome').value;

    const horario = document.getElementById('horario').value;

    const horarioSplit = horario.split(':');

    const horas = parseInt(horarioSplit[0]);

    const minutos = parseInt(horarioSplit[1]);

 

    // Obter a data atual

    const agora = new Date();

    

    // Configurar a data para o horário do alarme

    agora.setHours(horas);

    agora.setMinutes(minutos);

    agora.setSeconds(0);

 

    // Criar a notificação de alarme

    if (agora > new Date()) {

        const tempoAteAlarme = agora - new Date();

        setTimeout(() => {

            mostrarNotificacao(nome,quantidade);

        }, tempoAteAlarme);

    }

    const dias = document.getElementById('dias').value;

    const quantidade = document.getElementById('quantidade').value;

    const informacoes = document.getElementById('informacoes').value;



    const remedio = {

        nome,

        horario,

        dias,

        quantidade,

        informacoes,

    };



    const remediosCadastrados = JSON.parse(localStorage.getItem('remedios')) || [];

    remediosCadastrados.push(remedio);



    localStorage.setItem('remedios', JSON.stringify(remediosCadastrados));



    remedioForm.reset();

    atualizarListaRemedios();

    setAlarm();

}


function mostrarNotificacao(nome,quantidade) {

    if ('Notification' in window) {

        Notification.requestPermission().then(function(permission) {

            if (permission === 'granted') {

                new Notification(`Hora de tomar o remédio: ${nome}     Quantidade: ${quantidade}`);
                alert(`Hora de tomar o remédio: ${nome}     
                Quantidade: ${quantidade}`)
                

            }

        });

    }

}



function atualizarListaRemedios() {

    remediosList.innerHTML = '';

    const remediosCadastrados = JSON.parse(localStorage.getItem('remedios')) || [];



    remediosCadastrados.forEach((remedio, index) => {

        const remedioItem = document.createElement('ul');

        remedioItem.innerHTML = `
                <ul class = "infoRemedio">
                    <li><strong>${remedio.nome}</strong></li>

                    <li>Horário: ${remedio.horario}</li>

                    <li>Dias de Repetição: ${remedio.dias}</li>

                    <li>Quantidade: ${remedio.quantidade}</li>

                    <li>Informações: ${remedio.informacoes}</li>
                </ul>

                <br><button class="removerremedio" onclick="removerRemedio(${index})">Remover</button><br>
            `;

        remediosList.appendChild(remedioItem);

    });

}


function setAlarm() {

    const horario = parseInt(document.getElementById('horario').value);

    const dias = parseInt(document.getElementById('dias').value);


 

    if (isNaN(horario) || isNaN(dias) || horario < 0 || horario > 23 || dias < 1) {

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

 

    for (let i = 0; i < dias; i++) {

        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, hour, minute);

        const timeDifference = alarmDate - now;

        

        if (timeDifference >= 0) {

            setTimeout(function() {

                alert('Alarme disparado!');

            }, timeDifference);

        }

    }

}



function removerRemedio(index) {

    const remediosCadastrados = JSON.parse(localStorage.getItem('remedios')) || [];

    remediosCadastrados.splice(index, 1);

    localStorage.setItem('remedios', JSON.stringify(remediosCadastrados));

    atualizarListaRemedios();

}



atualizarListaRemedios();

function voltar() {
    window.location.href = "../HTML/Tela_Inicial.html"
}