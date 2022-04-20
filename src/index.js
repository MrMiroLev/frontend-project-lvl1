import readlineSync from 'readline-sync';
import greeting from './cli.js';
import { getRandomInt, getRandomCalc } from './randomGenerator.js';
import isNumEven from './parity.js';

const getExpressionForQuestionAndCorrectAnswer = (gameSelected) => {
  if (gameSelected === 'brain-even') {
    const num = getRandomInt();
    const isEven = isNumEven(num);
    const correctAnswer = isEven ? 'yes' : 'no';
    return [num, correctAnswer];
  }
  // brain-calc
  const [expression, correctAnswer] = getRandomCalc();
  return [expression, correctAnswer];
};

// const checkAnswer = (gameSelected, userAnswer, correctAnswer) => {
//   const isAnswerCorrect = (userAnswer === correctAnswer);
//   return isAnswerCorrect;
// };

const playGame = (gameSelected, gameMainQuestion) => {
  // Greeting
  const userName = greeting();

  console.log(gameMainQuestion);

  let correctAnswers = 0;
  do {
    const [expression, correctAnswer] = getExpressionForQuestionAndCorrectAnswer(gameSelected);
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = (userAnswer === correctAnswer);
    // const isAnswerCorrect = checkAnswer(gameSelected, userAnswer, correctAnswer);
    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  } while (correctAnswers < 3);
  // If answered correctly thrice.
  return console.log(`Congratulations ${userName}!`);
};

export default playGame;
