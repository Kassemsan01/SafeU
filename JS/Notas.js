
document.addEventListener("DOMContentLoaded", function () {

    const noteText = document.getElementById("note-text");

    const saveButton = document.getElementById("save-button");

 

    // Carrega as notas salvas, se existirem

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

 

    // Carrega a nota salva, se existir

    if (localStorage.getItem("note")) {

        noteText.value = localStorage.getItem("note");

    }

 

    // Salva a nota no localStorage e no array de notas quando o botão for clicado

    saveButton.addEventListener("click", function () {

        const currentNote = noteText.value;

 

        if (currentNote) {

            savedNotes.push(currentNote);

            localStorage.setItem("notes", JSON.stringify(savedNotes));

            localStorage.setItem("note", currentNote);

            alert("Nota salva com sucesso!");

 

            // Redirecione para a página de notas

            window.location.href = "../HTML/Notas.html";

        }

    });

});


function voltar(){
    window.location.href = "../HTML/Tela_Inicial.html"
}