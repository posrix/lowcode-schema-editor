"use strict";

exports.proxyConfig = {
  dev: {
    "/api": {
      target: "http://127.0.0.1:8100",
      secure: false,
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: { "^/api": "" }
    }
  },
}
