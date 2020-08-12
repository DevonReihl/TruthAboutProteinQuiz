'use strict';


/* 
 *User experience requirements
The following requirements cover what the app must do, from the user's perspective.

The starting screen should have a button that users can click to start the quiz.
Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
Users should be asked questions 1 after the other.
Users should only be prompted with 1 question at a time.
Users should not be able to skip questions.
Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
Upon submitting an answer, users should:
receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
be moved onto the next question (or interact with an element to move on).
Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
Users should be able to start a new quiz.
Technical requirements
Your quiz app must:

Include a render() function, that conditionally regenerates the view each time the store is updated.
Include single-purpose template generation functions.
Include event handler functions.
NOT add additional HTML elements to the boilerplate code's index.html file (you may add attributes, e.g., classes and ids, to the existing HTML elements, or link stylesheets or additional scripts if necessary).
Render answer choices in a <form>.
Use semantic HTML, along with CSS and jQuery.
Follow a11y best practices.
Be fully usable by keyboard (which will be easy enough if you start with a form).
Use responsive design.
Refer back to the previous checkpoints on responsive design and forms for any help with the HTML/CSS materials.
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

// // These functions handle events (submit, click, etc)

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

//This generates the html for the landing page
let correctAnswers = 0;

function generateStartTemplate(){
  return `
    <div class="group">
    <p class="large-text">Think you know the <span class= "text-yellow">Truth</span> about <span class="text-yellow">Protein?</span></p>
    </div>
    <div class="group">
    <p>Put your knowledge to the test!</p>
    </div>
    <div class="group">
      <form action="/action_page.php" method="get">
        <button id='start-button' class='button' type="submit" value="submit">Let's Go!</button>
      </form>
    </div>
    <div class="group">
    <p class="signature-text">A sensible quiz by <a href="https://devonreihl.github.io/portfolio.github.io/" target="_blank">Devon Reihl</a> and <a href="https://trevorjalt.github.io/trevorjalt" target="_blank">Trevor Alt</a></p>
    </div>
    <footer>
    <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}

// This generates the html for the question page
function generateQuestionTemplate(){
  const i = STORE.currentQuestion;
  return `<div class="group">
  <p class="large-text">Question <span class="text-yellow">${STORE.currentQuestion + 1} of 6</span></p>
  <p>${STORE.questions[i].question}</p>
</div>
<div class="group">
  <form action="/action_page.php" method="get">
    <div class="choice-group">
    <input type="radio" name="choice" id="answer1" value="answer1" required="">
    <label for="answer1">${STORE.questions[i].answers[0]}</label>
    </div>
    <div class="choice-group">
    <input type="radio" name="choice" id="answer2" value="answer2" required="">
    <label for="answer2">${STORE.questions[i].answers[1]}</label>
    </div>
    <div class="choice-group">
    <input type="radio" name="choice" id="answer3" value="answer3" required="">
    <label for="answer3">${STORE.questions[i].answers[2]}</label>
    </div>
    <div class="choice-group">
    <input type="radio" name="choice" id="answer4" value="answer4" required="">
    <label for="answer4">${STORE.questions[i].answers[3]}</label>
    </div>

    <div class="button-group">
      <button id="submit-button" class="button no-answer" type="submit" value="submit">Submit</button>
      <button id="restart-button" class="button" type="submit" value="restart">Restart</button>
    </div>
  </form>
</div>
<div class="group">
  <p class="large-text">Correct <span class="text-yellow"># / #</span></p>
</div>
<footer>
    <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
    </footer>`;
}

// generates the HTML for the answer page
function generateAnswerTemplate(){
  return `
  <div class="group">
  <p class="large-text">You are right!/Not Quite!</p>
  <div class="group">
  <p class="signature-text">Correct <span class="text-yellow"># / #</span></p>
  </div>
  <div class="group">
  <div class="explanation" id="explanation-box"> 
    <p>AnswerValue</p>
  </div>
</div>
<form action="/action_page.php" method="get">
<div class="button-group">
  <button id="next-button" class="button" type="submit" value="next">Next Question</button>
</div>
</form>

<footer>
  <h2 class="footer-copy">© Copyright Devon Reihl and Trevor J Alt. All Rights Reserved.</h2>
</footer>`;
}

// this generates the html for the ending page: "We're in the EndGame now." - Doctor Strange
function generateEndGameTemplate(){
  return `<div class="group">
  <p class="large-text">Results: <span class="text-yellow"># / #</span></p>
</div>
<div class="group">  
  <p>Thanks for stopping by!</p>
  <p class="signature-text">-<a href="https://devonreihl.github.io/portfolio.github.io/" target="_blank">Devon</a> and <a href="https://trevorjalt.github.io/trevorjalt" target="_blank">Trevor</a></p>
</div>
<div class="group">
  <div class="explanation" id="explanation-box"> 
    <p class="explanation-text">A special 'Thank You' to <a href="https://medium.com/tenderlymag/busting-the-myth-of-incomplete-plant-based-proteins-960428e7e91e" target="_blank">Chana Davis, PhD.</a> for her research.</p>
  </div>
</div>
<div class="group">
<form action="/action_page.php" method="get">
  <button id="restart-button" class="button" type="submit" value="restart">Again!</button>
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
function quiz(){
  //should have quiz html
  //should have check answers
  // function to end game??
}

function handleStartButton() {
  $('main').on('click', '#start-button', event => {
    // $(renderQuestionPage()).remove();
    event.preventDefault();
    renderQuestionPage();
  });
}

function handleSubmitButton() {
  $('main').on('click', '#submit-button', event => {
    // $(renderQuestionPage()).remove();
    event.preventDefault();
    renderAnswerPage();
  });
}

function handleNextButton() {
  $('main').on('click', '#next-button', event => {
    event.preventDefault();
    STORE.currentQuestion++;
    // $(renderAnswerPage()).remove();
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
    // correct_answers = 0;
    STORE.currentQuestion = 0;
    renderQuestionPage();
  });
}






// Return booleans as to whether test is finished 
function testComplete() {
  return STORE.questions.length === STORE.currentQuestion;
  // return 10 === 10; //just for testing results page, then remove  
}





function handleQuizApp(){
  renderStartPage();
  handleStartButton();
  console.log('`handleStartButton` ran');
  handleSubmitButton();
  console.log('`handleSubmitButton` ran');
  handleNextButton();
  console.log('`handleNextButton` ran');
  handleRestartButton();
  console.log('`handleRestartButton` ran');
  // renderQuestionPage();
  // console.log('`renderQuestionPage` ran');
  //holds callback functions like:
    //Should hold function for starting HTML
    //should hold function for start button which should call function quiz()
}


$(handleQuizApp);