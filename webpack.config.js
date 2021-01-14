const path = require('path');

const SRC_DIR = path.resolve(__dirname, '/client/src');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['@babel/preset-react', '@babel/preset-env'],
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: 'development',
};
