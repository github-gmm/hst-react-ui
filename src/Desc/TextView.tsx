import { Typography } from 'antd';
import React from 'react';
import './desc.less';

export interface IText {
  value?: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface ITextView extends IText {
  copyable?: boolean;
  // 是否自动换行
  wrap?: boolean;
}

const { Text } = Typography;

const TextView = (props: ITextView) => {
  const {
    hideLabel = false,
    label,
    value,
    copyable,
    children,
    wrap = false,
  } = props;

  const labelVal = label ? `${label}：` : null;

  const copyText = copyable ? (
    <Text
      style={{ margin: 0, paddingLeft: 6 }}
      copyable={{ text: `${value}` }}
    />
  ) : null;

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value', wrap ? 'text-wrap' : ''].join(' ')}>
        {children ? (
          children
        ) : (
          <>
            {value} {copyText}
          </>
        )}
      </div>
    </div>
  );
};

export default TextView;
