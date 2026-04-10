import type {
  ProFormItemProps,
  RequestOptionsType,
} from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface ISelectProps extends Omit<ProFormItemProps, 'options'> {
  /** 请求接口 */
  request: (keyword: string) => Promise<RequestOptionsType[]>;
  /** 多选 */
  multiple?: boolean;
  /** 可搜索 */
  search?: boolean;
}

const Select = (props: ISelectProps) => {
  const {
    className = '',
    multiple = false,
    placeholder = '',
    search = false,
    label,
    required,
    hidden,
    request,
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
        rules={[requiredProps]}
        debounceTime={500}
        request={request}
        fieldProps={{
          ...rest?.fieldProps,
          placeholder:
            (placeholder as string) || (typeof label === 'string' ? label : ''),
          mode: multiple ? 'multiple' : undefined,
          showSearch: search,
        }}
      />
    </div>
  );
};

export default Select;
