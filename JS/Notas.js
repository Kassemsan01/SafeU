const NotasForm = document.getElementById('NotasForm');

const NotasList = document.getElementById('notas');



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

