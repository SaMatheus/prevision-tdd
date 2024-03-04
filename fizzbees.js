
const fizzBees = (() => {
  const right = (number) => {
    if (number === 0) return 'Não da pra dividir por 0'
    if (number % 3 === 0 && number % 5 === 0) return 'fizzbees'
    if (number % 3 === 0) return 'fizz'
    if (number % 5 === 0) return 'bees'
    else return number
  };
  
  const wrong = (number) => {
    if (number === 0) return number
    if (number % 3 === 0 && number % 5 === 0) return number
    if (number % 3 === 0) return number
    if (number % 5 === 0) return number
    else return 'fezzbees'
  };

  return {
    right,
    wrong
  }
})()

module.exports = fizzBees;
