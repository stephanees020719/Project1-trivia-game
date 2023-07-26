//superhero trivia game 
//get score every correct answer 
//give scores
//evaluate correct or wrong answer

//1. Define array of superheroe trivia questions
const triviaQuestions = [
{
    question:" What is Batman real name? ",
    answers:[
      {text:"Bruce Wayne ", correct: true},
       {text:"Clark Kent ", correct: false},
        {text:"Peter Parker ", correct: false},
         {text:"Tony stark ", correct: false}
         ]
   
},

{
    question: "What is the real name of Iron Man?",
    answers: [
      {text: "Tony Wayne ", correct : false},
      {text: "Tony Stark ", correct: true},
      {text: "Clark Kent ", correct: false},
      {text: "Howard Stark", correct: false}
    ]
   
  },
  {
    question:"What is Captain America super Power?",
    answers:[
      {text: "super Strength ", correct: true},
      {text: "Super Fast ", correct: false},
      {text: "Fly " , correct: false},
      {text: "Super Genious", correct: false}
    ]
     
  },
  {
    question:"Where is the Time Stone hidden in Doctor Strange?",
    answers: [
      {text: "The Star ", correct: false},
      {text: "Eye of Agamoto ", correct: true},
      {text: " Planet Earth ", correct: false},
      {text: "Avengers Building", correct:false}
    ]
   
  },
  {
    question: "What species is Loki?",
    answers:[
      {text: "Frost Giant ", correct: true},
      {text: "Magician ", correct: false},
      {text: "Human ", correct: false},
       {text: "Asfgardian ", correct: false}
      ]
   
  },
  {
    question: "What type of Doctor is Stephen Strange?",
    answers:[
      {text:" Neurosurgeon ", correct: true},
    {text:"Cardiologist ", correct: false},
    {text: "Trauma Surgeon ", correct: false},
    {text:"Orthopedic surgeon ", correct: false},
  ]
   
  },
  {
    question:"Who killed Tony Stark’s parents?",
    answers:[
      {text:"King Tachala ", correct: false},
      {text: "The Winter Soldier ", correct: true},
      {text: "Rocket ", correct: false},
      {text: "Thanos ", correct: false}
    ]
   
  },
  {
    question: "What is the name of Iron Man’s loyal assistant?",
    
    answers:[
      {text:"Natasha ", correct: false},
      {text: "Happy", correct: false},
      {text: "Pepper Potts ", correct: true},
      {text: "Aunt May ", correct: false}
    ]
    
  },
  {
    question: "Which villain got his distinct appearance from toxic chemicals at a plant?",
   
    answers:[
      {text:"Pengin ", correct: false},
      {text: "Poison Yvy ", correct: false},
      {text: "Two Faced ", correct: false},
      {text: "Joker ", correct: true}
    ]

  },
  {
    question: "Who is part of the justice leage?",
    

    answers:[
      {text:"Captain Marvel ", correct: false},
      {text: "Thanos ", correct: false},
      {text: "Flash ", correct: true},
      {text: "Harley Quinn ", correct: false}
    ]
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
    if (userAnswer === currentQuestion.answers) {
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