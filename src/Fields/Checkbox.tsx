import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormCheckbox } from '@ant-design/pro-components';
import React from 'react';

export interface ICheckboxProps extends Omit<ProFormItemProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
  }[];
}

const Checkbox = (props: ICheckboxProps) => {
  const {
    className = '',
    rules = [],
    label,
    required,
    item,
    hidden,
    ...rest
  } = props;

  const requiredProps = {
    required: required,
    message: `${label}不能为空`,
  };

  return (
    <div
      className={`common-field ${className}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <ProFormCheckbox.Group
        {...rest}
        label={label}
        options={item}
        rules={[requiredProps, ...rules]}
      />
    </div>
  );
};

export default Checkbox;
