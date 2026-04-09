import Decimal from 'decimal.js';

Decimal.set({
  precision: 100, // 计算时的总有效数字位数
  rounding: Decimal.ROUND_HALF_UP, // 默认舍入方式
});

// cmp() 是专门做比较的：
export const compare = (a: string | number, b: string | number) => {
  try {
    return new Decimal(a).cmp(new Decimal(b));
  } catch (error) {
    return 2;
  }
};

// 返回 1：前者大于后者
export const maxNum = (a: string | number, b: string | number) => {
  return compare(a, b) === 1;
};

// 返回 -1：前者小于后者
export const minNum = (a: string | number, b: string | number) => {
  return compare(a, b) === -1;
};

// 返回 0：相等
export const sameNum = (a: string | number, b: string | number) => {
  return compare(a, b) === 0;
};
