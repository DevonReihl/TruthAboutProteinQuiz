'use strict';


/* 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateQuiz(){
  //this function with generate the wireframe for main question page
  return `<div>
      <p>Question</p>

      <form action="/action_page.php" method="get">
        <input type="radio" name="true" value="true">
        <label for="true">True</label><br>
        <input type="radio" name="false" value="false">
        <label for="false">False</label><br>

        <button type="submit" value="submit">Submit</button>
        <button type="reset" value="reset">Reset</button><br>
        <button type="submit" value="next">Next Question</button>

      </form>
    </div>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/
