const PROXY_CONFIG = {
  "/apps/demo/**": {
    target: "http://localhost:4200/",
    pathRewrite: {
      "^/apps/demo": "",
    },
  },
  "/**!(apps/demo)/**/*": {
    target: "https://assets-dev.eu-latest.cumulocity.com/",
    changeOrigin: true,
    ws: true,
    secure: false,
    logLevel: "debug",
    cookieDomainRewrite: "localhost",
    onProxyRes: (proxyResponse) => {
      if (!this.ssl && proxyResponse.headers["set-cookie"]) {
        const cookies = proxyResponse.headers["set-cookie"].map((cookie) =>
          cookie.replace(/;\s{0,}secure/gi, "")
        );
        proxyResponse.headers["set-cookie"] = cookies;
      }
    },
  },
};

module.exports = PROXY_CONFIG;
