const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.onCreateWebpackConfig = ({ stage, actions }, { include, ...opts }) => {
  const options = {
    honorIndex: false,
    exclude: [
      path.resolve('./src/pages'),
      /node_modules/
    ],
    include: [
      path.resolve('./src'),
      ...(include || [])
    ],
    ...opts
  }

  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new DirectoryNamedWebpackPlugin(options)
      ]
    }
  })
}
