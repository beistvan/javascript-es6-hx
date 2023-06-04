const bigLettersCount = (str) => {
    return (str.trim().match(/^[A-Z ]{1}/g) || []).length;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  return (firstCount > secondCount ? 1 : (firstCount < secondCount ? -1 : 0));
};

const greaterThan = (first, second) =>
  compare(first, second) === 1;

const lessThan = (first, second) =>
  compare(first, second) === -1;

const isEqual = (first, second) =>
  compare(first, second) === 0;