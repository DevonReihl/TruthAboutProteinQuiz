/* eslint-disable no-undef */
'use strict';

//declare global variable
let score=0;
let results='';

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// This generates the html for the landing page
function generateStartTemplate(){
  return `
    <div class="group">
      <p class="large-text">think you know the <span class= "text-yellow">truth</span> about <span class="text-yellow">protein?</span></p>
    </div>
    <div class="group">
      <p>put your knowledge to the test!</p>
    </div>
    <div class="group">
      <form action="/action_page.php" method="get">
        <button id='start-button' class='button' type="submit" value="submit">let's go!</button>
      </form>
    </div>
    <div class="group">
      <p class="signature-text">a sensible quiz by <a href="https://devonreihl.github.io/portfolio.github.io/" target="_blank">Devon Reihl</a> and <a href="https://trevorjalt.github.io/trevorjalt" target="_blank">Trevor Alt</a>.</p>
    </div>
    <footer>
      <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}

// This generates the html for the question page
function generateQuestionTemplate(){
  const i = STORE.currentQuestion;
  return `
    <div class="group">
      <p class="large-text">question <span class="text-yellow">${STORE.currentQuestion + 1} of 6</span></p>
      <p>${STORE.questions[i].question}</p>
    </div>
    <div>
      <form action="/action_page.php" method="get">
        <div class="flex-inline">
          <div class="choice-group question">
            <input type="radio" name="choice" id="answer1" value="${STORE.questions[i].answers[0]}" required="">
            <label for="answer1">${STORE.questions[i].answers[0]}</label>
          </div>
          <div class="choice-group question">
            <input type="radio" name="choice" id="answer2" value="${STORE.questions[i].answers[1]}">
            <label for="answer2">${STORE.questions[i].answers[1]}</label>
          </div>
          <div class="choice-group question">
            <input type="radio" name="choice" id="answer3" value="${STORE.questions[i].answers[2]}">
            <label for="answer3">${STORE.questions[i].answers[2]}</label>
          </div>
          <div class="choice-group question">
            <input type="radio" name="choice" id="answer4" value="${STORE.questions[i].answers[3]}">
            <label for="answer4">${STORE.questions[i].answers[3]}</label>
          </div>
        </div>

        <div class="button-group">
          <button id="submit-button" class="button" type="submit" value="submit">submit.</button>
          <button id="restart-button" class="button" type="submit" value="restart">restart.</button>
        </div>
      </form>
    </div>
    <div class="group">
      <p class="large-text">correct <span class="text-yellow">${score} / 6</span></p>
    </div>
    <footer>
      <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}

// generates the HTML for the answer page
function generateAnswerTemplate(){
  const i = STORE.currentQuestion;
  return `
    <div class="group">
      <p class="large-text">${results}</p>
      <p><span class="correct-text">correct answer:</span> ${STORE.questions[i].correctAnswer}</p>
    <div class="group">
      <p class="correct-text">correct <span class="text-yellow">${score} / 6</span></p>
    </div>
    <div class="group">
      <div class="explanation" id="explanation-box"> 
        <p class="explanation-text">${STORE.questions[i].explainMore}</p>
      </div>
    </div>
    <div-class="group">
      <form action="/action_page.php" method="get">
        <div class="button-group">
          <button id="next-button" class="button" type="submit" value="next">next.</button>
        </div>
      </form>
    </div>
    <footer>
      <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}

// this generates the html for the ending page: "We're in the EndGame now." - Doctor Strange
function generateEndGameTemplate(){
  return `
    <div class="group">
      <p class="large-text">results: <span class="text-yellow">you got ${score} / 6!</span></p>
    </div>
    <div class="group">  
      <p>thanks for stopping by!</p>
      <p class="signature-text">-<a href="https://devonreihl.github.io/portfolio.github.io/" target="_blank">Devon</a> and <a href="https://trevorjalt.github.io/trevorjalt" target="_blank">Trevor</a></p>
    </div>
    <div class="group">
      <div class="explanation" id="explanation-box"> 
        <p class="explanation-text">a special 'thank you' to <a href="https://medium.com/tenderlymag/busting-the-myth-of-incomplete-plant-based-proteins-960428e7e91e" target="_blank">Chana Davis, PhD.</a> for her research.</p>
      </div>
    </div>
    <div class="group">
      <form action="/action_page.php" method="get">
        <div class="button-group">
          <button id="restart-button" class="button" type="submit" value="restart">again!</button>
        </div>
      </form>
    </div>
    <footer>
      <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
//should have function to render question

// render landing page in the DOM
function renderStartPage() {
  $('main').html(generateStartTemplate());
}

// render question page in the DOM
function renderQuestionPage() {
  $('main').html(generateQuestionTemplate());
}

//render answer page in the DOM
function renderAnswerPage() {
  $('main').html(generateAnswerTemplate());
}

//render endgame page in the DOM
function renderEndGamePage() {
  $('main').html(generateEndGameTemplate());
}


/********** EVENT HANDLER FUNCTIONS **********/
function handleStartButton() {
  $('main').on('click', '#start-button', event => {
    // $(renderQuestionPage()).remove();
    event.preventDefault();
    renderQuestionPage();
  });
}

function handleSubmitButton() {
  $('main').on('submit', 'form', event => {
    // $(renderQuestionPage()).remove();
    event.preventDefault();
  
    const selected = $('input:checked');
    const answer = selected.val();
    results = checkAnswer(answer);
  
    renderAnswerPage(results);
    
  });
}

function handleNextButton() {
  $('main').on('click', '#next-button', event => {
    event.preventDefault();
    STORE.currentQuestion++;
    if (testComplete()) {
      renderEndGamePage();
    } else {
      renderQuestionPage();
    }
  });
}

// restarts the quiz and resets variables 
function handleRestartButton() {
  $('main').on('click', '#restart-button', event => {
    event.preventDefault();
    score = 0;
    STORE.currentQuestion = 0;
    renderQuestionPage();
  });
}

function increaseScore(){
  score++;
}


function checkAnswer(ans){
  const i = STORE.currentQuestion;
  if (ans === STORE.questions[i].correctAnswer){
    increaseScore();
    return 'you know a truth about protein!'; 
  }
  else{
    return 'sorry, you got the wrong answer.';
  }
}

// Return booleans as to whether test is finished 
function testComplete() {
  return STORE.questions.length === STORE.currentQuestion; 
}



function handleQuizApp(){
  renderStartPage();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}


$(handleQuizApp);