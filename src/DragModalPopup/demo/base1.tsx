import { Button, Space } from 'antd';
import { Fields, ModalPopup } from 'hst-react-ui';
import usePopup from 'hst-react-ui/_hooks/usePopup';
import React from 'react';

export default () => {
  const { visible, close, open } = usePopup();
  const { visible: visible1, close: close1, open: open1 } = usePopup();
  return (
    <Space>
      <Button onClick={open}>打开弹窗</Button>
      <ModalPopup open={visible} onClose={close} title="中心弹窗">
        111
      </ModalPopup>

      <Button onClick={open1}>打开弹窗(带操作)</Button>
      <ModalPopup
        open={visible1}
        onClose={close1}
        title="中心弹窗"
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
      </ModalPopup>
    </Space>
  );
};
