import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <h1>简单表单</h1>
      <FieldForm>
        <Fields.Text
          label="纯文本"
          name="text1"
          required
          isShowCount
          onChange={(value) => {
            console.log('查询纯文本', value);
          }}
        />
        <Fields.Text
          label="查询文本"
          name="text2"
          required
          onSearch={(value) => {
            console.log('查询中', value);
          }}
        />
        <Fields.Text
          label="查询文本"
          name="text3"
          required
          isSearchLoading
          onSearch={(value) => {
            console.log('查询文本', value);
          }}
        />
        <Fields.I18nText
          label="多语言"
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
          label="多语言"
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
        <Fields.I18nTextArea
          label="多语言"
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
        <Fields.I18nTextArea
          layout="horizontal"
          label="多语言"
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
        <Fields.Textarea required label="纯长文本" name="textarea" />
        <Fields.Radio
          required
          label="单选"
          name="radio"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Checkbox
          required
          label="多选"
          name="checkbox"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Digit required label="数字" name="digit" />
        <Fields.Lov
          required
          label="固定枚举"
          name="lov"
          item={[
            {
              label: '男',
              value: '1',
              disabled: true,
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Select
          search
          required
          label="不固定枚举"
          name="select"
          request={async (keyword: string) => {
            console.log(keyword);
            return [
              {
                label: '男',
                value: '1',
              },
            ];
          }}
        />
      </FieldForm>
    </div>
  );
};
