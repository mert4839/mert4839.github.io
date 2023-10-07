document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const checkButton = document.getElementById("check-answers");
    const resultDiv = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const alfAnswer = quizForm.elements["alf"].value;
        const bethAnswer = quizForm.elements["beth"].value;

        if (alfAnswer === "knight" && bethAnswer === "knave") {
            resultDiv.innerHTML = "Hmm... was this arrived at honestly? Send a valid explanation to sab2327@columbia.edu before Monday, October 9th to receive the next clue.";
            quizForm.style.display = "none"; // Hide the quiz form permanently
        } else {
            resultDiv.innerHTML = "Uh oh";
            quizForm.style.display = "none"; // Hide the quiz form permanently
        }
    });
});
