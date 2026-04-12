import React from 'react';
import './desc.less';
import TextareaView from './TextareaView';

export interface IText {
  value?: Record<string, string>;
  label?: string;
  hideLabel?: boolean;
}

export interface II18nTextareaView extends IText {
  langName?: string;
  langConfig: {
    value: string;
    label: string;
  }[];
  maxLines?: number;
  copyable?: boolean;
  wrap?: boolean;
}

const I18nTextareaView = (props: II18nTextareaView) => {
  const {
    hideLabel = false,
    label,
    value,
    copyable,
    langName,
    langConfig,
    maxLines = 3,
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
              <TextareaView
                hideLabel
                maxLines={maxLines}
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

export default I18nTextareaView;
