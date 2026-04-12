import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton optionType="main" size="small" premCode="HS:CRM:VA:ADD">
        main
      </OptionButton>
      <OptionButton optionType="info" size="small" premCode="HS:CRM:VA:ADD">
        info
      </OptionButton>
      <OptionButton optionType="success" size="small" premCode="HS:CRM:VA:ADD">
        success
      </OptionButton>
      <OptionButton optionType="error" size="small" premCode="HS:CRM:VA:ADD">
        error
      </OptionButton>
      <OptionButton optionType="waring" size="small" premCode="HS:CRM:VA:ADD">
        waring
      </OptionButton>
    </Space>
  );
};
