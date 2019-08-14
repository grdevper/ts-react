const path = require('path');
const webpack = require('webpack');

const vendors = [
  'react',
  'react-dom',
  'classnames',
];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, '../.dll'),
    filename: 'dll.js',
    library: '[name]_[hash:5]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../.dll', 'manifest.json'),
      name: '[name]_[hash:5]',
      context: path.resolve(__dirname, '../'),
    }),
  ],
};
