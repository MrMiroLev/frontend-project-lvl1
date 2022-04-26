import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  const firstPrime = 2;
  if (num === firstPrime) {
    return true;
  }

  const maxDivisor = Math.floor(num / 2);
  for (let i = 0; i <= maxDivisor - firstPrime; i += 1) {
    const divisor = i + firstPrime;
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  const question = getRandomInt(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const gamePrime = () => playGame(gameTask, getQuestionAnswer);

export default gamePrime;
