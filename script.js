const questions = [
  {
    q: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style System"],
    answer: 1
  },
  {
    q: "Which language is used to add behavior to web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: 2
  },
  {
    q: "Which HTML tag is used for a paragraph?",
    options: ["<para>", "<p>", "<text>"],
    answer: 1
  },
  {
    q: "Which property is used to change the background color in CSS?",
    options: ["bgcolor", "color", "background-color"],
    answer: 2
  },
  {
    q: "How do you write a comment in JavaScript?",
    options: ["/* This is a comment */", "// This is a comment", "<!-- This is a comment -->"],
    answer: 1
  }
];

let current = 0;
let score = 0;

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsBox = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const jokeContent = document.getElementById('joke-content');
const resultBox = document.getElementById('result');
const scoreText = document.getElementById('score-text');
const quizBox = document.getElementById('quiz-box');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
  const q = questions[current];
  questionNumber.textContent = `Question ${current + 1} of ${questions.length}`;
  questionText.textContent = q.q;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.disabled = false;          // enable buttons for new question
    btn.onclick = () => selectOption(i, btn);
    optionsBox.appendChild(btn);
  });

  // Hide next button initially until an option is selected
  nextBtn.classList.add("hidden");

  // Change Next button text to "See Results" on last question
  if (current === questions.length - 1) {
    nextBtn.textContent = "See Results";
  } else {
    nextBtn.textContent = "Next";
  }

  fetchJoke();
}

function selectOption(selectedIndex, btn) {
  const correctIndex = questions[current].answer;
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((b, i) => {
    b.disabled = true;          // disable all options once answered
    b.classList.remove("correct", "wrong", "disabled");
    b.classList.add("disabled");
    if (i === correctIndex) b.classList.add("correct");
    else if (i === selectedIndex) b.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) score++;

  // Show next button after selection
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
};

restartBtn.onclick = () => {
  current = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
  jokeContent.textContent = "Loading a fun joke...";
};

function finishQuiz() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreText.textContent = score;
  jokeContent.textContent = "Hope you enjoyed both the quiz and the jokes! 🎉";
}

function fetchJoke() {
  // Use JokeAPI, safe mode, any category, random joke
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then(res => res.json())
    .then(data => {
      if (data.type === "single") {
        jokeContent.innerHTML = `<span>😂</span> ${data.joke}`;
      } else {
        jokeContent.innerHTML = `<span>😂</span> ${data.setup} <br><strong>${data.delivery}</strong>`;
      }
    })
    .catch(() => {
      jokeContent.textContent = "😅 Failed to load joke. Try again later!";
    });
}

// Initialize the quiz on page load
loadQuestion();
