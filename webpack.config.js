const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.mjs', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'build/js/'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build/'),
    port: 4444,
    publicPath: 'http://localhost:4444/js/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
