// Mostrar u ocultar respuestas
const pqrsAnswers = document.querySelectorAll(".pqrs-answer");
const pqrsButtons = document.querySelectorAll(".pqrs-button");

pqrsButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (pqrsAnswers[index].style.display === "block") {
            pqrsAnswers[index].style.display = "none";
            button.textContent = "Mostrar Respuesta";
        } else {
            pqrsAnswers[index].style.display = "block";
            button.textContent = "Ocultar Respuesta";
        }
    });
});
// Función para cambiar el idioma
const languageToggle = document.getElementById("language-toggle");
const pqrsTitle = document.getElementById("pqrs-title");
const pqrsQuestions = document.querySelectorAll(".pqrs-question h2");

languageToggle.addEventListener("change", () => {
    if (languageToggle.checked) {
        // Cambiar a inglés
        pqrsTitle.textContent = "Frequently Asked Questions";
        pqrsQuestions.forEach((question, index) => {
            question.textContent = "Question " + (index + 1);
        });
    } else {
        // Cambiar a español
        pqrsTitle.textContent = "Preguntas Frecuentes";
        pqrsQuestions.forEach((question, index) => {
            question.textContent = "Pregunta " + (index + 1);
        });
    }
});