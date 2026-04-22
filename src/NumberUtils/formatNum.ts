import Decimal from 'decimal.js';

Decimal.set({
  precision: 100, // 计算时的总有效数字位数
  rounding: Decimal.ROUND_HALF_UP, // 默认舍入方式
});

// 小数位 、 千分位 、 百分数
type numType = 'Thousands' | 'Precision' | 'Percent';

interface OptionsParams {
  precision?: number;
}

// 小数位
const formatPrecision = (value: string, precision: number) => {
  return new Decimal(value).toFixed(precision);
};

// 千分位
const formatThousands = (value: string, precision?: number) => {
  const numStr = precision
    ? formatPrecision(value, precision)
    : new Decimal(value).toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 百分数
const formatPercent = (value: string, precision?: number) => {
  return `${
    precision
      ? formatPrecision(new Decimal(value).times(100).toString(), precision)
      : new Decimal(value).times(100).toString()
  }%`;
};

export const formatNum = (
  num: string,
  numType: numType,
  options: OptionsParams = {},
) => {
  if (numType === 'Thousands') return formatThousands(num, options.precision);

  if (numType === 'Precision')
    return formatPrecision(num, options.precision || 2);

  if (numType === 'Percent') return formatPercent(num, options.precision);
};
