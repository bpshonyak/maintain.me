var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './app'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('css!sass'),
    }
  ]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {allowChunks: true})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
