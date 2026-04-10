import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <Fields.Lov
          required
          label="固定枚举单选"
          name="lov"
          item={[
            {
              label: '男',
              value: '1',
            },
            {
              label: '女',
              value: '2',
            },
          ]}
        />
        <Fields.Lov
          multiple
          required
          label="固定枚举多选"
          name="lov1"
          item={[
            {
              label: '男',
              value: '1',
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
              {
                label: '女',
                value: '2',
              },
            ];
          }}
        />
      </FieldForm>
    </div>
  );
};
