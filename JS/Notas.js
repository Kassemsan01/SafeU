const NotasForm = document.getElementById('NotasForm');

const NotasList = document.getElementById('notas');

let userlog = JSON.parse(localStorage.getItem("userLogado"));

let logado_notas = document.querySelector("#logado");

const menu_notas = document.querySelector("#menu-h");

logado_notas.innerHTML = "Olá " + userlog.nome

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Tela_de_login.html"
}

function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "../HTML/Tela_de_login.html"
}


function clickMenu(){
    if (menu_notas.style.display == 'block'){
        menu_notas.style.display = 'none';
    } else{
        menu_notas.style.display = 'block';
    }
}


function cadastrarNotas() {

    const informacoes = document.getElementById('informacoes').value;


    const notas = {

        informacoes,

    };



    const notasCadastrados = JSON.parse(localStorage.getItem('notas')) || [];

    notasCadastrados.push(notas);



    localStorage.setItem('notas', JSON.stringify(notasCadastrados));



    NotasForm.reset();

    atualizarListaNotas();

}




function atualizarListaNotas() {

    NotasList.innerHTML = '';

    const notasCadastrados = JSON.parse(localStorage.getItem('notas')) || [];



    notasCadastrados.forEach((notas, index) => {

        const notasItem = document.createElement('p');

        notasItem.innerHTML = `
                <ul class = "infoNota">
                <li>${notas.informacoes} </li>

                    <br><button class= "button-nota" onclick="removerNotas(${index})">Remover</button><br>
                </ul>
            `;

            NotasList.appendChild(notasItem);

    });

}





function removerNotas(index) {

    const notasCadastrados = JSON.parse(localStorage.getItem('notas')) || [];

    notasCadastrados.splice(index, 1);

    localStorage.setItem('notas', JSON.stringify(notasCadastrados));

    atualizarListaNotas();

}



atualizarListaNotas();

function voltar() {
    window.location.href = "../HTML/Tela_Inicial.html"
}

