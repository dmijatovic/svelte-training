const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//load stats configuration
const { stats } = require('./webpack/stats')
//construct dist folder location
//note: we go up from webpack folder into dist
const dist = path.resolve(__dirname, 'dist')
console.log("dist...", dist)

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: dist,
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          //extract css into separate file
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              webpackImporter: false,
              implementation: require('sass'),
              sassOptions: {
                includePaths: [
                  './node_modules',
                  './theme'
                ]
              }
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    //copy index html
    //https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({}),
    // template causes errors?
    // new HtmlWebpackPlugin({
    //   title:"Test title",
    //   template: 'src/index.html'
    // }),
    //old extract text plugin to extract css
    //new ExtractTextPlugin('[name].css')
    new MiniCssExtractPlugin({
      // Options similar to webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    //copy assets
    //https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin({
      patterns: [
        {from: './static', to: './'},
      ],
    }),
    //define dev variables
    // new webpack.DefinePlugin({
    //   CONTACT_API_URL: JSON.stringify(
    //     'https://europe-west1-dv4all-site-test.cloudfunctions.net/sendEmail'
    //   ),
    // }),
  ],
  /**
   * Display stats, see link below for complete list
   * https://webpack.js.org/configuration/stats/#stats
   */
  stats: stats,
  /**
   * Webpack dev server setup
   */
  devtool: 'source-map',
  devServer: {
    port: 3000,
    stats: stats,
    compress: true,
    //route rewrites
    historyApiFallback: true,
  }
}
