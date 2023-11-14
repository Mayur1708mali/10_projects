const Questions = [
  {
    question: 'What is capital of India?',
    options: ['Gandhinagar', 'Surat', 'Delhi', 'Mumbai'],
    answer: 'Delhi',
  },
  {
    question: 'What is the capital of Thailand?',
    options: ['Lampang', 'Phuket', 'Ayutthaya', 'Bangkok'],
    answer: 'Bangkok',
  },
  {
    question: 'What is the capital of Gujarat',
    options: ['Surat', 'Vadodara', 'Gandhinagar', 'Rajkot'],
    answer: 'Surat',
  },
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
    answer: 'Jupiter',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: [
      'Pacific Ocean',
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
    ],
    answer: 'Pacific Ocean',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Cu', 'Fe'],
    answer: 'Au',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Pablo Picasso',
      'Vincent van Gogh',
      'Leonardo da Vinci',
      'Michelangelo',
    ],
    answer: 'Leonardo da Vinci',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest species of shark?',
    options: [
      'Great White Shark',
      'Whale Shark',
      'Tiger Shark',
      'Hammerhead Shark',
    ],
    answer: 'Whale Shark',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    answer: 'Lion',
  },
];

let currentQue = 0;
let score = 0;

function loadQue() {
  const que = document.getElementById('que');
  const opt = document.getElementById('opt');
  const lengthofopt = Questions[currentQue].options.length;

  que.textContent = Questions[currentQue].question;
  opt.innerHTML = '';

  for (i = 0; i < lengthofopt; i++) {
    const optionDiv = document.createElement('div');
    const option = document.createElement('input');
    const optionLabel = document.createElement('label');

    option.type = 'radio';
    option.name = 'answer';
    option.value = i;

    optionLabel.textContent = Questions[currentQue].options[i];

    optionDiv.appendChild(option);
    optionDiv.appendChild(optionLabel);
    opt.appendChild(optionDiv);
  }
}

loadQue();

function loadScore() {
  const totalScore = document.getElementById('score');
  totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQue() {
  if (currentQue < Questions.length - 1) {
    currentQue++;
    loadQue();
  } else {
    document.getElementById('opt').remove();
    document.getElementById('que').remove();
    document.getElementById('btn').remove();
    loadScore();
  }
}
function checkAns() {
  const selectedAns = parseInt(
    document.querySelector('input[name="answer"]:checked').value
  );

  const ansWer = Questions[currentQue].options[selectedAns];

  if (Questions[currentQue].answer === ansWer) {
    score++;
    nextQue();
  } else {
    nextQue();
  }
}
