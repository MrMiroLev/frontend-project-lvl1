// Checks whether integer is even or not
export default (num) => {
  const isOdd = Boolean(num % 2);
  const isEven = !isOdd;
  return isEven;
};
