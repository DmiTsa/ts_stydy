const path = require('path');

module.exports = {
  // entry: './src/app.ts',
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  module: {
    test: /\.[tj]s$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  resolve: { extensions: ['js', 'ts'] },
};
// resolve: { extensions: ['js', 'ts'] },
