//superhero trivia game 
//get score every correct answer 
//give scores
//evaluate correct or wrong answer

//1. Define array of superheroe trivia questions
const triviaQuestions = [
{
    question:" What is Batman real name? ",
    options:["Bruce Wayne ", "Clark Kent ", "Peter Parker ", "Tony stark " ],
    answer: "Bruce Wayne"
},

{
    question: "What is the real name of Iron Man?",
    options: [ "Tony Wayne ", "Tony Stark ", "Clark Kent ", "Howard Stark"],
    answer: "Tony Stark"
  },
  {
    question:"What is Captain America super Power?",
    options:["super Strength ", "Super Fast ", "Fly " , "Super Genious"],
    answer: "Super Strength"
  },
  {
    question:"Where is the Time Stone hidden in Doctor Strange?",
    options: ["The Star ", "Eye of Agamoto ", " Planet Earth ", "Avengers Building"],
    answer: "Eye of Agamotto"
  },
  {
    question: "What species is Loki?",
    options:["Frost Giant ", "Magician ", "Human ","Asfgardian "],
    answer:  "Frost Giant"
  },
  {
    question: "What type of Doctor is Stephen Strange?",
    options:[" Neurosurgeon ","Cardiologist ", "Trauma Surgeon ","Orthopedic surgeon "],
    answer: " Neurosurgeon"
  },
  {
    question:"Who killed Tony Stark’s parents?",
    options:["King Tachala ", "The Winter Soldier ","Rocket ","Thanos "],
    answer: "The Winter Soldier"
  },
  {
    question: "What is the name of Iron Man’s loyal assistant?",
    options:["Nathasha ", "Happy ", "Pepper Potts ","Aunt May "],
    answer: "Pepper Potts"
  },
  {
    question: "Which villain got his distinct appearance from toxic chemicals at a plant?",
    options:["Pengin ", "poison Yvy ", "Two Faced ","Joker"],
    answer: "Joker"
  },
  {
    question: "Who is part of the justice leage?",
    options:["Captain Marver ", "Thanos ", "Flash ", "Hayley Quinn"],
    answer: "Flash"
  },

];


// Create a function for the trivia game 

function startTriviaGame() {
  let score = 0;
  let currentQuestionIndex = 0;

  


    // Function to display the current question and options
    function displayQuestion() {
      const currentQuestion = triviaQuestions[currentQuestionIndex];
      console.log("Question: " + currentQuestion.question);
      console.log("Options: " + currentQuestion.options.join(''));
    }



  // Function to check the user's answer
  function checkAnswer(userAnswer) {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
      console.log("Correct answer!");
      score++;
    } else {
      console.log("Wrong answer!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
      displayQuestion();
    } else {
      endTriviaGame();
    }
  }

  // Function to end the trivia game and display the final score
  function endTriviaGame() {
    console.log("Trivia game ended. Your score: " + score);
  }


  displayQuestion();
 


  function handleButtonClick(event) {
    const userAnswer = event.target.textContent;
    checkAnswer(userAnswer);
  }

  document.getElementById("option1").addEventListener("click", handleButtonClick);
  document.getElementById("option2").addEventListener("click", handleButtonClick);
  document.getElementById("option3").addEventListener("click", handleButtonClick);
  document.getElementById("option4").addEventListener("click", handleButtonClick);
}


startTriviaGame();