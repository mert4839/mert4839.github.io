document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const checkButton = document.getElementById("check-answers");
    const resultDiv = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const alfAnswer = quizForm.elements["alf"].value;
        const bethAnswer = quizForm.elements["beth"].value;

        if (alfAnswer === "knight" && bethAnswer === "knave") {
            resultDiv.innerHTML = "Congratulations. visit the bridge of sighs @ 10 pm";
            quizForm.style.display = "none"; // Hide the quiz form permanently
        } else {
            resultDiv.innerHTML = "Uh oh";
            quizForm.style.display = "none"; // Hide the quiz form permanently
        }
    });
});