// Variables
var highscores = document.getElementById('highscores');
var buttonClear = document.getElementById('clear');
console.log(highscores);

//  Get and show my initials and score
getHightScore();
function getHightScore() {
    var highscore = document.createElement('li');
    var name = JSON.parse(localStorage.getItem('scoreTable'));
    console.log(name)
    highscore.textContent = name[0] + ' ' + '-' + ' ' + name[1];
    highscores.appendChild(highscore);
}; 


// Clear hightscores
function getClear() {
    highscores.remove();
    localStorage.clear('scoreTable');
};

buttonClear.addEventListener('click', getClear);