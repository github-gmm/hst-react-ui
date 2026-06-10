type SvgRequireContext = {
  keys: () => string[];
  (key: string): string | { default: string };
};

declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
  ) => SvgRequireContext;
};

const svgContext = require.context('./svgs', false, /\.svg$/);

function getSvgName(path: string) {
  return path.replace(/^.*\//, '').replace(/\.svg$/, '');
}

export const icons = svgContext.keys().reduce<Record<string, string>>(
  (iconMap, path) => {
    const svgModule = svgContext(path);
    iconMap[getSvgName(path)] =
      typeof svgModule === 'string' ? svgModule : svgModule.default;
    return iconMap;
  },
  {},
);

export type IconName = keyof typeof icons;
