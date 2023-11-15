// Quiz questions and answers
var quizQuestions = [
    {
        question: '1. How many hearts does an octopus have?',
        options: [
            'a. 5 hearts',
            'b. 4 hearts',
            'c. 3 hearts',
            'd. 2 hearts',
            'e. 1 heart'
        ],
        answer: 'c. 3 hearts',
    },
    {
        question: '2. What is acrophobia a fear of?',
        options: [
            'a. Heights',
            'b. Widths',
            'c. Spiders',
            'd. Acrobats',
            'e. Ants'
        ],
        answer: 'a. Heights',
    },
    {
        question: '3. Which is the only body part that is fully grown from birth?',
        options: [
            'a. Hands',
            'b. Legs',
            'c. Heart',
            'd. Head',
            'e. Eyes'
        ],
        answer: 'e. Eyes',
    },
    {
        question: '4. What planet is closest to the sun?',
        options: [
            'a. Earth',
            'b. Mars',
            'c. Mercury',
            'd. Jupiter',
            'e. Venus'
        ],
        answer: 'c. Mercury',
    },
    {
        question: '5. What is the only continent with land in all four hemispheres?',
        options: [
            'a. North America',
            'b. Africa',
            'c. Australia',
            'd. Antarctica',
            'e. Eurasia'
        ],
        answer: 'b. Africa',
    },
];
   
// Variables
var quizButton = document.getElementById('start');
var startScreen = document.getElementById('start-screen');
var questions = document.getElementById('questions');
var question = document.getElementById('question-title');
var choices = document.getElementById('choices');
var time = document.getElementById('time');
var timer = document.getElementsByClassName('timer');
var secondsLeft = 75;
var indexQuestion = 0;
var feedback = document.getElementById('feedback');
var endScreen = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var submit = document.getElementById('submit');
var input = document.getElementById('initials');
var scoreTable = [];

// Function that starts quiz
function startQuiz () {
    startScreen.remove();
    questions.setAttribute('class', 'show');
    question.textContent = quizQuestions[0].question;
       
    // Timer
    var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if(secondsLeft <= 0) {
    // Stops execution of action at set interval
        clearInterval(timerInterval);
    };

  }, 1000);
   
    for ( var i = 0; i < quizQuestions[indexQuestion].options.length; i++ ) {
       var answers = document.createElement('button');
        answers.textContent = quizQuestions[indexQuestion].options[i];
        choices.appendChild(answers);
        answers.setAttribute('class', 'btnChoice');
        //console.log(answer.textContent);
        answers.addEventListener('click', checkAnswer);
    };
};

// Call the startQuiz function
quizButton.addEventListener('click', startQuiz);

// Check answers
function checkAnswer(event) {
    console.log(event);
    var userChoice = event.target.textContent;
    console.log(userChoice);
    var correctAnswer = quizQuestions[indexQuestion].answer;
    console.log(correctAnswer)
    if (userChoice === correctAnswer) {
        feedback.textContent = 'Correct!'
        feedback.style.color = 'Green'
    } else {
        secondsLeft -= 10;
        feedback.textContent = 'Not Correct!';
        feedback.style.color = 'Red';
    };
    indexQuestion++;
    setTimeout(getNextQuestion, 1000)
};


// The function that shows a next question
function getNextQuestion() {

    feedback.textContent = '';
    // Check if the question exist
    if (!quizQuestions[indexQuestion]) {
        return endQuiz();
    };

    question.textContent = quizQuestions[indexQuestion].question;
    choices.innerHTML = '';


    for (var i = 0; i < quizQuestions[indexQuestion].options.length; i++) {
        var nextAswers = document.createElement('button');
        nextAswers.textContent = quizQuestions[indexQuestion].options[i];
        choices.appendChild(nextAswers);
        nextAswers.setAttribute('class', 'btn');
        nextAswers.addEventListener('click', checkAnswer);
    };
};

function endQuiz() {
    questions.setAttribute('class', 'hide');
    time.remove();
    endScreen.setAttribute('class', 'show');
    finalScore.textContent = secondsLeft;
    submit.addEventListener('submit', function (e) {
        e.preventDefault();
        var inputInitials = input.value.trim();
        console.log(inputInitials);
        console.log(scoreTable.push(inputInitials + secondsLeft + 'sec'));
        input.value = '';
    });
};

