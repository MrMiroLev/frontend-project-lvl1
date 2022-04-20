import playGame from '../index.js';

export default () => {
  const gameName = 'brain-calc';
  const brainCalcQuestion = 'What is the result of the expression?';
  playGame(gameName, brainCalcQuestion);
};
