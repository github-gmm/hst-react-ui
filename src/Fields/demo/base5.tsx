import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
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
