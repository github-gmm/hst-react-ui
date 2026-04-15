import { Button, Space } from 'antd';
import { DrawerPopup, Fields } from 'hst-react-ui';
import usePopup from 'hst-react-ui/_hooks/usePopup';
import React from 'react';

export default () => {
  const { visible, close, open } = usePopup();
  const { visible: visible1, close: close1, open: open1 } = usePopup();
  return (
    <Space>
      <Button onClick={open}>打开弹窗</Button>
      <DrawerPopup open={visible} onClose={close} title="侧弹窗">
        111
      </DrawerPopup>

      <Button onClick={open1}>打开弹窗(带操作)</Button>
      <DrawerPopup
        open={visible1}
        onClose={close1}
        title="侧弹窗"
        buttons={[
          {
            text: '取消',
            onClick: close1,
          },
          {
            text: '保存',
            type: 'primary',
            onClick: close1,
          },
        ]}
      >
        <Fields.Text label="备注" name="remark" />
      </DrawerPopup>
    </Space>
  );
};
