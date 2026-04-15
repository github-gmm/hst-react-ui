import type { ProFormRadioGroupProps } from '@ant-design/pro-components';
import { ProFormRadio } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface IRadioProps extends Omit<ProFormRadioGroupProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
  }[];
  /** 不展示 */
  hide?: boolean;
}

const Radio = (props: IRadioProps) => {
  const {
    className = '',
    rules = [],
    hide = false,
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
    !hide && (
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
    )
  );
};

export default Radio;
