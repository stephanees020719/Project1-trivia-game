

//created a questions array

const questions = [
  {
    question: " What is Batman real name? ",
    answers: [
      { text: "Bruce Wayne ", correct: true },
      { text: "Clark Kent ", correct: false },
      { text: "Peter Parker ", correct: false },
      { text: "Tony stark ", correct: false }
    ]

  },

  {
    question: "What is the real name of Iron Man?",
    answers: [
      { text: "Tony Wayne ", correct: false },
      { text: "Tony Stark ", correct: true },
      { text: "Clark Kent ", correct: false },
      { text: "Howard Stark", correct: false }
    ]

  },
  {
    question: "What is Captain America super Power?",
    answers: [
      { text: "super Strength ", correct: true },
      { text: "Super Fast ", correct: false },
      { text: "Fly ", correct: false },
      { text: "Super Genious", correct: false }
    ]

  },
  {
    question: "Where is the Time Stone hidden in Doctor Strange?",
    answers: [
      { text: "The stars ", correct: false },
      { text: "Eye of Agamoto ", correct: true },
      { text: " Planet Earth ", correct: false },
      { text: "Avengers Building", correct: false }
    ]

  },
  {
    question: "What species is Loki?",
    answers: [
      { text: "Frost Giant ", correct: true },
      { text: "Magician ", correct: false },
      { text: "Human ", correct: false },
      { text: "Asgardian ", correct: false }
    ]

  },
  {
    question: "What type of Doctor is Stephen Strange?",
    answers: [
      { text: " Neurosurgeon ", correct: true },
      { text: "Cardiologist ", correct: false },
      { text: "Trauma Surgeon ", correct: false },
      { text: "Orthopedic surgeon ", correct: false },
    ]

  },
  {
    question: "Who killed Tony Stark’s parents?",
    answers: [
      { text: "King Tachala ", correct: false },
      { text: "The Winter Soldier ", correct: true },
      { text: "Rocket ", correct: false },
      { text: "Thanos ", correct: false }
    ]

  },
  {
    question: "What is the name of Iron Man’s loyal assistant?",

    answers: [
      { text: "Natasha ", correct: false },
      { text: "Happy", correct: false },
      { text: "Pepper Potts ", correct: true },
      { text: "Aunt May ", correct: false }
    ]

  },
  {
    question: "Which villain got his distinct appearance from toxic chemicals at a plant?",

    answers: [
      { text: "Pengin ", correct: false },
      { text: "Poison Yvy ", correct: false },
      { text: "Two Faced ", correct: false },
      { text: "Joker ", correct: true }
    ]

  },
  {
    question: "Who is part of the justice leage?",


    answers: [
      { text: "Captain Marvel ", correct: false },
      { text: "Thanos ", correct: false },
      { text: "Flash ", correct: true },
      { text: "Harley Quinn ", correct: false }
    ]
  },

];

let currentQuestionIndex = 0;      // define my variables 
let score = 0;


const questionElement = document.getElementById("question");   //question element 
const answerButton = document.getElementById("answer-buttons"); //buttons
const nextButton = document.getElementById("next-btn");



function startTriviaGame() {        //funtion to start the game 
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {        // show questions 
  resetState();                   //reset the object 
  let currentQuestion = questions[currentQuestionIndex];
  let question1 = currentQuestionIndex + 1;
  questionElement.innerHTML = question1 + ". " + currentQuestion.question;



  currentQuestion.answers.forEach(answer => {     //iterate 
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(a) {
  const selectedBtn = a.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;    // added scored 

  } else {
    selectedBtn.classList.add("incorrect");
  }


  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startTriviaGame();
  }


});

startTriviaGame(); 


