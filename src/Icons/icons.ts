import BackIcon from './svgs/icon_back.svg';
export const icons = {
  BackIcon,
} as const;
export type IconName = keyof typeof icons;
