import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProFormTextArea } from '@ant-design/pro-components';
import React from 'react';
import './field.less';

export interface ITextareaProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 长度限制: 默认500 */
  max?: number;
  /** 是否展示长度: 默认打开 */
  isShowCount?: boolean;
}

const Textarea = (props: ITextareaProps) => {
  const {
    max = 500,
    className = '',
    placeholder = '',
    rules = [],
    isShowCount = true,
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
      <ProFormTextArea
        {...rest}
        label={label}
        fieldProps={{
          ...rest.fieldProps,
          maxLength: max,
          showCount: isShowCount,
          placeholder:
            (placeholder as string) || (typeof label === 'string' ? label : ''),
        }}
        getValueFromEvent={(e: any) => {
          const raw = e?.target?.value ?? '';
          let value = raw.replace(/^\s+|\s+$/g, '');
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

export default Textarea;
