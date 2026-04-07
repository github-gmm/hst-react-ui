import { Tooltip, Typography } from 'antd';
import React, { useMemo } from 'react';
import './desc.less';

export interface IText {
  value?: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface ITextareaView extends IText {
  maxLines?: number;
  copyable?: boolean;
  // 是否自动换行, 兼容链接字符
  wrap?: boolean;
}

const { Text } = Typography;

const TextareaView = (props: ITextareaView) => {
  const {
    hideLabel = false,
    label,
    value,
    children,
    maxLines,
    wrap,
    copyable,
  } = props;

  const labelVal = label ? `${label}：` : null;

  const content = children ? children : <span>{value}</span>;

  const descStyle = useMemo(
    () => ({
      '--line-clamp': maxLines,
    }),
    [maxLines],
  );

  const copyText = copyable ? (
    <Text style={{ margin: 0 }} copyable={{ text: `${value}` }} />
  ) : null;

  return (
    <div
      className={['common-desc', 'desc-textarea'].join(' ')}
      style={descStyle as React.CSSProperties}
    >
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      {copyText}
      <div className={['desc-value'].join(' ')}>
        {children ? (
          children
        ) : (
          <>
            <Tooltip
              title={<div className="tooltip-content">{value}</div>}
              open={value ? undefined : false}
            >
              <div
                className={[
                  'desc-value-textarea',
                  wrap ? 'text-wrap' : '',
                ].join(' ')}
              >
                {content}
              </div>
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default TextareaView;
