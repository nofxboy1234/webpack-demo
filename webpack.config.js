const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Webpack 5 Video Tutorials',
      // filename: 'index.html',
      // inject: 'head',
      // scriptLoading: 'defer',
      // template: '',
    }),
  ],
};
