import Decimal from 'decimal.js';

Decimal.set({
  precision: 100,
  rounding: Decimal.ROUND_HALF_UP,
});

export type NumberValue = string | number;
export type CompareOperator = '>=' | '=' | '>' | '<' | '<=';

const toDecimal = (value: NumberValue) => {
  try {
    return new Decimal(value);
  } catch (error) {
    return undefined;
  }
};

const compareResult = (a: NumberValue, b: NumberValue) => {
  const decimalA = toDecimal(a);
  const decimalB = toDecimal(b);

  if (!decimalA || !decimalB) {
    return undefined;
  }

  return decimalA.cmp(decimalB);
};

export const compare = (
  a: NumberValue,
  operator: CompareOperator,
  b: NumberValue,
) => {
  const result = compareResult(a, b);

  if (result === undefined) {
    return false;
  }

  switch (operator) {
    case '>=':
      return result >= 0;
    case '=':
      return result === 0;
    case '>':
      return result > 0;
    case '<':
      return result < 0;
    case '<=':
      return result <= 0;
    default:
      return false;
  }
};

export const getMaxNum = (numbers: NumberValue[]) => {
  let maxNum: NumberValue | undefined;
  let maxDecimal: Decimal | undefined;

  numbers.forEach((current) => {
    const currentDecimal = toDecimal(current);

    if (!currentDecimal) {
      return;
    }

    if (!maxDecimal || currentDecimal.cmp(maxDecimal) > 0) {
      maxNum = current;
      maxDecimal = currentDecimal;
    }
  });

  return maxNum;
};

export const getMinNum = (numbers: NumberValue[]) => {
  let minNum: NumberValue | undefined;
  let minDecimal: Decimal | undefined;

  numbers.forEach((current) => {
    const currentDecimal = toDecimal(current);

    if (!currentDecimal) {
      return;
    }

    if (!minDecimal || currentDecimal.cmp(minDecimal) < 0) {
      minNum = current;
      minDecimal = currentDecimal;
    }
  });

  return minNum;
};
