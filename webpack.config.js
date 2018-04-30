var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'eslint-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  }
};