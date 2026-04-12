import React from 'react';
import TextView from './TextView';
import './desc.less';

export interface IText {
  value?: Record<string, string>;
  label?: string;
  hideLabel?: boolean;
}

export interface II18nTextView extends IText {
  langName?: string;
  langConfig: {
    value: string;
    label: string;
  }[];
  copyable?: boolean;
  // 是否自动换行
  wrap?: boolean;
}

const I18nTextView = (props: II18nTextView) => {
  const {
    hideLabel = false,
    label,
    value,
    copyable,
    langName,
    langConfig,
    wrap,
  } = props;

  const labelVal = label ? `${label}：` : null;

  return (
    <div className={['common-desc', 'desc-text'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-i18n-value'].join(' ')}>
        {langConfig?.map((item) => {
          const text = `${value?.[`${langName}${item.value}`]}`;
          return (
            <div className={['desc-i18n-item'].join(' ')} key={item.value}>
              <strong>{`(${item.label})`}</strong>
              <TextView
                hideLabel
                value={text}
                wrap={wrap}
                copyable={copyable}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default I18nTextView;
