import { Plugins } from 'jspm-loader-css/lib/plugins';
import { CSSLoader } from 'jspm-loader-css/lib/CSSLoader';
import cssNext from 'postcss-cssnext';

const { fetch, bundle } = new CSSLoader([
  Plugins.values,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer(),
].concat(cssNext));

export { CSSLoader, Plugins, fetch, bundle };
