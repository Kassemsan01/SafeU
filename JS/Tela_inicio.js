let userLogado = JSON.parse(localStorage.getItem("userLogado"))
let logado = document.querySelector("#logado")

logado.innerHTML = "Olá " + userLogado.nome

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página")
    window.location.href = "../HTML/Interface.html"
}

function sair(){
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

});


