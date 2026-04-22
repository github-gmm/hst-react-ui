import { Divider } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import React, { useMemo } from 'react';
import './CardContainer.less';

export interface IVaPageProps {
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 页眉内容 */
  header?: ReactNode;
  /** 子元素 */
  children: ReactNode;
  /** 页脚内容 */
  footer?: ReactNode;
}

/** 页面组件 */
export const CardContainer = (props: IVaPageProps) => {
  const { className = '', style, header, children, footer } = props;

  const pageStyle = useMemo(
    () => ({
      ...style,
    }),
    [style],
  );

  return (
    <div
      className={`card-page ${className}`}
      style={pageStyle as React.CSSProperties}
    >
      {header && <div className="card-header">{header}</div>}
      {header && <Divider style={{ margin: 0 }} />}

      <div className="card-content">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default CardContainer;
