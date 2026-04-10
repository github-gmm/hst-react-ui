import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.LabelView label="标签" value={['标签一', '标签二', '标签三']} />
      </DescForm>
    </div>
  );
};
