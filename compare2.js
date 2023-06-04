const bigLettersCount = (str) => str.replace(/[a-z]/g, '').length;

const compare = (first, second) => Math.sign(bigLettersCount(first) - bigLettersCount(second));

const greaterThan = (first, second) =>
  compare(first, second) === 1;

const lessThan = (first, second) =>
  compare(first, second) === -1;

const isEqual = (first, second) =>
  compare(first, second) === 0;