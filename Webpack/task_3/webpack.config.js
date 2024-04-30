const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: './public',
    port: 8564,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard'
      // May need to add index.html template here just testing
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
