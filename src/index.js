import readlineSync from 'readline-sync';

const playGame = (gameTask, getQuestionCorrectAnswer) => {
  // Greeting and username request
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  const totalRounds = 3;
  for (let roundsDoneCount = 0; roundsDoneCount < totalRounds; roundsDoneCount += 1) {
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
