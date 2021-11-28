
const sum = () => {
  // return params.reduce((acc, current) => {
  //   return acc + current;
  // }, 0);

  const aa = [];

  Array.prototype.forEach.call(arguments, (argument) => {
    aa.push(argument);
  });

  return aa.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

const average = (...params) => {
  return sum(...params) / params.length;
};

console.log(sum(0, 124323, 456, 123, 56));

// sum.apply(null, [1, 2, 3, 4, 5]); // quebra o array em vários itens e passa para a função sum
// sum.call(null, 1, 2, 3, 4, 5); // null = this. passa os argumentos de forma separada

// console.log(sum(0, 9, 17, 12), average(0, 9, 17, 12, 23, 77));