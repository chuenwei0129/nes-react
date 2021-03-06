import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'nes-react',
  // 过滤非自定义 props
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  favicon: 'https://nostalgic-css.github.io/NES.css/favicon.png',
  logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/chuenwei0129/nes-react',
    },
  ],
  // more config: https://d.umijs.org/config
});
