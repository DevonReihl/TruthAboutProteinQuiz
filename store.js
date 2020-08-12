'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Where does all protein originate?',
      answers: [
        'dairy',
        'animals',
        'plants',
        'the moon'
      ],
      correctAnswer: 'plants'
    },
    {
      question: 'Protein is long chains of what?',
      answers: [
        'ascorbic acid',
        'triglycerides',
        'hydrochloirc acid',
        'amino acids'
      ],
      correctAnswer: 'amino acids'
    },
    {
      question: 'How make amino acids are used to build proteins?',
      answers: [
        '9',
        '20',
        '11',
        '8'
      ],
      correctAnswer: '20'
    },
    {
      question: 'What makes an amino acid "essential"?',
      answers: [
        'They are made by humans only',
        'They are used to build muscles',
        'They are needed to create proteins',
        'They are only found in supplements'
      ],
      correctAnswer: 'They are needed to create proteins'
    },
    {
      question: 'How many amino acids does the human body make naturally?',
      answers: [
        '8',
        '11',
        '20',
        '15'
      ],
      correctAnswer: '11'
    },
    {
      question: 'How many essential amino acids are there?',
      answers: [
        '8',
        '9',
        '10',
        '11'
      ],
      correctAnswer: '9'
    }


  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
