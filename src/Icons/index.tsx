import React from 'react';
import { icons, type IconName } from './icons';

interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: number | string;
}

export default function SvgIcon({
  name,
  size = '1em',
  style,
  className,
  ...rest
}: SvgIconProps) {
  const src = icons[name];

  if (!src) {
    console.warn(`[SvgIcon] icon "${name}" not found`);
    return null;
  }

  return (
    <span
      {...rest}
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        verticalAlign: 'middle',
        backgroundColor: 'currentColor',
        WebkitMask: `url(${src}) no-repeat center / contain`,
        mask: `url(${src}) no-repeat center / contain`,
        ...style,
      }}
    ></span>
  );
}
