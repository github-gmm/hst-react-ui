import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import type { ProFormItemProps } from '@ant-design/pro-components';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useDebounceFn } from 'ahooks';
import { Button } from 'antd';
import React, { useRef } from 'react';
import './field.less';

export interface ITextProps
  extends Omit<ProFormItemProps, 'getValueFromEvent'> {
  /** 长度限制: 默认500 */
  max?: number;
  /** 自动转大写 */
  autoToUpperCase?: boolean;
  /** 自动转小写 */
  autoToLowerCase?: boolean;
  /** 是否搜索中 */
  isSearchLoading?: boolean;
  /** 是否展示长度: 默认打开 */
  isShowCount?: boolean;
  /** 不展示 */
  hide?: boolean;
  /** 可搜索 */
  onSearch?: (value: string) => void;
  /** 可监听 */
  onChange?: (value: string) => void;
}

const Text = (props: ITextProps) => {
  const textRef = useRef('');

  const {
    max = 500,
    rules = [],
    className = '',
    placeholder = '',
    isSearchLoading = false,
    autoToUpperCase = false,
    autoToLowerCase = false,
    isShowCount = true,
    hide = false,
    required,
    hidden,
    label,
    onSearch,
    onChange = () => {},
    ...rest
  } = props;

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
        <ProForm.Item {...rest} label={label} required={required}>
          <div className="common-field-value">
            <ProFormText
              {...rest}
              hidden={hidden}
              fieldProps={{
                ...rest.fieldProps,
                showCount: isShowCount,
                maxLength: max,
                placeholder:
                  (placeholder as string) ||
                  (typeof label === 'string' ? label : ''),
                onChange: (e) => {
                  textRef.current = e.target.value;
                  onChangeDebounce(e.target.value);
                },
              }}
              getValueFromEvent={(e) => {
                const raw = e?.target?.value ?? '';
                let value = raw.replace(/^\s+|\s+$/g, '');
                if (autoToUpperCase) {
                  value = value.toUpperCase();
                }
                if (autoToLowerCase) {
                  value = value.toLowerCase();
                }
                if (value.length > max) {
                  value = value.slice(0, max);
                }
                return value;
              }}
              rules={[requiredProps, ...rules]}
            />
            {onSearch && (
              <Button
                type="primary"
                onClick={() => {
                  if (!isSearchLoading) onSearch(textRef.current);
                }}
              >
                {isSearchLoading ? <LoadingOutlined /> : <SearchOutlined />}
              </Button>
            )}
          </div>
        </ProForm.Item>
      </div>
    )
  );
};

export default Text;
