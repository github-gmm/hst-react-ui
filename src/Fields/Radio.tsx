import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormRadio } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface IRadioProps extends Omit<ProFormItemProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
  }[];
}

const Radio = (props: IRadioProps) => {
  const {
    className = '',
    rules = [],
    item,
    required,
    hidden,
    label,
    ...rest
  } = props;

  const requiredProps = {
    required: required,
    // message: `${label}不能为空`,
  };

  return (
    <div
      className={`common-field ${className}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <ProFormRadio.Group
        {...rest}
        hidden={hidden}
        label={label}
        options={item}
        rules={[requiredProps, ...rules]}
      />
    </div>
  );
};

export default Radio;
