// Returns a number from 0 to < maxNum
export const getRandomInt = (minNum, maxNum) => {
  const num = minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  return num;
};

export default getRandomInt;
