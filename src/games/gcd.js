// src/games/gcd.js
import { runGame } from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export const playGcdGame = () => runGame(generateRound, rules);