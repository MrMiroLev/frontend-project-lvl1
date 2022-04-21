import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

// Checks whether integer is even or not
const isNumEven = (num) => {
  const isOdd = Boolean(num % 2);
  const isEven = !isOdd;
  return isEven;
};

// Returns random number as a question
// and answer 'yes' / 'no' for even / odd number respectively
export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  // Number is a question
  const question = getRandomInt(minNum, maxNum);
  const isEven = isNumEven(question);
  const answer = isEven ? 'yes' : 'no';
  return [question, answer];
};

const gameEven = () => playGame(gameQuestion, getQuestionAnswer);

export default gameEven;
