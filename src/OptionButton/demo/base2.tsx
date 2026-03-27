import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton type="main" primary>
        main
      </OptionButton>
      <OptionButton type="info" primary>
        info
      </OptionButton>
      <OptionButton type="success" primary>
        success
      </OptionButton>
      <OptionButton type="error" primary>
        error
      </OptionButton>
      <OptionButton type="waring" primary>
        waring
      </OptionButton>
    </Space>
  );
};
