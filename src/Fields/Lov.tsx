import type { ProFormSelectProps } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface ILovProps extends Omit<ProFormSelectProps, 'options'> {
  item?: {
    label: string;
    value: string | number;
    disabled?: boolean; // 不可选择
    otherField?: Record<string, any>;
  }[];
  /** 多选 */
  multiple?: boolean;
  /** 可搜索 */
  search?: boolean;
  /** 不展示 */
  hide?: boolean;
  /** 可监听 */
  onChange?: (value: string, option: any) => void;
}

const Lov = (props: ILovProps) => {
  const {
    multiple = false,
    className = '',
    rules = [],
    placeholder = '',
    search = false,
    hide = false,
    label,
    required,
    item,
    hidden,
    onChange = () => {},
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
        <ProFormSelect
          {...rest}
          label={label}
          options={item}
          fieldProps={{
            ...rest?.fieldProps,
            placeholder:
              (placeholder as string) ||
              (typeof label === 'string' ? label : ''),
            mode: multiple ? 'multiple' : undefined,
            showSearch: search,
            filterOption: search,
            onChange: onChange,
          }}
          rules={[requiredProps, ...rules]}
        />
      </div>
    )
  );
};

export default Lov;
