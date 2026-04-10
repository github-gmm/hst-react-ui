import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.DigitView label="数字" value="1111111.00" />
        <Desc.DigitView
          label="大数字(千分位)"
          value="12345678987654321.12345"
          formatter="thousand"
        />
        <Desc.DigitView
          label="数字(小数位)"
          value="1111111"
          formatter="thousand"
          precision={2}
        />
        <Desc.DigitView label="数字(百分比)" value="10" formatter="percent" />
        <Desc.DigitView label="非数字" value="a" />
      </DescForm>
    </div>
  );
};
