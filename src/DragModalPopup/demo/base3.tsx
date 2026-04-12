import { Button, Space } from 'antd';
import usePopup from 'hst-react-ui/hooks/usePopup';
import React from 'react';

export default () => {
  const { confirmPopup } = usePopup();
  return (
    <Space>
      <Button
        onClick={() => {
          confirmPopup({
            title: '二次弹窗',
            content: '确认弹框么',
            confirm: () => {},
          });
        }}
      >
        确认弹框
      </Button>
    </Space>
  );
};
