// Returns a number from 0 to < maxNum
export const getRandomInt = () => {
  const maxNum = 100;
  const num = Math.floor(Math.random() * maxNum);
  return num;
};

export const getRandomCalc = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  const operators = ['+', '-', '*'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const selectedOperator = operators[opIndex];
  const expression = `${num1} ${selectedOperator} ${num2}`;

  let res;
  // Result of 2 operands - num1 & num2
  switch (opIndex) {
    case 0: res = num1 + num2; break;
    case 1: res = num1 - num2; break;
    case 2: res = num1 * num2; break;
    default: break;
  }
  return [expression, res.toString()];
};
