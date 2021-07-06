let path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
    // 别名
    // alias: {
    //   loader1: path.resolve(__dirname, "loaders", "loader1.js")
    // },
  },
  devtool: "source-map",
  module: {
    // loader 分类(enforce) ：pre 在前面的  post 在后面的  normal
    // loader 顺序依次： pre --> normal --> inline  -->post
    rules: [
      // loader 顺序问题， 从右向左，从下至上
      // {
      //   test: /\.js$/,
      //   use: ["loader3", "loader2", "loader1"],
      // },
      // 实现babel-loader
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};