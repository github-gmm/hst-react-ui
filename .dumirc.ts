import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hst-react-ui',
  outputPath: 'docs-dist',
  base: "/hst-react-ui/",
  publicPath: "/hst-react-ui/",
  themeConfig: {
    name: 'HST组件库',
    // logo: "https://r.hstong.com/v2/commons/images/logo/logo_icon_120x120.png",
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
    },
    footer: false,
  },
  // favicons: [
  //   'https://r.hstong.com/v2/commons/images/logo/logo_icon_120x120.png',
  // ],
  theme: { '@c-primary': '#a51d1d' },
  targets: {
    ie: 11,
  }
});
