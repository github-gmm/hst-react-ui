import { CloseOutlined } from '@ant-design/icons';
import { Button, Modal, ModalProps, Space } from 'antd';
import { ReactNode, useMemo, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

import React from 'react';
import './index.less';

export interface IModalPopupButton {
  /** 按钮文字 */
  text: string;
  /** 按钮点击事件 */
  onClick?: () => void;
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 按钮危险样式 */
  danger?: boolean;
}

export interface IModalPopupBaseProps {
  /** 是否显示 */
  open?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 是否隐藏标题头部 */
  hideHeader?: boolean;
  /** 自定义头部内容 */
  headerRender?: ReactNode;
  /** 是否隐藏底部按钮区域 */
  hideFooter?: boolean;
  /** 自定义底部内容 */
  footerRender?: ReactNode;
  /** 底部按钮配置 */
  buttons?: IModalPopupButton[];
  /** 内容是否居中 */
  contentCenter?: boolean;
  /** 弹窗宽度 */
  width?: number | string;
  /** 点击遮罩层是否可关闭 */
  maskClosable?: boolean;
  /** 关闭回调 */
  onClose?: () => void;
  /** 子元素 */
  children?: ReactNode;
}

/** Modal 扩展属性 */
export interface IModalPopupModalProps extends IModalPopupBaseProps {
  /** 透传 Modal 属性 */
  modalProps?: Omit<
    ModalProps,
    'open' | 'title' | 'footer' | 'onCancel' | 'width' | 'maskClosable'
  >;
}

/** 弹窗组件 */
export const DragModalPopup = (props: IModalPopupModalProps) => {
  const {
    open = false,
    title,
    hideHeader = false,
    headerRender,
    hideFooter = false,
    footerRender,
    buttons = [],
    contentCenter = false,
    width,
    maskClosable = false,
    onClose,
    children,
    modalProps,
  } = props;

  const draggleRef = useRef<HTMLDivElement>(null!);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  // 头部
  const renderHeader = useMemo(() => {
    if (hideHeader) return null;
    if (headerRender) return headerRender;

    return (
      <div className="modal-popup-header modal-popup-header-drag-handle">
        <span className="modal-popup-header-title">{title}</span>
        <CloseOutlined className="modal-popup-header-close" onClick={onClose} />
      </div>
    );
  }, [hideHeader, headerRender, title, onClose]);

  // 按钮
  const renderButtons = useMemo(() => {
    if (buttons.length === 0) return null;

    return buttons.map((btn: IModalPopupButton, index: number) => (
      <Button
        key={index}
        type={btn.type || 'default'}
        disabled={btn.disabled}
        loading={btn.loading}
        danger={btn.danger}
        onClick={btn.onClick}
      >
        {btn.text}
      </Button>
    ));
  }, [buttons]);

  // 底部
  const renderFooter = useMemo(() => {
    if (hideFooter) return null;
    if (footerRender) return footerRender;
    if (buttons.length === 0) return null;

    return (
      <div className="modal-popup-footer">
        <Space>{renderButtons}</Space>
      </div>
    );
  }, [hideFooter, footerRender, buttons, renderButtons]);

  // 内容类名
  const contentClassName = useMemo(() => {
    return contentCenter
      ? 'modal-popup-content modal-popup-content-center'
      : 'modal-popup-content modal-popup-content-left';
  }, [contentCenter]);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    open && (
      <Modal
        open={open}
        title={null}
        footer={null}
        closable={false}
        width={width || 480}
        maskClosable={maskClosable}
        className={'modal-popup'}
        modalRender={(modal) => (
          <Draggable
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
            handle=".modal-popup-header-drag-handle"
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        {...modalProps}
      >
        {renderHeader}
        <div className={contentClassName}>{children}</div>
        {renderFooter}
      </Modal>
    )
  );
};

export default DragModalPopup;
