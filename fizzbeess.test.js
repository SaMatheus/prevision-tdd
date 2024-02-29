const fizzbees = (number) => {
  if (number === 0) return 'Não da pra dividir por 0'
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbees'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'bees'
  else return number
};
const fizzbeesWrong = (number) => {
  if (number === 0) return number
  if (number % 3 === 0 && number % 5 === 0) return number
  if (number % 3 === 0) return number
  if (number % 5 === 0) return number
  else return 'fezzbees'
};

const testCases = [
  {
    description: 'Quando o número é 0',
    successCaseText: 'Retonar "Não da pra dividir por 0"',
    rightFn: () => expect(fizzbees(0)).toBe('Não da pra dividir por 0'),
    failCaseText: 'Não retonar "Não da pra dividir por 0"',
    wrongtFn: () => expect(fizzbeesWrong(0)).not.toBe('Não da pra dividir por 0')
  },
  {
    description: 'Quando o número é 1',
    successCaseText: 'Retonar 1',
    rightFn: () => expect(fizzbees(1)).toBe(1),
    failCaseText: 'Não retonar 1',
    wrongtFn: () => expect(fizzbeesWrong(1)).not.toBe(1)
  },
  {
    description: 'Quando o número é 29',
    successCaseText: 'Retonar 29',
    rightFn: () => expect(fizzbees(29)).toBe(29),
    failCaseText: 'Não retonar 29',
    wrongtFn: () => expect(fizzbeesWrong(29)).not.toBe(29)
  },
  {
    description: 'Quando o número é 12',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(12)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(12)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 15',
    successCaseText: 'Retonar fizzbees',
    rightFn: () => expect(fizzbees(15)).toBe('fizzbees'),
    failCaseText: 'Não retonar fizzbees',
    wrongtFn: () => expect(fizzbeesWrong(15)).not.toBe('fizzbees')
  },
  {
    description: 'Quando o número é 18',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(18)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(18)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 20',
    successCaseText: 'Retonar bees',
    rightFn: () => expect(fizzbees(20)).toBe('bees'),
    failCaseText: 'Não retonar bees',
    wrongtFn: () => expect(fizzbeesWrong(20)).not.toBe('bees')
  },
  {
    description: 'Quando o número é 21',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(21)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(21)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 24',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(24)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(24)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 25',
    successCaseText: 'Retonar bees',
    rightFn: () => expect(fizzbees(25)).toBe('bees'),
    failCaseText: 'Não retonar bees',
    wrongtFn: () => expect(fizzbeesWrong(25)).not.toBe('bees')
  },
  {
    description: 'Quando o número é 27',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(27)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(27)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 66',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(fizzbees(66)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(fizzbeesWrong(66)).not.toBe('fizz')
  }
];

const testConstructor = (element) => {
  const { description, successCaseText, failCaseText, rightFn, wrongtFn } = element;

  describe('Success Cases', () => {
    describe(description, () => test(successCaseText,  () => rightFn()));
  })

  describe('Fail Cases', () => {
    describe(description, () => test(failCaseText,  () => wrongtFn()));
  })

};

describe(
  'Os números divisiveis por 3 e 5 devem ser correspondentes aos textos fizz e buss',
  () => testCases.forEach((element) => testConstructor(element))
)
