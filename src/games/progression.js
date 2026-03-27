// src/games/progression.js
import { runGame } from '../index.js';

const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 2;
const MAX_STEP = 9;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = () => {
  const length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
  const start = getRandomInt(MIN_START, MAX_START);
  const step = getRandomInt(MIN_STEP, MAX_STEP);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const generateRound = () => {
  const progression = generateProgression();
  const hiddenIndex = getRandomInt(0, progression.length - 1);

  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = String(hiddenValue);

  return [question, correctAnswer];
};

const rules = 'What number is missing in the progression?';

export const playProgressionGame = () => runGame(generateRound, rules);