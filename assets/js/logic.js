// Quiz questions and answers
var quizQuestions = [
    {
        question: '1. How many hearts does an octopus have?',
        options: [
            '5 hearts',
            '4 hearts',
            '3 hearts',
            '2 hearts',
            '1 heart'
        ],
        answer: '3 hearts',
    },
    {
        question: '2. What is acrophobia a fear of?',
        options: [
            'Heights',
            'Widths',
            'Spiders',
            'Acrobats',
            'Ants'
        ],
        answer: 'Heights',
    },
    {
        question: '3. Which is the only body part that is fully grown from birth?',
        options: [
            'Hands',
            'Legs',
            'Heart',
            'Head',
            'Eyes'
        ],
        answer: 'Eyes',
    },
    {
        question: '4. What planet is closest to the sun?',
        options: [
            'Earth',
            'Mars',
            'Mercury',
            'Jupiter',
            'Venus'
        ],
        answer: 'Mercury',
    },
    {
        question: '5. What is the only continent with land in all four hemispheres?',
        options: [
            'North America',
            'Africa',
            'Australia',
            'Antarctica',
            'Eurasia'
        ],
        answer: 'Africa',
    },
];
   
    
console.log(quizQuestions);
console.log(Object.values(quizQuestions[0])[2]);
console.log(Object.values(quizQuestions[0])[1].length);
// Select DOM elements
var quizButton = document.getElementById('start');
var startScreen = document.getElementById('start-screen');
var questions = document.getElementById('questions');
var question = document.getElementById('question-title');
var choices = document.getElementById('choices');
var time = document.getElementById('time');
var secondsLeft = 75;

// Function that starts quiz
function startQuiz () {
    startScreen.remove();
    questions.setAttribute('class', 'show');
    question.textContent = Object.values(quizQuestions[0])[0];
       
   
    // timer
    var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if(secondsLeft === 0) {
    // Stops execution of action at set interval
      clearInterval(timerInterval);
    };

  }, 1000);
   
    for ( var i = 0; i < Object.values(quizQuestions[0])[1].length; i++ ) {
        var answer = document.createElement('button');
        answer.textContent = Object.values(quizQuestions[0])[1][i];
        choices.appendChild(answer);
        answer.setAttribute('class', 'btnChoice');
        console.log(answer.textContent);
    };
    
};
      
quizButton.addEventListener('click', startQuiz);

// Get the HTML collection of new created buttons
var btnChoice = document.getElementsByClassName('choices');
    console.log(btnChoice);

// The function that shows a next question
function getNextQuestion() {
     answer.textContent = Object.values(quizQuestions[1])[1][1];
    //  for ( var i = 0; i < Object.values(quizQuestions[0])[1].length; i++ ) {
        
    //     answer.textContent = Object.values(quizQuestions[i+1])[1][i];
    //     choices.appendChild(answer);
    //     answer.setAttribute('class', 'btnChoice');
        
    // };
 };


 btnChoice.addEventListener('click', getNextQuestion);
