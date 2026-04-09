import { formatTime } from 'hst-react-ui';
import React from 'react';
import './desc.less';

export interface IText {
  value: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface IDateView extends IText {
  dataType?: string;
  definedType?: string;
  options?: {
    timezone?: string;
    utc?: number;
    offset?: string;
  };
}

const DateView = (props: IDateView) => {
  const {
    hideLabel = false,
    label,
    value,
    children,
    dataType = 'YYYY-MM-DD HH:mm:ss',
    options,
  } = props;

  const labelVal = label ? `${label}：` : null;

  const text = formatTime(value, dataType, options);

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value'].join(' ')}>
        {children ? children : <>{text}</>}
      </div>
    </div>
  );
};

export default DateView;
