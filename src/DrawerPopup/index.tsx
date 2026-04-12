import { CloseOutlined } from '@ant-design/icons';
import { Button, Drawer, DrawerProps, Space } from 'antd';
import React, { ReactNode, useMemo } from 'react';
import './index.less';

export interface IDrawerPopupButton {
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

export interface IDrawerPopupBaseProps {
  /** 是否显示 */
  open?: boolean;
  /** 标题 */
  title?: ReactNode;
  /** 是否隐藏标题头部 */
  hideHeader?: boolean;
  /** 自定义头部内容 */
  headerRender?: ReactNode;
  /** 底部按钮配置 */
  buttons?: IDrawerPopupButton[];
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
export interface IDrawerPopupModalProps extends IDrawerPopupBaseProps {
  /** Drawer 位置 */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /** 透传 Drawer 属性 */
  drawerProps?: Omit<
    DrawerProps,
    | 'open'
    | 'title'
    | 'footer'
    | 'onClose'
    | 'width'
    | 'maskClosable'
    | 'placement'
  >;
}

/** 弹窗组件 */
export const DrawerPopup = (props: IDrawerPopupModalProps) => {
  const {
    open = false,
    title,
    hideHeader = false,
    headerRender,
    buttons = [],
    contentCenter = false,
    width,
    maskClosable = false,
    onClose,
    children,
    placement = 'right',
    drawerProps,
  } = props;

  // 按钮
  const renderButtons = useMemo(() => {
    if (buttons.length === 0) return null;

    return buttons.map((btn: IDrawerPopupButton, index: number) => (
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

  // 头部
  const renderHeader = useMemo(() => {
    if (hideHeader) return null;
    if (headerRender) return headerRender;

    return (
      <div className="drawer-popup-header">
        <div className="drawer-popup-header-left">
          <CloseOutlined
            className="drawer-popup-header-close"
            onClick={onClose}
          />
          <span className="drawer-popup-header-title">{title}</span>
        </div>
        {buttons.length !== 0 && (
          <div className="drawer-popup-header-right">
            <Space>{renderButtons}</Space>
          </div>
        )}
      </div>
    );
  }, [hideHeader, headerRender, title, onClose, buttons]);

  // 内容类名
  const contentClassName = useMemo(() => {
    return contentCenter
      ? 'drawer-popup-content drawer-popup-content-center'
      : 'drawer-popup-content drawer-popup-content-left';
  }, [contentCenter]);

  return (
    open && (
      <Drawer
        open={open}
        title={null}
        footer={null}
        closable={false}
        width={width || 480}
        placement={placement}
        maskClosable={maskClosable}
        className={'drawer-popup'}
        {...drawerProps}
      >
        {renderHeader}
        <div className={contentClassName}>{children}</div>
      </Drawer>
    )
  );
};

export default DrawerPopup;
