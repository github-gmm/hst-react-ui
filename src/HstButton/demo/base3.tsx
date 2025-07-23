import { SyncOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { HstButton } from 'hst-react-ui';
import React from 'react';

export default () => {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('成功了');
      }, 3000);
    });
  };

  const handleClick1 = async () => {
    const res = await handleClick();
    console.log(res);
  };

  return (
    <Space wrap>
      <HstButton icon={<SyncOutlined />} onClick={handleClick}>
        loading button
      </HstButton>

      <HstButton
        icon={<SyncOutlined />}
        variant="outlined"
        color="default"
        onClick={handleClick}
      >
        loading button
      </HstButton>

      <HstButton
        variant="dashed"
        icon={<SyncOutlined />}
        onClick={handleClick1}
      >
        loading button
      </HstButton>

      <HstButton
        variant="filled"
        icon={<SyncOutlined />}
        onClick={handleClick1}
      >
        loading button
      </HstButton>

      <HstButton variant="link" icon={<SyncOutlined />} onClick={handleClick1}>
        loading button
      </HstButton>
    </Space>
  );
};
