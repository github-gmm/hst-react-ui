import { Space } from 'antd';
import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <FieldForm>
        <Fields.Text label="文本" name="text" required />
        <Fields.Textarea required label="多行文本" name="textarea" />
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
          label="搜索框"
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
    </Space>
  );
};
