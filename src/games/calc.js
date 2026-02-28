import { runGame } from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 25; // чтобы ответы не были слишком большими

const OPERATORS = ['+', '-', '*'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const rules = 'What is the result of the expression?';

export const playCalcGame = () => runGame(generateRound, rules);