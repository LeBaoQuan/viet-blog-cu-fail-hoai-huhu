require("source-map-support").install();
require("ts-node").register({
  transpileOnly: true,
  files: true,
  ignore: [
    "(?:^|/)node_modules/(?!(gatsby-theme-advanced|gatsby))",
    "(?:^|/).cache/",
    "(?:^|/)public/",
  ],
});

module.exports = require("./gatsby/gatsby-config");