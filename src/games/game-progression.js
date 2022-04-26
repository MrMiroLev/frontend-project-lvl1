import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameTask = 'What number is missing in the progression?';

// Arithmetic Progresssion (AP) definitions:
// a = the first term / initial value
// n = n-th term
// d = common difference between terms
// l = AP length (amount of terms in an AP)
// n-th term of an AP (formula): a+(n-1)d
const arithmeticProgressionCalc = (a, n, d) => {
  const result = a + (n - 1) * d;
  return result;
};

const getProgressions = (a, l, d) => {
  const progressionColl = [];
  const progressionCollHiddenNum = [];
  for (let term = 1; term <= l; term += 1) {
    const num = arithmeticProgressionCalc(a, term, d);
    progressionColl.push(num);
    progressionCollHiddenNum.push(num);
  }
  return [progressionColl, progressionCollHiddenNum];
};

export const getQuestionAnswer = () => {
  const [minProgressionLength, maxProgressionLength] = [5, 15];
  const progressionLength = getRandomInt(minProgressionLength, maxProgressionLength);

  const [minCommonDiff, maxCommonDiff] = [1, 25];
  const commonDiff = getRandomInt(minCommonDiff, maxCommonDiff);

  const [minInitialNum, maxInitialNum] = [1, 100];
  const initialNum = getRandomInt(minInitialNum, maxInitialNum);

  const [minIndex, maxIndex] = [0, progressionLength - 1];
  const indexWithHiddenNum = getRandomInt(minIndex, maxIndex);

  const [, progressionCollHiddenNum] = getProgressions(initialNum, progressionLength, commonDiff);

  const answer = progressionCollHiddenNum[indexWithHiddenNum].toString();

  progressionCollHiddenNum[indexWithHiddenNum] = '..';
  const question = progressionCollHiddenNum.join(' ');

  return [question, answer];
};

const gameProgression = () => playGame(gameTask, getQuestionAnswer);

export default gameProgression;
