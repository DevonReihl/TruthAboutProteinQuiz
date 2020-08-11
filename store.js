'use strict';

/**
 * Example store structure
 */
// const store = {
//     // 5 or more questions are required
//     questions: [
//       {
//         question: 'What color is broccoli?',
//         answers: [
//           'red',
//           'orange',
//           'pink',
//           'green'
//         ],
//         correctAnswer: 'green'
//       },
//       {
//         question: 'What is the current year?',
//         answers: [
//           '1970',
//           '2015',
//           '2019',
//           '2005'
//         ],
//         correctAnswer: '2019'
//       }
//     ],
//     quizStarted: false,
//     questionNumber: 0,
//     score: 0
//   };
  
//   /*

// create out questions and answers here reference in Html

// // These functions handle events (submit, click, etc)

// Does all protein come from plants? T  wrong answer links to information
// Proteins are long chains of triglycerides? F they are long chains of amino acids
// the Human body makes all 20 essential amino acids? F human body only makes 11
// There are 9 essential amino acids to make up a complete protein? T  wrong answer says body doesn't make those nine.
// All plants are missing amino acids to be a proper protein? F They have moderate amounts of all 20 essential amino acids.
// The best way to get your proper amount of protein is to eat fish? F no it is best to eat a varity of whole foods.

const STORE = [
  {question: 'Does all protein come from plants?', answer: true, explanation: ''},
  {question: 'Proteins are long chains of triglycerides?', answer: false, explanation: 'Proteins are long chains of amino acids.' },
  {question: 'The Human body makes all 20 essential amino acids?', answer: false, explanation: 'In healthy adults, 9 of the 20 amino acids are considered essential (also called indispensable). Your body cannot make them, so they must come from your diet'},
  {question: 'There are 9 essential amino acids to make up a complete protein?', answer: true, explanation: 'A food (or combination of foods) is considered to be a complete protein source if it provides “enough” of each of the nine essential amino acids'},
  {question: 'All plants are missing amino acids to be a proper protein?', answer: false, explanation: 'The widely held belief that plant-based proteins are “incomplete” or “missing” amino acids traces back to a 1971 book'},
  {question: 'The best way to get your proper amount of protein is to eat fish?', answer: false, explanation: 'Eat a variety of whole foods.'},
];