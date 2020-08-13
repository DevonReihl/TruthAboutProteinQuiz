'use strict';

// eslint-disable-next-line no-unused-vars
const STORE = {
  // 5 or more questions are required
  currentQuestion: 0,
  questions: [
    
    {
      question: 'where does all protein originate?',
      answers: [
        'dairy',
        'animals',
        'plants',
        'the moon'
      ],
      correctAnswer: 'plants',
      explainMore: '"All animals ultimately get their protein from plants (or plant-like phytoplankton)— either directly or indirectly through the food chain." - Chana Davis, PhD. '

    },
    {
      question: 'proteins are long chains of what?',
      answers: [
        'ascorbic acid',
        'triglycerides',
        'hydrochloirc acid',
        'amino acids'
      ],
      correctAnswer: 'amino acids',
      explainMore: '"Proteins are long chains of amino acids. Picture an alphabet bead necklace where each bead is an amino acid. Each protein is defined by its unique sequence of amino acids (beads)." - Chana Davis, PhD.'
      
    },
    {
      question: 'how many amino acids are used to build proteins?',
      answers: [
        '9',
        '20',
        '11',
        '8'
      ],
      correctAnswer: '20',
      explainMore: 'Consider this: "Plants use the same 20 amino acids as humans to build their proteins (the genetic code is universal)." - Chana Davis, PhD.'
    },
    {
      question: 'why are certain amino acids considered "essential"?',
      answers: [
        'the human body is unable to produce them',
        'they are only found in bovine animals',
        'they are only found in fish',
        'they are only found in supplements'
      ],
      correctAnswer: 'the human body is unable to produce them',
      explainMore: '"In healthy adults, nine of the 20 amino acids are considered essential (also called indispensable). Your body cannot make them, so they must come from your diet." - Chana Davis, PhD.'
    },
    
    {
      question: 'how many essential amino acids are there?',
      answers: [
        '8',
        '9',
        '10',
        '11'
      ],
      correctAnswer: '9',
      explainMore: 'Just making sure you were paying attention! Remember: In healthy adults, nine of the 20 amino acids are considered essential (also called indispensable). Your body cannot make them, so they must come from your diet." - Chana Davis, PhD.'
    },
    {
      question: 'how many amino acids does the human body make naturally?',
      answers: [
        '8',
        '11',
        '20',
        '15'
      ],
      correctAnswer: '11',
      explainMore: '"The other 11 key amino acids are considered “non-essential,” as your body can make them. Some amino acids are “conditionally” essential — needed only in certain stages of life or for certain diseases." - Chana Davis, PhD.'
    },
  
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
