import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormDateRangePicker } from '@ant-design/pro-components';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import React from 'react';
import {
  getTimeByDay,
  getTimeByMonth,
  getTimeByYear,
  getToday,
} from '../DateUtils';
import './field.less';

export interface IDateRangePickerProps extends ProFormItemProps {
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

export const RangePresets: RangePickerProps['presets'] = [
  {
    label: <DateText>今天</DateText>,
    value: [dayjs(getToday('YYYY-MM-DD')), dayjs(getToday('YYYY-MM-DD'))],
  },
  {
    label: <DateText>昨天</DateText>,
    value: [
      dayjs(getTimeByDay(-1, 'YYYY-MM-DD')),
      dayjs(getTimeByDay(-1, 'YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>过去一周</DateText>,
    value: [
      dayjs(getTimeByDay(-7, 'YYYY-MM-DD')),
      dayjs(getToday('YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>过去一月</DateText>,
    value: [
      dayjs(getTimeByMonth(-1, 'YYYY-MM-DD')),
      dayjs(getToday('YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>过去三月</DateText>,
    value: [
      dayjs(getTimeByMonth(-3, 'YYYY-MM-DD')),
      dayjs(getToday('YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>过去一年</DateText>,
    value: [
      dayjs(getTimeByYear(-1, 'YYYY-MM-DD')),
      dayjs(getToday('YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>未来一周</DateText>,
    value: [
      dayjs(getToday('YYYY-MM-DD')),
      dayjs(getTimeByDay(7, 'YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>未来一月</DateText>,
    value: [
      dayjs(getToday('YYYY-MM-DD')),
      dayjs(getTimeByMonth(1, 'YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>未来三月</DateText>,
    value: [
      dayjs(getToday('YYYY-MM-DD')),
      dayjs(getTimeByMonth(3, 'YYYY-MM-DD')),
    ],
  },
  {
    label: <DateText>未来一年</DateText>,
    value: [
      dayjs(getToday('YYYY-MM-DD')),
      dayjs(getTimeByYear(1, 'YYYY-MM-DD')),
    ],
  },
];

const DateRangePicker = (props: IDateRangePickerProps) => {
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
        <ProFormDateRangePicker
          {...rest}
          label={label}
          fieldProps={{
            ...rest.fieldProps,
            presets: RangePresets,
            showTime: isShowTime,
            format: formatType,
          }}
          rules={[requiredProps, ...rules]}
        />
      </div>
    )
  );
};

export default DateRangePicker;
