import { ProForm } from '@ant-design/pro-components';
import { Select } from 'antd';
import React from 'react';
import Text, { ITextProps } from './Text';

import './field.less';
import './sty/i18nText.less';

export interface I18nTextProps {
  /** 布局 */
  layout?: 'vertical' | 'horizontal';
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  hidden?: boolean;
  textProps?: Omit<ITextProps, 'label' | 'name' | 'required'>;
  /** 多语言配置 */
  langConfig: {
    value: string;
    label: string;
  }[];
}
const I18nText = (props: I18nTextProps) => {
  const {
    layout = 'vertical',
    className = '',
    hidden = false,
    name,
    label,
    required,
    langConfig,
    textProps,
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
            <Text
              {...textProps}
              name={`${name}${item.value}`}
              label={`${label}(${item.label})`}
              required={required}
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
                <Text
                  {...textProps}
                  label=""
                  className="i18n-text-field-item-text"
                  name={`${name}${item.value}`}
                  required={required}
                  placeholder={`${label}(${item.label})`}
                />
              </div>
            ))}
          </div>
        </ProForm.Item>
      )}
    </div>
  );
};

export default I18nText;
