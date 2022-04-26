import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const remainder = num1 % num2;
  if (remainder === 0) return num2.toString();
  return gcd(num2, remainder);
};

export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];

  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);
  const answer = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, answer];
};

const gameGCD = () => playGame(gameTask, getQuestionAnswer);

export default gameGCD;
