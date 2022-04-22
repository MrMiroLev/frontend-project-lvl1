import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

// Returns the Greatest Common Divisor for 'a' and 'b' integers
const gcd = (a, b) => {
  const remainder = a % b;
  if (remainder === 0) return b.toString();
  return gcd(b, remainder);
};

// Returns 2 random numbers as a question and answer for gcd
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
