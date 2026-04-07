import { Typography } from 'antd';
import Decimal from 'decimal.js';
import React from 'react';
import './desc.less';

export interface IText {
  value?: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface IDigitView extends IText {
  copyable?: boolean;
  formatter?: 'thousand' | 'percent' | 'none';
  /** 百分比计算 */
  computed?: boolean;
  precision?: number;
}

const { Text } = Typography;
export function thousandFormatter(value: string): string {
  if (!value) return value ? `${value}` : '';
  return value
    .toString()
    .replace(/\d+/, (n) => n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => $1 + ','));
}

Decimal.set({
  precision: 100, // 计算时的总有效数字位数
  rounding: Decimal.ROUND_HALF_UP, // 默认舍入方式
});

export function percentFormatter(value: string, precision: number): string {
  if (!value) return value ? `${value}` : '';
  try {
    const val = new Decimal(value).toFixed(precision).toString();
    return val;
  } catch (error) {
    return value ? `${value}` : '';
  }
}

export function divNumber(a: string, b: string): string {
  if (!a || !b) return a;
  try {
    const val = new Decimal(a).div(b).toString();
    return val;
  } catch (error) {
    return a;
  }
}

const DigitView = (props: IDigitView) => {
  const {
    hideLabel = false,
    computed = true,
    formatter = 'thousand',
    precision = 2,
    label,
    value,
    copyable,
    children,
  } = props;

  const labelVal = label ? `${label}：` : null;

  const valueStr = precision
    ? percentFormatter(`${value}`, precision)
    : `${value}`;

  const thousandStr = value
    ? formatter === 'thousand'
      ? thousandFormatter(valueStr)
      : null
    : null;

  const percentStr = value
    ? `${
        computed
          ? percentFormatter(divNumber(valueStr, '10'), precision)
          : value
      }%`
    : null;

  const digitVal =
    formatter === 'thousand'
      ? thousandStr
      : formatter === 'percent'
      ? percentStr
      : value;

  const copyText = copyable ? (
    <Text
      style={{ margin: 0, paddingLeft: 6 }}
      copyable={{ text: `${value}` }}
    />
  ) : null;

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value'].join(' ')}>
        {children ? (
          children
        ) : (
          <>
            {digitVal} {copyText}
          </>
        )}
      </div>
    </div>
  );
};

export default DigitView;
