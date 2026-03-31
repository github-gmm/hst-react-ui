import './NavigationBar.less';

import { Breadcrumb } from 'antd';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';

/** 面包屑项目 */
export interface IVaBreadcrumbItem {
  /** 显示标题 */
  title: ReactNode;
  /** 点击处理函数 */
  onClick?: () => void;
  /** 链接路径 */
  path?: string;
}

/** 导航栏属性 */
export interface IVaNavigationBarProps {
  /** 面包屑项目 */
  items?: IVaBreadcrumbItem[];
  /** 右侧内容（按钮、搜索等） */
  extra?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export const NavigationBar = (props: IVaNavigationBarProps) => {
  const { items = [], extra, className = '', style } = props;

  // 构建面包屑项目
  const breadcrumbItems = useMemo(() => {
    return items.map((item, index) => ({
      key: index,
      title: item.onClick ? (
        <span className="navigation-bar-link" onClick={item.onClick}>
          {item.title}
        </span>
      ) : (
        item.title
      ),
      href: item.path,
    }));
  }, [items]);

  return (
    <div className={`navigation-bar ${className}`} style={style}>
      <div className="navigation-bar-left">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {extra && <div className="navigation-bar-right">{extra}</div>}
    </div>
  );
};

export default NavigationBar;
