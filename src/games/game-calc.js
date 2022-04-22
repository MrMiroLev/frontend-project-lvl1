import playGame from '../index.js';
import { getRandomInt } from '../randomGenerator.js';

const gameQuestion = 'What is the result of the expression?';

// Returns question (operand operator operand - all random) and answer for calculation
export const getQuestionAnswer = () => {
  const [minNum, maxNum] = [1, 100];
  const num1 = getRandomInt(minNum, maxNum);
  const num2 = getRandomInt(minNum, maxNum);

  const operators = ['+', '-', '*'];
  const [minIndex, maxIndex] = [0, operators.length - 1];
  const opIndex = getRandomInt(minIndex, maxIndex);
  const selectedOperator = operators[opIndex];

  const question = `${num1} ${selectedOperator} ${num2}`;

  let answer;
  // Result of 2 operands - num1 & num2
  switch (selectedOperator) {
    case '+': answer = num1 + num2; break;
    case '-': answer = num1 - num2; break;
    case '*': answer = num1 * num2; break;
    default: break;
  }
  return [question, answer.toString()];
};

const gameCalc = () => playGame(gameQuestion, getQuestionAnswer);

export default gameCalc;
