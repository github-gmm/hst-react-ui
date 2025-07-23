import { Modal, ModalProps } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import './index.less';

interface IHstModalProps extends ModalProps {
  className?: string;
  children?: React.ReactNode;
  onSave?: () => Promise<boolean> | boolean;
  onClosed?: () => Promise<void> | void;
}

const HstModal: React.FC<IHstModalProps> = (props) => {
  const {
    width = 378,
    children = null,
    className,
    onSave,
    onClosed,
    ...rest
  } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleCancel = useCallback(() => {
    setLoading(false);
    onClosed?.();
  }, [onClosed]);

  const handleSave = useCallback(async () => {
    setLoading(true);
    let flag = true;
    if (onSave) {
      try {
        flag = await onSave();
      } catch (error) {}
    }
    if (flag) {
      handleCancel();
    } else {
      setLoading(false);
    }
  }, [onSave, handleCancel]);

  return (
    <Modal
      className={`hst-popup-content${className ? `${className}` : ''}`}
      open={true}
      width={width}
      maskClosable={false}
      confirmLoading={loading}
      onCancel={handleCancel}
      onOk={handleSave}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default memo(HstModal);
