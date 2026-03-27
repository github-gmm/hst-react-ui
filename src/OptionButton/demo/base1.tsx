import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton type="main" size="small">
        main
      </OptionButton>
      <OptionButton type="info" size="small">
        info
      </OptionButton>
      <OptionButton type="success" size="small">
        success
      </OptionButton>
      <OptionButton type="error" size="small">
        error
      </OptionButton>
      <OptionButton type="waring" size="small">
        waring
      </OptionButton>
    </Space>
  );
};
