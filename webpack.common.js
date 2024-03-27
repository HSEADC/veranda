const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    filterTag: './src/javascript/tagFilter.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'dev_build/share/')
        },
        {
          from: path.resolve(__dirname, 'src/share/'),
          to: path.resolve(__dirname, 'docs/share/')
        }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/queAnswer.html',
      filename: './queAnswer.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/styleGuide.html',
      filename: './styleGuide.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas.html',
      filename: './ideas.html'
    }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/articles/ecoHobby.html',
      filename: './articles/ecoHobby.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/cultureCode.html',
      filename: './articles/cultureCode.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/cherryJam.html',
      filename: './articles/cherryJam.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/creativeCountryside.html',
      filename: './articles/creativeCountryside.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/decoration.html',
      filename: './articles/decoration.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/flowersForYou.html',
      filename: './articles/flowersForYou.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/mayChillOut.html',
      filename: './articles/mayChillOut.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/nutriciolog.html',
      filename: './articles/nutriciolog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/picnicCountry.html',
      filename: './articles/picnicCountry.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/restzone.html',
      filename: './articles/restzone.html'
    }),
    // Question-Answers
    new HtmlWebpackPlugin({
      template: './src/QA/queAns.html',
      filename: './QA/queAns.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/activeGames.html',
      filename: './QA/activeGames.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/carrot.html',
      filename: './QA/carrot.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/fence.html',
      filename: './QA/fence.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/findDecor.html',
      filename: './QA/findDecor.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/komari.html',
      filename: './QA/komari.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/mushrooms.html',
      filename: './QA/mushrooms.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/notFreeze.html',
      filename: './QA/notFreeze.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/summerDrinks.html',
      filename: './QA/summerDrinks.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/taxes.html',
      filename: './QA/taxes.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/watering.html',
      filename: './QA/watering.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/whichFlowers.html',
      filename: './QA/whichFlowers.html'
    }),
    // IdeasPage
    new HtmlWebpackPlugin({
      template: './src/ideas/ideaPage.html',
      filename: './ideas/ideaPage.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/kite.html',
      filename: './ideas/kite.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/collectingFlowers.html',
      filename: './ideas/collectingFlowers.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/drinks.html',
      filename: './ideas/drinks.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rainwalker.html',
      filename: './ideas/rainwalker.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rayPhoto.html',
      filename: './ideas/rayPhoto.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/romantice.html',
      filename: './ideas/romantice.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/sports.html',
      filename: './ideas/sports.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rainday.html',
      filename: './ideas/rainday.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/banya.html',
      filename: './ideas/banya.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/herbs.html',
      filename: './ideas/herbs.html'
    }),

    // Article

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
