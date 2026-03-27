// src/games/prime.js
import { runGame } from '../index.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Предикат: проверка, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const playPrimeGame = () => runGame(generateRound, rules);