import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// Note: -1 = true
const isEven = (num) => Boolean((num % 2) - 1);

export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  const question = getRandomInt(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameEven = () => playGame(gameTask, getQuestionAnswer);

export default gameEven;
