import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm, ProFormTextArea } from '@ant-design/pro-components';
import { useDebounceFn } from 'ahooks';
import React, { useRef } from 'react';
import './field.less';

export interface IJsonProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 不展示 */
  hide?: boolean;
  /** 可监听 */
  onChange?: (value: string) => void;
}

const Json = (props: IJsonProps) => {
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

  const jsonRule = {
    validator: (_: any, value: string) => {
      if (!value) return Promise.resolve();
      try {
        JSON.parse(value);
        return Promise.resolve();
      } catch {
        return Promise.reject(new Error('JSON格式错误'));
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
            <ProFormTextArea
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
              rules={[requiredProps, jsonRule, ...rules]}
            />
          </div>
        </ProForm.Item>
      </div>
    )
  );
};

export default Json;
