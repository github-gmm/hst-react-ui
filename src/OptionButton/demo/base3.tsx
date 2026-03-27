import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton type="main" primary premCode="HS:CRM:VA:ADD">
        main
      </OptionButton>
      <OptionButton type="info" primary premCode="HS:CRM:VA:ADD">
        info
      </OptionButton>
      <OptionButton type="success" primary premCode="HS:CRM:VA:ADD">
        success
      </OptionButton>
      <OptionButton type="error" primary premCode="HS:CRM:VA:ADD">
        error
      </OptionButton>
      <OptionButton type="waring" primary premCode="HS:CRM:VA:ADD">
        waring
      </OptionButton>
    </Space>
  );
};
