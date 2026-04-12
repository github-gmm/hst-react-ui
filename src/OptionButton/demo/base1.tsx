import { Space } from 'antd';
import { OptionButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <OptionButton optionType="main" size="small">
          main
        </OptionButton>
        <OptionButton optionType="info" size="small">
          info
        </OptionButton>
        <OptionButton optionType="success" size="small">
          success
        </OptionButton>
        <OptionButton optionType="error" size="small">
          error
        </OptionButton>
        <OptionButton optionType="waring" size="small">
          waring
        </OptionButton>
      </Space>
    </Space>
  );
};
