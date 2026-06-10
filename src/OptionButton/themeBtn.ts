export type OptionButtonType = 'main' | 'success' | 'error' | 'info' | 'waring';

export type OptionButtonTheme = {
  fontColor: string;
  bgColor: string;
  borderColor: string;
};

export type OptionButtonThemeConfig = {
  light: OptionButtonTheme;
  dark: OptionButtonTheme;
};

export const mainColor: OptionButtonTheme = {
  fontColor: '#409eff',
  bgColor: '#ecf5ff',
  borderColor: '#b3d8ff',
};

export const successColor: OptionButtonTheme = {
  fontColor: '#67c23a',
  bgColor: '#f0f9eb',
  borderColor: '#c2e7b0',
};

export const errorColor: OptionButtonTheme = {
  fontColor: '#f56c6c',
  bgColor: '#fef0f0',
  borderColor: '#fbc4c4',
};

export const infoColor: OptionButtonTheme = {
  fontColor: '#666666',
  bgColor: '#f4f4f5',
  borderColor: '#c3c3c3',
};

export const warningColor: OptionButtonTheme = {
  fontColor: '#e6a23c',
  bgColor: '#fdf6ec',
  borderColor: '#f5dab1',
};

export const mainColorDark: OptionButtonTheme = {
  fontColor: '#ffffff',
  bgColor: '#000000',
  borderColor: '#409eff',
};

export const successColorDark: OptionButtonTheme = {
  fontColor: '#ffffff',
  bgColor: '#000000',
  borderColor: '#67c23a',
};

export const errorColorDark: OptionButtonTheme = {
  fontColor: '#ffffff',
  bgColor: '#000000',
  borderColor: '#f56c6c',
};

export const infoColorDark: OptionButtonTheme = {
  fontColor: '#ffffff',
  bgColor: '#000000',
  borderColor: '#999999',
};

export const waringColorDark: OptionButtonTheme = {
  fontColor: '#ffffff',
  bgColor: '#000000',
  borderColor: '#e6a23c',
};

const themeBtn: Record<OptionButtonType, OptionButtonThemeConfig> = {
  main: {
    light: mainColor,
    dark: mainColorDark,
  },
  success: {
    light: successColor,
    dark: successColorDark,
  },
  error: {
    light: errorColor,
    dark: errorColorDark,
  },
  info: {
    light: infoColor,
    dark: infoColorDark,
  },
  waring: {
    light: warningColor,
    dark: waringColorDark,
  },
};

export default themeBtn;
