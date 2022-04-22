import readlineSync from 'readline-sync';

const playGame = (gameQuestion, getQuestionCorrectAnswer) => {
  // Greeting and username request
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameQuestion);

  const totalRounds = 3;
  for (let round = 1; round <= totalRounds; round += 1) {
    const [question, correctAnswer] = getQuestionCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = (userAnswer === correctAnswer);
    if (isAnswerCorrect) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  }
  // If answered correctly thrice.
  return console.log(`Congratulations, ${userName}!`);
};

export default playGame;
