

const remedioForm = document.getElementById('remedioForm');

const remediosList = document.getElementById('remedios');



function cadastrarRemedio() {

    const nome = document.getElementById('nome').value;

    const horario = document.getElementById('horario').value;

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

}



function atualizarListaRemedios() {

    remediosList.innerHTML = '';

    const remediosCadastrados = JSON.parse(localStorage.getItem('remedios')) || [];



    remediosCadastrados.forEach((remedio, index) => {

        const remedioItem = document.createElement('li');

        remedioItem.innerHTML = `

                <strong>${remedio.nome}</strong><br>

                Horário: ${remedio.horario}<br>

                Dias de Repetição: ${remedio.dias}<br>

                Quantidade: ${remedio.quantidade}<br>

                Informações: ${remedio.informacoes}

                <button onclick="removerRemedio(${index})">Remover</button>

            `;

        remediosList.appendChild(remedioItem);

    });

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

