const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Output directory for all the assets
  },

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'), // Where it will serve the content from
    },
    compress: true, // Enable gzip compression
    hot: true, // Enable hot module replacement
  },

  // Source maps configuration for better debugging
  devtool: 'inline-source-map',

  // Set the mode to development to get easier debugging output
  mode: 'development',

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both JavaScript and JSX files
        exclude: /node_modules/, // Ignore node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets for modern JavaScript and React
          }
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          'css-loader', // Resolves import and url() in CSS files
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/', // Output path for images
            }
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65 // Quality scaling for JPEGs
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90], // Quality scaling for PNGs
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: { // Convert images to WebP format
                quality: 75
              }
            }
          },
        ],
      },
    ],
  },
};
