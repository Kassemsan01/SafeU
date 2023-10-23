const NotasForm = document.getElementById('NotasForm');

const NotasList = document.getElementById('notas');

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");

const menuu = document.querySelector("#menu-h");

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


function clickMenu(){
    if (menuu.style.display == 'block'){
        menuu.style.display = 'none';
    } else{
        menuu.style.display = 'block';
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

                <br>nota${index, 1}: ${notas.informacoes}<br>

                <br><button onclick="removerNotas(${index})">Remover</button><br>
                
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

