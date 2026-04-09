import { FieldForm, Fields } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 500 }}>
      <FieldForm>
        <Fields.Digit required label="数字" name="digit" suffix="%" />
        <Fields.Digit
          required
          label="数字"
          name="digit1"
          min={1}
          suffix="USD"
        />
        <Fields.Digit
          required
          label="数字"
          name="digit2"
          max={10}
          suffix="CNY"
        />
      </FieldForm>
    </div>
  );
};
