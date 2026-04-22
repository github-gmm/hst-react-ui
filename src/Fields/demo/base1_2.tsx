import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <Fields.Link name={'link'} label="链接" />
        <Fields.Json name={'json'} label="json" />
      </FieldForm>
    </div>
  );
};
