import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
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
      </FieldForm>
    </div>
  );
};
