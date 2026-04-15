import type { ProFormCheckboxGroupProps } from '@ant-design/pro-components';
import { ProFormCheckbox } from '@ant-design/pro-components';
import React from 'react';

export interface ICheckboxProps
  extends Omit<ProFormCheckboxGroupProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
  }[];
  /** 不展示 */
  hide?: boolean;
}

const Checkbox = (props: ICheckboxProps) => {
  const {
    className = '',
    rules = [],
    hide = false,
    label,
    required,
    item,
    hidden,
    ...rest
  } = props;

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
        <ProFormCheckbox.Group
          {...rest}
          label={label}
          options={item}
          rules={[requiredProps, ...rules]}
        />
      </div>
    )
  );
};

export default Checkbox;
