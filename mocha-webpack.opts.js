// alias: {
//   // CUSTOM PACKAGES:
//   'custom_modules': path.resolve(__dirname, 'src/custom_modules/'),
// }

const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  devtool: 'source-map',
  resolve: {
    // Add in `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'ts-loader',
        }
      ]

    }]
  },
}