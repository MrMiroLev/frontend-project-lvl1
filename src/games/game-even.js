import playGame from '../index.js';

export default () => {
  const gameName = 'brain-even';
  const brainCalcQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(gameName, brainCalcQuestion);
};
