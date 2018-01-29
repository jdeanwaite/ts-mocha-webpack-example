// alias: {
//   // CUSTOM PACKAGES:
//   'custom_modules': path.resolve(__dirname, 'src/custom_modules/'),
// }

const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: `./src/index.ts`,
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  output: {
    filename: 'build.js', // output file
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  resolve: {
    // Add in `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      test: /\.ts$/,
      use: [
        {loader: 'ts-loader',}
      ]

    }]
  },
}