import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface ILovProps extends Omit<ProFormItemProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
  }[];
  /** 多选 */
  multiple?: boolean;
  /** 可搜索 */
  search?: boolean;
}

const Lov = (props: ILovProps) => {
  const {
    multiple = false,
    className = '',
    rules = [],
    placeholder = '',
    search = false,
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
    <div
      className={`common-field ${className}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      <ProFormSelect
        {...rest}
        label={label}
        options={item}
        fieldProps={{
          ...rest?.fieldProps,
          placeholder:
            (placeholder as string) || (typeof label === 'string' ? label : ''),
          mode: multiple ? 'multiple' : undefined,
          showSearch: search,
          filterOption: search,
        }}
        rules={[requiredProps, ...rules]}
      />
    </div>
  );
};

export default Lov;
