import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useDebounceFn } from 'ahooks';
import React, { useRef } from 'react';
import './field.less';

export interface ITextProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 不展示 */
  hide?: boolean;
  /** 可监听 */
  onChange?: (value: string) => void;
}

const Link = (props: ITextProps) => {
  const textRef = useRef('');

  const {
    rules = [],
    className = '',
    placeholder = '',
    hide = false,
    required,
    hidden,
    label,
    onChange = () => {},
    ...rest
  } = props;

  const linkRule = {
    validator: (_: any, value: string) => {
      if (!value) return Promise.resolve();
      try {
        new URL(value);
        return Promise.resolve();
      } catch {
        return Promise.reject(new Error('链接格式错误'));
      }
    },
  };

  const requiredProps = {
    required: required,
    // message: `${label}不能为空`, // 不限制
  };

  const { run: onChangeDebounce } = useDebounceFn(onChange, { wait: 500 });

  return (
    !hide && (
      <div
        className={`common-field ${className}`}
        style={{ display: hidden ? 'none' : undefined }}
      >
        <ProForm.Item label={label} required={required}>
          <div className="common-field-value">
            <ProFormText
              {...rest}
              hidden={hidden}
              fieldProps={{
                ...rest.fieldProps,
                placeholder:
                  (placeholder as string) ||
                  (typeof label === 'string' ? label : ''),
                onChange: (e) => {
                  textRef.current = e.target.value;
                  onChangeDebounce(e.target.value);
                },
              }}
              rules={[requiredProps, linkRule, ...rules]}
            />
          </div>
        </ProForm.Item>
      </div>
    )
  );
};

export default Link;
