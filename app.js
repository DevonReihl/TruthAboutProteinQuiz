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
function quizStart(){
  return `<p>Think you know the truth about Protein?</p><br>
    <p>Put your knowledge to the test!</p>
    <div class="one">
    <form action="/action_page.php" method="get">
      <button type="submit" value="submit">Start Quiz</button>
    </form>
    </div>`;
}
//this function with generate the wireframe for main question page
function generateQuiz(){
  
  return `<div class="two">
      

  <form action="/action_page.php" method="get">
    <p>QUESTION</p> <!-- fill QUESTION with jQuery -->
    
    <div>
      <input type="radio" id="option1"
       name="contact" value="text">
      <label for="option1">ANSWER</label> <!-- fill ANSWER with jQuery to access answers -->

      <input type="radio" id="option2"
       name="contact" value="text">
      <label for="option2">ANSWER</label>
  
      <input type="radio" id="option3"
       name="contact" value="text">
      <label for="option3">ANSWER</label>

      <input type="radio" id="option4"
       name="contact" value="text">
      <label for="option4">ANSWER</label>
  
      <input type="radio" id="option5"
       name="contact" value="text">
      <label for="option5">ANSWER</label>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</div>`;
}

function endGame(){
  `<div class="three">
  <p>Score</p>
  <p>
    Thank you to Dr. Chana Davis, PhD for her research.<br>
     To learn more please visit (link) <!--https://medium.com/tenderlymag/busting-the-myth-of-incomplete-plant-based-proteins-960428e7e91e  -->
  </p>

  <form action="/action_page.php" method="get">
    <button type="submit" value="submit">Start Quiz</button>
  </form>
  
</div>`;
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
  //should have function to render question
  



/********** EVENT HANDLER FUNCTIONS **********/
function quiz(){
  //should have quiz html
  //should have check answers
  // function to end game??
}

function handleQuizApp(){
  //holds all the callback functions like:
    //Should hold function for starting HTML
    //should hold function for start button which should call function quiz()
    
}


$(handleQuizApp);