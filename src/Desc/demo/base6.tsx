import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.BadgeView label="徽标" value="启用" success />
        <Desc.BadgeView label="徽标" value="禁用" />
      </DescForm>
    </div>
  );
};
