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



document.addEventListener("DOMContentLoaded", function () {

    const noteList = document.getElementById("note-list");



    // Recupere as notas salvas do localStorage

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];



    // Percorra as notas e adicione cada uma à lista

    savedNotes.forEach(function (note, index) {

        const listItem = document.createElement("li");

        listItem.textContent = `Nota ${index + 1}: ${note}`;

        listItem.classList.add("note-item");

        noteList.appendChild(listItem);

    });



    // Crie um parágrafo para o texto da nota

    const noteText = document.createElement("p");

    noteText.textContent = `Nota ${index + 1}: ${note}`;



    // Crie um botão de remoção

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remover";

    removeButton.addEventListener("click", function () {

        // Remove a nota da lista de notas salvas

        savedNotes.splice(index, 1);

        // Atualiza o localStorage sem a nota removida

        localStorage.setItem("notes", JSON.stringify(savedNotes));

        // Remove o item da lista na interface

        listItem.remove();

    });



    // Adicione o parágrafo e o botão à lista

    listItem.appendChild(noteText);

    listItem.appendChild(removeButton);



    // Adicione o item à lista

    noteList.appendChild(listItem);

});

    


