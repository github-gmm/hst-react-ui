import { Badge } from 'antd';
import React from 'react';
import './desc.less';

export interface IText {
  value?: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface IBadgeView extends IText {
  success?: boolean;
}

const BadgeView = (props: IBadgeView) => {
  const { hideLabel = false, label, value, children, success = false } = props;

  const labelVal = label ? `${label}：` : null;

  const badgeStatus: 'success' | 'default' = success ? 'success' : 'default';

  const badge = value ? <Badge status={badgeStatus} text={value} /> : null;

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value'].join(' ')}>
        {children ? children : badge}
      </div>
    </div>
  );
};

export default BadgeView;
