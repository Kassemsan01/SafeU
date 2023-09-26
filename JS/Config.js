var isReading = false;

 

document.addEventListener('DOMContentLoaded', function () {

    var textToRead = document.getElementById('textToRead');

    var words = textToRead.innerText.split(' ');

 

    textToRead.innerHTML = ''; // Limpa o conteúdo original

 

    words.forEach(function (word) {

        var span = document.createElement('span');

        span.textContent = word + ' ';

        span.classList.add('word-highlight');

 

        span.addEventListener('mouseenter', function () {

            if (isReading) {

                // Use uma API de texto para fala (por exemplo, SpeechSynthesis) para ler a palavra em voz alta.

                var speechSynthesis = window.speechSynthesis;

                var utterance = new SpeechSynthesisUtterance(word);

 

                // Configure as opções de voz, se necessário

                // utterance.voice = ...

 

                speechSynthesis.speak(utterance);

            }

        });

 

        textToRead.appendChild(span);

    });

 

    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {

        isReading = !isReading;

        toggleButton.textContent = isReading ? 'Desativar Leitor' : 'Ativar Leitor';

    });

});