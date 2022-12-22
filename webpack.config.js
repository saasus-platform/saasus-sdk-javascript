const path = require("path");
//const TypescriptDeclarationPlugin = require("typescript-declaration-webpack-plugin");

// 現在rollup.jsでコンパイルしているが、型ファイルを一つにまとめたいので、一応残しておく
// NPM モジュールとして公開されない範囲
var main = {
  mode: "development",
  //target: "web",
  target: "node",
  entry: path.join(__dirname, "src", "main"),
  output: {
    library: "SaaSus",
    libraryTarget: "umd",
    filename: "saasus-sdk.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "this", //self doesn't work in node.js
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "src/modules"),
          path.resolve(__dirname, "generated"),
        ],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
    preferRelative: true,
  },
  // plugins: [
  //   new TypescriptDeclarationPlugin({
  //     removeComments: false,
  //     out: "saasus-sdk.d.ts",
  //   }),
  // ],
};
module.exports = [main];
