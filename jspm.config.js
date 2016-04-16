SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "ingen": {
      "format": "esm",
      "main": "src/main.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.jpg": {
          "loader": "lazyimage"
        },
        "*.gif": {
          "loader": "lazyimage"
        },
        "*.png": {
          "loader": "lazyimage"
        }
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
    "alt": "npm:alt@0.18.4",
    "alt-utils": "npm:alt-utils@1.0.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "gsapi": "github:greensock/GreenSock-JS@1.18.2",
    "howler": "github:goldfire/howler.js@2.0",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "lazyimage": "github:laurentgoudet/plugin-lazyimage@0.2.0",
    "material-ui": "npm:material-ui@0.15.0-beta.1",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.0.1",
    "react-dom": "npm:react-dom@15.0.1",
    "react-tap-event-plugin": "npm:react-tap-event-plugin@0.2.2",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "yaml": "npm:systemjs-plugin-yaml@0.2.0",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.1"
      }
    },
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
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
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
    "npm:alt@0.18.4": {
      "map": {
        "flux": "npm:flux@2.1.1",
        "is-promise": "npm:is-promise@2.1.0",
        "transmitter": "npm:transmitter@2.0.0"
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
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:buffer@4.5.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@1.0.0",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:fbemitter@2.0.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.0"
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
    "npm:flux@2.1.1": {
      "map": {
        "fbemitter": "npm:fbemitter@2.0.2",
        "fbjs": "npm:fbjs@0.8.0",
        "immutable": "npm:immutable@3.8.0"
      }
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
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
    "npm:js-yaml@3.6.0": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.2"
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
        "lodash.debounce": "npm:lodash.debounce@4.0.6"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:material-ui@0.15.0-beta.1": {
      "map": {
        "inline-style-prefixer": "npm:inline-style-prefixer@1.0.3",
        "keycode": "npm:keycode@2.1.1",
        "lodash.merge": "npm:lodash.merge@4.3.5",
        "lodash.throttle": "npm:lodash.throttle@4.0.1",
        "react-addons-create-fragment": "npm:react-addons-create-fragment@15.0.1",
        "react-addons-transition-group": "npm:react-addons-transition-group@15.0.1",
        "react-addons-update": "npm:react-addons-update@15.0.1",
        "react-event-listener": "npm:react-event-listener@0.1.1",
        "recompose": "npm:recompose@0.17.0",
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
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:react-tap-event-plugin@0.2.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.0"
      }
    },
    "npm:react@15.0.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.0",
        "loose-envify": "npm:loose-envify@1.1.0",
        "object-assign": "npm:object-assign@4.0.1"
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
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.11.5": {
      "map": {
        "ast-types": "npm:ast-types@0.8.16",
        "esprima": "npm:esprima@2.7.2",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.3"
      }
    },
    "npm:recompose@0.17.0": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.5",
        "lodash": "npm:lodash@4.11.1"
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
    "npm:systemjs-plugin-yaml@0.2.0": {
      "map": {
        "js-yaml": "npm:js-yaml@3.6.0"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.11.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    }
  }
});
