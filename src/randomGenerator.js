// Returns a number from 0 to < maxNum
export const getRandomInt = (minNum, maxNum) => {
  const num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  return num;
};

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const selectedOperator = operators[opIndex];
  return selectedOperator;
};
