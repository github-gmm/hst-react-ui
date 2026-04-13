import { ProForm } from '@ant-design/pro-components';
import { Select } from 'antd';
import React from 'react';
import Textarea, { ITextareaProps } from './Textarea';

import './field.less';
import './sty/i18nText.less';

export interface I18nTextareaProps {
  /** 布局 */
  layout?: 'vertical' | 'horizontal';
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  hidden?: boolean;
  textareaProps?: Omit<ITextareaProps, 'label' | 'name' | 'required'>;
  /** 多语言配置 */
  langConfig: {
    value: string;
    label: string;
  }[];
}
const I18nTextarea = (props: I18nTextareaProps) => {
  const {
    layout = 'vertical',
    className = '',
    hidden = false,
    name,
    label,
    required,
    langConfig,
    textareaProps,
  } = props;

  const isSplit = layout === 'horizontal';

  return (
    <div
      className={`common-field ${className}`}
      style={{ display: hidden ? 'none' : undefined }}
    >
      {isSplit ? (
        langConfig?.map((item) => (
          <div key={`${name}${item.value}`} className="i18n-text-field">
            <Textarea
              {...textareaProps}
              name={`${name}${item.value}`}
              label={`${label}(${item.label})`}
              required={required}
              isShowCount={false}
            />
          </div>
        ))
      ) : (
        <ProForm.Item label={label} required={required}>
          <div className="i18n-text-field-items">
            {langConfig?.map((item) => (
              <div
                className="i18n-text-field-item"
                key={`${name}${item.value}`}
              >
                <Select
                  options={[{ label: item.label, value: item.label }]}
                  value={item.label}
                />
                <Textarea
                  {...textareaProps}
                  label=""
                  className="i18n-text-field-item-text"
                  name={`${name}${item.value}`}
                  required={required}
                  placeholder={`${label}(${item.label})`}
                  isShowCount={false}
                />
              </div>
            ))}
          </div>
        </ProForm.Item>
      )}
    </div>
  );
};

export default I18nTextarea;
