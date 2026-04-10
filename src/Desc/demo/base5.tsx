import { Desc, DescForm } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <div style={{ width: 400, border: '1px solid #eee', padding: 10 }}>
      <DescForm labelWidth={150}>
        <Desc.DateView
          label="2026-03-31"
          value="2026-03-31"
          dataType="DD.MM.YYYY"
        />
        <Desc.DateView
          label="2026-03"
          value="2026-03"
          dataType="DD.MM.YYYY 23:59:59"
        />
        <Desc.DateView
          label="2026-03"
          value="2026-03"
          dataType="YYYY-MM-DDTHH:mm:ssZ"
        />
      </DescForm>
    </div>
  );
};
