const { right, wrong } = require('./fizzbees')

const testCases = [
  {
    description: 'Quando o número é 0',
    successCaseText: 'Retonar "Não da pra dividir por 0"',
    rightFn: () => expect(right(0)).toBe('Não da pra dividir por 0'),
    failCaseText: 'Não retonar "Não da pra dividir por 0"',
    wrongtFn: () => expect(wrong(0)).not.toBe('Não da pra dividir por 0')
  },
  {
    description: 'Quando o número é 1',
    successCaseText: 'Retonar 1',
    rightFn: () => expect(right(1)).toBe(1),
    failCaseText: 'Não retonar 1',
    wrongtFn: () => expect(wrong(1)).not.toBe(1)
  },
  {
    description: 'Quando o número é 29',
    successCaseText: 'Retonar 29',
    rightFn: () => expect(right(29)).toBe(29),
    failCaseText: 'Não retonar 29',
    wrongtFn: () => expect(wrong(29)).not.toBe(29)
  },
  {
    description: 'Quando o número é 12',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(12)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(12)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 15',
    successCaseText: 'Retonar fizzbees',
    rightFn: () => expect(right(15)).toBe('fizzbees'),
    failCaseText: 'Não retonar fizzbees',
    wrongtFn: () => expect(wrong(15)).not.toBe('fizzbees')
  },
  {
    description: 'Quando o número é 18',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(18)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(18)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 20',
    successCaseText: 'Retonar bees',
    rightFn: () => expect(right(20)).toBe('bees'),
    failCaseText: 'Não retonar bees',
    wrongtFn: () => expect(wrong(20)).not.toBe('bees')
  },
  {
    description: 'Quando o número é 21',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(21)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(21)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 24',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(24)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(24)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 25',
    successCaseText: 'Retonar bees',
    rightFn: () => expect(right(25)).toBe('bees'),
    failCaseText: 'Não retonar bees',
    wrongtFn: () => expect(wrong(25)).not.toBe('bees')
  },
  {
    description: 'Quando o número é 27',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(27)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(27)).not.toBe('fizz')
  },
  {
    description: 'Quando o número é 66',
    successCaseText: 'Retonar fizz',
    rightFn: () => expect(right(66)).toBe('fizz'),
    failCaseText: 'Não retonar fizz',
    wrongtFn: () => expect(wrong(66)).not.toBe('fizz')
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
