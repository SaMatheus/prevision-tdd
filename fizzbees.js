
const fizzBees = (() => {
  const validators = (number) => {
    const equals0 = number === 0
    const divisibleBy3 = number % 3 === 0
    const divisibleBy5 = number % 5 === 0
    const divisibleBy3and5 = divisibleBy3 && divisibleBy5

    return {
      equals0,
      divisibleBy3,
      divisibleBy5,
      divisibleBy3and5
    }
  };

  const right = (number) => {
    if (validators(number).equals0) return 'Não da pra dividir por 0'
    if (validators(number).divisibleBy3and5) return 'fizzbees'
    if (validators(number).divisibleBy3) return 'fizz'
    if (validators(number).divisibleBy5) return 'bees'
    else return number
  };
  
  const wrong = (number) => {
    if (validators(number).equals0) return number
    if (validators(number).divisibleBy3and5) return number
    if (validators(number).divisibleBy3) return number
    if (validators(number).divisibleBy5) return number
    else return 'fezzbees'
  };

  return {
    right,
    wrong
  }
})()

module.exports = fizzBees;
