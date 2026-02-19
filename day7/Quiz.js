
const API_URL =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");

async function startQuiz() {
    currentQuestion = 0;
    score = 0;

    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    const res = await fetch(API_URL);
    const data = await res.json();
    questions = data.results;
    //console.log(questions);
    showQuestion();

}

function showQuestion() {
    nextBtn.classList.add("hidden");
    questionEl.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.innerHTML = q.question;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    answersEl.innerHTML = "";
    const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

    answers.forEach((answer) => {
        const btn = document.createElement("button");

        btn.innerHTML = answer;
        btn.className =
            "w-full text-left px-4 py-2 border rounded hover:bg-gray-100";
        btn.onclick = () => selectAnswer(btn, answer, q.correct_answer);
        answersEl.appendChild(btn);
    })
}

function selectAnswer(button, selected, correct) {
    const buttons = answersEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        button.classList.add("bg-green-200");
        score++;
    } else {
        button.classList.add("bg-red-200");
        buttons.forEach(btn => {
            if (btn.innerHTML === correct) {
                btn.classList.add("bg-green-200");
            }
        });
    }

    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

startQuiz();  */Amarnath/*
