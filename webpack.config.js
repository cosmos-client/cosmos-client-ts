const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/cdn.ts',
  output: {
    filename: '../cdn/main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [new webpack.ProvidePlugin({
    process: 'process/browser',
  })]
};
