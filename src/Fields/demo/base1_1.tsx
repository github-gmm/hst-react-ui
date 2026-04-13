import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <Fields.I18nText
          label="多语言1"
          name="text"
          langConfig={[
            {
              label: '简体中文',
              value: 'Cn',
            },
            {
              label: '繁体中文',
              value: 'Hk',
            },
            {
              label: '英文',
              value: 'En',
            },
          ]}
          required
        />
        <Fields.I18nTextarea
          label="多语言2"
          name="text"
          langConfig={[
            {
              label: '简体中文',
              value: 'Cn',
            },
            {
              label: '繁体中文',
              value: 'Hk',
            },
            {
              label: '英文',
              value: 'En',
            },
          ]}
          required
        />
        <Fields.I18nText
          layout="horizontal"
          label="多语言1"
          name="text1"
          langConfig={[
            {
              label: '简',
              value: 'Cn',
            },
            {
              label: '繁',
              value: 'Hk',
            },
            {
              label: '英',
              value: 'En',
            },
          ]}
          required
        />
        <Fields.I18nTextarea
          layout="horizontal"
          label="多语言2"
          name="text1"
          langConfig={[
            {
              label: '简',
              value: 'Cn',
            },
            {
              label: '繁',
              value: 'Hk',
            },
            {
              label: '英',
              value: 'En',
            },
          ]}
          required
        />
      </FieldForm>
    </div>
  );
};
