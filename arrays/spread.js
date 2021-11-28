const spread = [0, 1, 2];

const sum = (...numbers) => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
}

console.log(sum(...spread));

const formattedSpread = [...spread, 3, 4, 5];

console.log(sum(...formattedSpread));