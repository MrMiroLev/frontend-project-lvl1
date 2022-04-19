#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

// Greeting
console.log('Welcome to the Brain Games!');
const userName = greeting();

// Returns a number from 0 to <100
const getRandomInt = () => {
  const num = Math.floor(Math.random() * 100);
  const isOdd = Boolean(num % 2);
  // !isOdd = isEven
  const correctAnswer = !isOdd ? 'yes' : 'no';
  return [num, !isOdd, correctAnswer];
};

// Main
const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  do {
    const [num, isEven, correctAnswer] = getRandomInt();
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = (isEven === true && userAnswer === 'yes') || (isEven === false && userAnswer === 'no');
    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  } while (correctAnswers < 3);
  // If answered correctly thrice.
  return console.log(`Congratulations ${userName}`);
};

brainEven();
