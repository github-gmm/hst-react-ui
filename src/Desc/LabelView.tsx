import { Tag } from 'antd';
import React from 'react';
import './desc.less';

export interface IText {
  value?: string[];
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface ILabelView extends IText {
  success?: boolean;
  primary?: boolean;
}

const colorMap = [
  'green',
  'orange',
  'cyan',
  'blue',
  'purple',
  'magenta',
  'geekblue',
  'volcano',
  'gold',
  'red',
];

const LabelView = (props: ILabelView) => {
  const { hideLabel = false, label, value, children } = props;

  const labelVal = label ? `${label}：` : null;

  const tags =
    value && value.length > 0 ? (
      <div className="desc-labels">
        {value?.map((val, _i) => {
          const col = _i <= 9 ? colorMap[_i] : 'default';
          return (
            <Tag key={_i} color={col} bordered={true}>
              {val}
            </Tag>
          );
        })}
      </div>
    ) : null;

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value'].join(' ')}>
        {children ? children : tags}
      </div>
    </div>
  );
};

export default LabelView;
