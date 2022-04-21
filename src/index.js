import readlineSync from 'readline-sync';
import greeting from './cli.js';

const playGame = (gameQuestion, getQuestionCorrectAnswer) => {
  // Prints greeting message and returns username
  const userName = greeting();

  console.log(gameQuestion);

  let correctAnswers = 0;
  do {
    const [question, correctAnswer] = getQuestionCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = (userAnswer === correctAnswer);
    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  } while (correctAnswers < 3);
  // If answered correctly thrice.
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
