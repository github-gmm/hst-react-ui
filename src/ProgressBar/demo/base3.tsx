import { Button, Space } from 'antd';
import { ProgressBar } from 'hst-react-ui';
import useTiming from 'hst-react-ui/_hooks/useTiming';
import React from 'react';

export default () => {
  const { percent, open, pause, reOpen } = useTiming();
  return (
    <Space>
      <div
        style={{
          width: 300,
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
        }}
      >
        <ProgressBar percent={percent} hidePercent width={5} />

        <Space>
          <Button onClick={open}>开始</Button>
          <Button onClick={pause}>暂停</Button>
          <Button onClick={reOpen}>重启</Button>
        </Space>
      </div>
    </Space>
  );
};
