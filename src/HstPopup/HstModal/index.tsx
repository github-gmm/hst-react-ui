import { Modal, ModalProps } from 'antd';
import React, { memo, useCallback } from 'react';
import './index.less';

interface IHstModalProps extends ModalProps {
  className?: string;
  children?: React.ReactNode;
  onClosed?: () => Promise<void> | void;
}

const HstModal: React.FC<IHstModalProps> = (props) => {
  const {
    width = 378,
    children = null,
    footer = <></>,
    className,
    onClosed,
    ...rest
  } = props;

  const handleCancel = useCallback(() => {
    onClosed?.();
  }, [onClosed]);

  return (
    <Modal
      className={`hst-popup-content${className ? `${className}` : ''}`}
      open={true}
      width={width}
      maskClosable={false}
      onCancel={handleCancel}
      footer={footer}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default memo(HstModal);
