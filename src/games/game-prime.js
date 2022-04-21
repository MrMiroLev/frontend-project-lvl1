import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// Predicate
const isPrime = (num) => primes.includes(num);

export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  // Number is a question
  const question = getRandomInt(minNum, maxNum);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const gamePrime = () => playGame(gameQuestion, getQuestionAnswer);

export default gamePrime;
