// Returns a number from 0 to < maxNum
export const getRandomInt = () => {
  const maxNum = 100;
  const num = Math.floor(Math.random() * maxNum);
  return num;
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const selectedOperator = operators[opIndex];
  return selectedOperator;
};
