function generateQuiz(quizData) {
  const container = document.getElementById("quiz-container");
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.dataset.correct = q.correct;

    let html = `<p>${index + 1}. ${q.question}</p>`;
    if (q.image) {
      html += `<img src="${q.image}" alt="Immagine domanda" style="max-width: 100%; height: auto; margin: 10px 0;">`;
    }

    q.answers.forEach((ans, i) => {
      html += `<label><input type="radio" name="q${index + 1}" value="${i + 1}"> ${ans}</label><br>`;
    });
    html += `<button onclick="checkAnswer(this)">Verifica</button><div class="result"></div>`;
    div.innerHTML = html;
    container.appendChild(div);
  });
}

function checkAnswer(button) {
  const questionDiv = button.parentElement;
  const correctValue = questionDiv.dataset.correct;
  const selected = questionDiv.querySelector('input[type="radio"]:checked');
  const resultDiv = questionDiv.querySelector('.result');

  const labels = questionDiv.querySelectorAll('label');
  labels.forEach(label => {
    label.classList.remove('correct-answer', 'incorrect-answer');
  });

  if (!selected) {
    resultDiv.textContent = 'Seleziona una risposta!';
    resultDiv.className = 'result incorrect';
    return;
  }

  const selectedLabel = selected.parentElement;

  if (selected.value === correctValue) {
    resultDiv.textContent = 'Risposta corretta!';
    resultDiv.className = 'result correct';
    selectedLabel.classList.add('correct-answer');
  } else {
    resultDiv.textContent = 'Risposta sbagliata.';
    resultDiv.className = 'result incorrect';
    selectedLabel.classList.add('incorrect-answer');
  }
}

function checkAllAnswers() {
  const questions = document.querySelectorAll('.question');
  let score = 0;
  questions.forEach(q => {
    const correctValue = q.dataset.correct;
    const selected = q.querySelector('input[type="radio"]:checked');
    const resultDiv = q.querySelector('.result');

    const labels = q.querySelectorAll('label');
    labels.forEach(label => {
      label.classList.remove('correct-answer', 'incorrect-answer');
    });

    if (selected && selected.value === correctValue) {
      resultDiv.textContent = 'Risposta corretta!';
      resultDiv.className = 'result correct';
      selected.parentElement.classList.add('correct-answer');
      score++;
    } else if (selected) {
      resultDiv.textContent = 'Risposta sbagliata.';
      resultDiv.className = 'result incorrect';
      selected.parentElement.classList.add('incorrect-answer');
    } else {
      resultDiv.textContent = 'Nessuna risposta selezionata!';
      resultDiv.className = 'result incorrect';
    }
  });
  document.getElementById('score').innerHTML = `<h2>Punteggio: ${score} / ${questions.length}</h2>`;
}

// === Caricamento dati da catalog.json ===
fetch('./json/catalog.json')
  .then(response => response.json())
  .then(data => {
    generateQuiz(data);
  })
  .catch(error => {
    console.error("Errore nel caricamento di catalog.json:", error);
    document.getElementById('quiz-container').innerHTML = "<p>Impossibile caricare il quiz.</p>";
  });
