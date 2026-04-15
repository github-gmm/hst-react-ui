import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormDatePicker } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import {
  getTimeByDay,
  getTimeByMonth,
  getTimeByYear,
} from 'hst-react-ui/DateUtils';
import React from 'react';
import './field.less';

export interface IDatePickerProps extends ProFormItemProps {
  className?: string;
  /** 可选时间 */
  isShowTime?: boolean;
  /** 日期格式化 */
  formatType?: string;
  /** 不展示 */
  hide?: boolean;
}

const DateText = (props: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        fontWeight: 500,
        color: 'var(--theme-primary-color)',
      }}
    >
      {props.children}
    </span>
  );
};

export const Presets = [
  {
    label: <DateText>昨天</DateText>,
    value: dayjs(getTimeByDay(-1, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一周前</DateText>,
    value: dayjs(getTimeByDay(-7, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一月前</DateText>,
    value: dayjs(getTimeByMonth(-1, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>三月前</DateText>,
    value: dayjs(getTimeByMonth(-3, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一年前</DateText>,
    value: dayjs(getTimeByYear(-1, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一周后</DateText>,
    value: dayjs(getTimeByDay(7, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一月后</DateText>,
    value: dayjs(getTimeByMonth(1, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>三月后</DateText>,
    value: dayjs(getTimeByMonth(3, 'YYYY-MM-DD')),
  },
  {
    label: <DateText>一年后</DateText>,
    value: dayjs(getTimeByYear(1, 'YYYY-MM-DD')),
  },
];

const DatePicker = (props: IDatePickerProps) => {
  const {
    rules = [],
    className = '',
    hide = false,
    isShowTime,
    label,
    required,
    hidden,
    ...rest
  } = props;

  const { formatType = isShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD' } =
    props;

  const requiredProps = {
    required: required,
    // message: `${label}不能为空`,
  };

  return (
    !hide && (
      <div
        className={`common-field ${className}`}
        style={{ display: hidden ? 'none' : undefined }}
      >
        <ProFormDatePicker
          {...rest}
          label={label}
          fieldProps={{
            ...rest.fieldProps,
            placeholder: `${label}`,
            presets: Presets,
            showTime: isShowTime,
            format: formatType,
          }}
          rules={[requiredProps, ...rules]}
        />
      </div>
    )
  );
};

export default DatePicker;
