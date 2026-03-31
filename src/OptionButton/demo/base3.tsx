import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton type="main" size="small" premCode="HS:CRM:VA:ADD">
        main
      </OptionButton>
      <OptionButton type="info" size="small" premCode="HS:CRM:VA:ADD">
        info
      </OptionButton>
      <OptionButton type="success" size="small" premCode="HS:CRM:VA:ADD">
        success
      </OptionButton>
      <OptionButton type="error" size="small" premCode="HS:CRM:VA:ADD">
        error
      </OptionButton>
      <OptionButton type="waring" size="small" premCode="HS:CRM:VA:ADD">
        waring
      </OptionButton>
    </Space>
  );
};
