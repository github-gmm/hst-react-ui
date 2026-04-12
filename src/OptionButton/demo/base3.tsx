import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space>
      <OptionButton>空白</OptionButton>
      <OptionButton type="primary">主按钮</OptionButton>
      <OptionButton optionType="main" primary>
        main
      </OptionButton>
      <OptionButton optionType="info" primary>
        info
      </OptionButton>
      <OptionButton optionType="success" primary>
        success
      </OptionButton>
      <OptionButton optionType="error" primary>
        error
      </OptionButton>
      <OptionButton optionType="waring" primary>
        waring
      </OptionButton>
    </Space>
  );
};
