// import { history } from '@umijs/max';
import { Typography } from 'antd';
import React from 'react';
import './desc.less';

export interface IText {
  value?: string;
  label?: string;
  hideLabel?: boolean;
  children?: React.ReactNode;
}

export interface ILinkView extends IText {
  copyable?: boolean;
  /** 路由跳转（同应用） */
  route?: boolean;
  /** 链接地址 */
  linkUrl?: string;
}

const { Text, Link } = Typography;

const LinkView = (props: ILinkView) => {
  const {
    hideLabel = false,
    label,
    value,
    copyable,
    children,
    linkUrl = 'javascript:void(0)',
    route = false,
  } = props;

  const labelVal = label ? `${label}：` : null;

  const handleJump = () => {
    // history.push(`${linkUrl}`);
  };

  const linkText = route ? (
    <span className="desc-link" onClick={handleJump}>
      {value}
    </span>
  ) : (
    <Link href={`${linkUrl}`} target={'_blank'} rel="noreferrer">
      {value}
    </Link>
  );

  const copyText = copyable ? (
    <Text
      style={{ margin: 0, paddingLeft: 6 }}
      copyable={{ text: `${value}` }}
    />
  ) : null;

  return (
    <div className={['common-desc'].join(' ')}>
      {!hideLabel && <div className={['desc-label'].join(' ')}>{labelVal}</div>}

      <div className={['desc-value'].join(' ')}>
        {children ? (
          children
        ) : (
          <>
            {linkText} {copyText}
          </>
        )}
      </div>
    </div>
  );
};

export default LinkView;
