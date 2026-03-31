import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface ITextProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 长度限制 */
  max?: number;
  /** 自动转大写 */
  autoToUpperCase?: boolean;
}

const Text = (props: ITextProps) => {
  const {
    max = 500,
    rules = [],
    className = '',
    placeholder = '',
    autoToUpperCase,
    required,
    hidden,
    label,
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
      <ProFormText
        {...rest}
        label={label}
        hidden={hidden}
        fieldProps={{
          ...rest.fieldProps,
          maxLength: max,
          placeholder:
            (placeholder as string) || (typeof label === 'string' ? label : ''),
        }}
        getValueFromEvent={(e) => {
          const raw = e?.target?.value ?? '';
          let value = raw.replace(/^\s+|\s+$/g, '');
          if (autoToUpperCase) {
            value = value.toUpperCase();
          }
          if (value.length > max) {
            value = value.slice(0, max);
          }
          return value;
        }}
        rules={[requiredProps, ...rules]}
      />
    </div>
  );
};

export default Text;
