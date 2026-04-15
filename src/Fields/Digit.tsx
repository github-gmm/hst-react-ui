import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-components';
import { useDebounceFn } from 'ahooks';
import { maxNum, minNum } from 'hst-react-ui/NumberUtils';
import React from 'react';
import './field.less';

export interface INumberProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 整数位数: 默认10 */
  digits?: number;
  /** 小数位数: 默认8 */
  precision?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 自定义 */
  suffix?: React.ReactNode;
  /** 不展示 */
  hide?: boolean;
  /** 可监听 */
  onChange?: (value: string) => void;
}

const Digit = (props: INumberProps) => {
  const {
    precision = 8,
    digits = 10,
    className = '',
    rules = [],
    placeholder = '',
    hide = false,
    suffix,
    label,
    required,
    hidden,
    min,
    max,
    onChange = () => {},
    ...rest
  } = props;

  const requiredRule = {
    required: required,
    // message: `${label}不能为空`,
  };

  const normalizeNumberInput = (input: string): string => {
    if (!input) return '';

    // 1. 处理负号
    const hasMinus = input.startsWith('-');
    let raw = hasMinus ? input.slice(1) : input;

    // 2. 只保留数字和第一个小数点
    let filtered = '';
    let hasDot = false;
    for (const ch of raw) {
      if (ch >= '0' && ch <= '9') {
        filtered += ch;
      } else if (ch === '.' && !hasDot) {
        filtered += ch;
        hasDot = true;
      }
    }

    // 允许仅输入 "-" 作为中间态
    if (hasMinus && !filtered) return '-';

    // 3. 拆分整数/小数部分（保留类似 "123." 的状态）
    const dotIndex = filtered.indexOf('.');
    let intPart = dotIndex === -1 ? filtered : filtered.slice(0, dotIndex);
    let fracPart = dotIndex === -1 ? '' : filtered.slice(dotIndex + 1);
    const hasTrailingDot = dotIndex !== -1 && dotIndex === filtered.length - 1;

    // ⭐ 3.1 如果是 ".xxx" 这种，自动补 0 → "0.xxx"
    if (intPart === '' && dotIndex === 0) {
      intPart = '0';
    }

    // 4. 整数位数限制
    if (typeof digits === 'number' && digits >= 0) {
      if (intPart.length > digits) {
        intPart = intPart.slice(0, digits);
      }
    }

    // 5. 小数位数限制
    if (typeof precision === 'number' && precision >= 0) {
      if (fracPart.length > precision) {
        fracPart = fracPart.slice(0, precision);
      }
    }

    // 6. 处理前导 0
    if (intPart) {
      if (!fracPart && !hasTrailingDot) {
        // 纯整数
        intPart = intPart.replace(/^0+/, '') || '0';
      } else {
        // 有小数点，允许 "0.xxx"
        intPart = intPart.replace(/^0+(\d)/, '0$1');
        if (intPart === '') intPart = '0';
      }
    }

    // 7. 拼接
    let normalized = intPart;
    if (dotIndex !== -1) {
      if (hasTrailingDot && fracPart === '') {
        normalized = `${intPart}.`; // 支持输入中间态 "123."
      } else if (fracPart !== '') {
        normalized = `${intPart}.${fracPart}`;
      }
    }

    // 8. 负号
    if (
      hasMinus &&
      normalized !== '0' &&
      normalized !== '0.' &&
      normalized !== ''
    ) {
      normalized = `-${normalized}`;
    }

    return normalized;
  };

  const getValueFromEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e?.target?.value ?? '';
    return normalizeNumberInput(input);
  };

  const rangeRule =
    min !== undefined || max !== undefined
      ? {
          validator(_: any, value?: string) {
            // 允许为空，交给 requiredRule 处理
            if (value === undefined || value === null || value === '') {
              return Promise.resolve();
            }
            if (min !== undefined && minNum(value, min)) {
              return Promise.reject(`不能小于 ${min}`);
            }
            if (max !== undefined && maxNum(value, max)) {
              return Promise.reject(`不能大于 ${max}`);
            }
            return Promise.resolve();
          },
        }
      : undefined;

  const { run: onChangeDebounce } = useDebounceFn(onChange, { wait: 500 });

  return (
    !hide && (
      <div
        className={`common-field ${className}`}
        style={{ display: hidden ? 'none' : undefined }}
      >
        <ProFormText
          {...rest}
          label={label}
          getValueFromEvent={getValueFromEvent}
          fieldProps={{
            ...rest?.fieldProps,
            placeholder:
              (placeholder as string) ||
              (typeof label === 'string' ? label : ''),
            onChange: (e) => {
              onChangeDebounce(`${e.target.value}`);
            },
            suffix: suffix,
          }}
          rules={
            [requiredRule, rangeRule, ...rules].filter(
              Boolean,
            ) as ProFormItemProps['rules']
          }
        />
      </div>
    )
  );
};

export default Digit;
