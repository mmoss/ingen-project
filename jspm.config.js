SystemJS.config({
  transpiler: "plugin-babel",
  meta: {
    "*.css": {
      "loader": "src/css.js"
    },
    "./src/*.js": {
      "loader": "plugin-babel"
    }
  },
  map: {
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "react": "npm:react@0.14.8",
    "react-dom": "npm:react-dom@0.14.8",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
    "autoprefixer": "npm:autoprefixer@6.3.6",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "postcss-cssnext": "npm:postcss-cssnext@2.5.2",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "audio": "github:ozsay/plugin-audio@0.0.3",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "fbjs": "npm:fbjs@0.8.0",
    "gsapi": "github:greensock/GreenSock-JS@1.18.2",
    "image": "github:systemjs/plugin-image@0.1.0",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jspm-loader-css": "npm:jspm-loader-css@1.1.0",
    "material-ui": "npm:material-ui@0.15.0-alpha.2",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "raw": "github:matthewbauer/plugin-raw@1.0.0",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
    "text": "github:systemjs/plugin-text@0.0.7",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "yaml": "npm:systemjs-plugin-yaml@0.2.0"
  },
  packages: {
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:react@0.14.8": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.1.0": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "inline-process-browser": "npm:inline-process-browser@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.0",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.10.43": {
      "map": {
        "ast-types": "npm:ast-types@0.8.15",
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.3"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:stream-http@2.2.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:unreachable-branch-transform@0.5.0": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.10.43"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:autoprefixer@6.3.6": {
      "map": {
        "browserslist": "npm:browserslist@1.3.1",
        "caniuse-db": "npm:caniuse-db@1.0.30000452",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:browserslist@1.3.1": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000452"
      }
    },
    "npm:caniuse-api@1.4.1": {
      "map": {
        "browserslist": "npm:browserslist@1.3.1",
        "caniuse-db": "npm:caniuse-db@1.0.30000452",
        "lodash.memoize": "npm:lodash.memoize@2.4.1",
        "lodash.uniq": "npm:lodash.uniq@3.2.2",
        "shelljs": "npm:shelljs@0.5.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:color-string@0.2.4": {
      "map": {
        "color-name": "npm:color-name@1.0.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.0.1"
      }
    },
    "npm:color@0.10.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:color@0.11.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:color@0.7.3": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.2.4"
      }
    },
    "npm:color@0.9.0": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:css-color-function@1.3.0": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "color": "npm:color@0.11.1",
        "debug": "npm:debug@0.7.4",
        "rgb": "npm:rgb@0.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:lodash._basecallback@3.3.1": {
      "map": {
        "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
        "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.pairs": "npm:lodash.pairs@3.0.1"
      }
    },
    "npm:lodash._baseisequal@3.0.7": {
      "map": {
        "lodash.isarray": "npm:lodash.isarray@3.0.4",
        "lodash.istypedarray": "npm:lodash.istypedarray@3.0.6",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash._baseuniq@3.0.3": {
      "map": {
        "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
        "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
        "lodash._createcache": "npm:lodash._createcache@3.1.2"
      }
    },
    "npm:lodash._createcache@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1"
      }
    },
    "npm:lodash.assigninwith@4.0.6": {
      "map": {
        "lodash.keysin": "npm:lodash.keysin@4.1.3",
        "lodash.rest": "npm:lodash.rest@4.0.2"
      }
    },
    "npm:lodash.escape@4.0.0": {
      "map": {
        "lodash.tostring": "npm:lodash.tostring@4.1.2"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:lodash.memoize@2.4.1": {
      "map": {
        "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
        "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
      }
    },
    "npm:lodash.pairs@3.0.1": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash.template@4.2.4": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.assigninwith": "npm:lodash.assigninwith@4.0.6",
        "lodash.keys": "npm:lodash.keys@4.0.6",
        "lodash.rest": "npm:lodash.rest@4.0.2",
        "lodash.templatesettings": "npm:lodash.templatesettings@4.0.1",
        "lodash.tostring": "npm:lodash.tostring@4.1.2"
      }
    },
    "npm:lodash.templatesettings@4.0.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@4.0.0"
      }
    },
    "npm:lodash.uniq@3.2.2": {
      "map": {
        "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
        "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:pixrem@3.0.0": {
      "map": {
        "browserslist": "npm:browserslist@1.3.1",
        "postcss": "npm:postcss@5.0.19",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.1"
      }
    },
    "npm:pleeease-filters@3.0.0": {
      "map": {
        "onecolor": "npm:onecolor@2.4.2",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-calc@5.2.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.1"
      }
    },
    "npm:postcss-color-function@2.0.1": {
      "map": {
        "css-color-function": "npm:css-color-function@1.3.0",
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-color-gray@3.0.0": {
      "map": {
        "color": "npm:color@0.7.3",
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:postcss-color-hex-alpha@2.0.0": {
      "map": {
        "color": "npm:color@0.10.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-color-hwb@2.0.0": {
      "map": {
        "color": "npm:color@0.10.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:postcss-color-rebeccapurple@2.0.0": {
      "map": {
        "color": "npm:color@0.9.0",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-color-rgba-fallback@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "rgb-hex": "npm:rgb-hex@1.0.0"
      }
    },
    "npm:postcss-cssnext@2.5.2": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.3.6",
        "caniuse-api": "npm:caniuse-api@1.4.1",
        "chalk": "npm:chalk@1.1.3",
        "pixrem": "npm:pixrem@3.0.0",
        "pleeease-filters": "npm:pleeease-filters@3.0.0",
        "postcss": "npm:postcss@5.0.19",
        "postcss-calc": "npm:postcss-calc@5.2.1",
        "postcss-color-function": "npm:postcss-color-function@2.0.1",
        "postcss-color-gray": "npm:postcss-color-gray@3.0.0",
        "postcss-color-hex-alpha": "npm:postcss-color-hex-alpha@2.0.0",
        "postcss-color-hwb": "npm:postcss-color-hwb@2.0.0",
        "postcss-color-rebeccapurple": "npm:postcss-color-rebeccapurple@2.0.0",
        "postcss-color-rgba-fallback": "npm:postcss-color-rgba-fallback@2.2.0",
        "postcss-custom-media": "npm:postcss-custom-media@5.0.1",
        "postcss-custom-properties": "npm:postcss-custom-properties@5.0.0",
        "postcss-custom-selectors": "npm:postcss-custom-selectors@3.0.0",
        "postcss-font-variant": "npm:postcss-font-variant@2.0.0",
        "postcss-initial": "npm:postcss-initial@1.5.1",
        "postcss-media-minmax": "npm:postcss-media-minmax@2.1.2",
        "postcss-nesting": "npm:postcss-nesting@2.3.1",
        "postcss-pseudo-class-any-link": "npm:postcss-pseudo-class-any-link@1.0.0",
        "postcss-pseudoelements": "npm:postcss-pseudoelements@3.0.0",
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.1",
        "postcss-selector-not": "npm:postcss-selector-not@2.0.0"
      }
    },
    "npm:postcss-custom-media@5.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-custom-properties@5.0.0": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-custom-selectors@3.0.0": {
      "map": {
        "balanced-match": "npm:balanced-match@0.2.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.1"
      }
    },
    "npm:postcss-font-variant@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-initial@1.5.1": {
      "map": {
        "lodash.template": "npm:lodash.template@4.2.4",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-media-minmax@2.1.2": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-nesting@2.3.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-pseudo-class-any-link@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-selector-parser": "npm:postcss-selector-parser@1.3.3"
      }
    },
    "npm:postcss-pseudoelements@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-selector-matches@2.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.2.1",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-selector-not@2.0.0": {
      "map": {
        "balanced-match": "npm:balanced-match@0.2.1",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-selector-parser@1.3.3": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:postcss@5.0.19": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.3",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:reduce-css-calc@1.2.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.1"
      }
    },
    "github:matthewbauer/hctef@0.3.2": {
      "map": {
        "detect-node": "npm:detect-node@2.0.3"
      }
    },
    "github:matthewbauer/plugin-raw@1.0.0": {
      "map": {
        "hctef": "github:matthewbauer/hctef@0.3.2"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:buffer@4.5.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:debounce@1.0.0": {
      "map": {
        "date-now": "npm:date-now@1.0.1"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:fbjs@0.2.1": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:fbjs@0.8.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:inline-style-prefixer@1.0.3": {
      "map": {
        "bowser": "npm:bowser@1.0.0",
        "inline-style-prefix-all": "npm:inline-style-prefix-all@1.0.5"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:js-yaml@3.5.5": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.2"
      }
    },
    "npm:jspm-loader-css@1.1.0": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
        "debounce": "npm:debounce@1.0.0",
        "path": "npm:path@0.12.7",
        "toposort": "npm:toposort@0.2.12"
      }
    },
    "npm:lodash.flowright@3.3.0": {
      "map": {
        "lodash._baseflatten": "npm:lodash._baseflatten@4.2.0",
        "lodash.rest": "npm:lodash.rest@4.0.2"
      }
    },
    "npm:lodash.merge@4.3.5": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@4.5.6",
        "lodash._stack": "npm:lodash._stack@4.1.3",
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.4",
        "lodash.keysin": "npm:lodash.keysin@4.1.3",
        "lodash.rest": "npm:lodash.rest@4.0.2"
      }
    },
    "npm:lodash.throttle@4.0.1": {
      "map": {
        "lodash.debounce": "npm:lodash.debounce@4.0.5"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:material-ui@0.15.0-alpha.2": {
      "map": {
        "inline-style-prefixer": "npm:inline-style-prefixer@1.0.3",
        "keycode": "npm:keycode@2.1.1",
        "lodash.flowright": "npm:lodash.flowright@3.3.0",
        "lodash.merge": "npm:lodash.merge@4.3.5",
        "lodash.throttle": "npm:lodash.throttle@4.0.1",
        "react-addons-create-fragment": "npm:react-addons-create-fragment@0.14.8",
        "react-addons-pure-render-mixin": "npm:react-addons-pure-render-mixin@0.14.8",
        "react-addons-transition-group": "npm:react-addons-transition-group@0.14.8",
        "react-addons-update": "npm:react-addons-update@0.14.8",
        "react-event-listener": "npm:react-event-listener@0.1.1",
        "recompose": "npm:recompose@0.15.1",
        "simple-assign": "npm:simple-assign@0.1.0",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:node-fetch@1.5.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:path@0.12.7": {
      "map": {
        "process": "npm:process@0.11.2",
        "util": "npm:util@0.10.3"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.3",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:react-tap-event-plugin@0.2.2": {
      "map": {
        "fbjs": "npm:fbjs@0.2.1"
      }
    },
    "npm:recompose@0.15.1": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
        "lodash": "npm:lodash@4.11.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:systemjs-plugin-yaml@0.2.0": {
      "map": {
        "js-yaml": "npm:js-yaml@3.5.5"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    }
  }
});
