const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    minify: false,
  }),
  new FaviconsWebpackPlugin({
    logo: "./src/favicon.svg",
    favicons: {
      icons: {
        appName: "Klimakanzler:in",
        lang: "de-DE",
        coast: false,
        yandex: false,
        appleStartup: false,
      },
    },
  }),
];

if (process.env.ANALYZE_BUNDLE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.inline.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      },
      {
        test: /^(?!.*\.inline\.svg$).*\.svg$/,
        use: ["url-loader"],
      },

      {
        test: /\.(png|jpg|gif|woff|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: { extensions: ["*", ".mjs", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "[contenthash].js",
    clean: true,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 4444,
    publicPath: "http://localhost:4444/",
    hotOnly: true,
  },
  plugins,
};
