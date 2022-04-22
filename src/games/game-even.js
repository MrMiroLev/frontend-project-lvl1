import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// Checks whether integer is even or not
// Note: -1 = true
const isEven = (num) => Boolean((num % 2) - 1);

// Question: random integer
// Answer: 'yes' / 'no' for even / odd number respectively
export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  // Question is an integer
  const question = getRandomInt(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameEven = () => playGame(gameTask, getQuestionAnswer);

export default gameEven;
