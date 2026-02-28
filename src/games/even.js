import { runGame } from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const generateRound = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const question = String(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const playEvenGame = () => runGame(generateRound, rules);