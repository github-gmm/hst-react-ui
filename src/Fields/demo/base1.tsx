import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm style={{ width: '300px' }}>
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
        <Fields.Textarea required label="纯长文本" name="textarea" />
      </FieldForm>
    </div>
  );
};
