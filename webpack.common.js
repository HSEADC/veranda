const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = ['/', '/articles.html', 'ideas.html', 'index.html']

module.exports = {
  entry: {
    index: './src/index.js',
    filterTag: './src/javascript/tagFilter.js',
    addNone: './src/javascript/addNone.js',
    search_vanila: './src/search-vanila.js',
    scrollNavbar: './src/javascript/scrollNavbar.js',
    menubar: './src/menubar.jsx',
    search: './src/search.jsx'
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
    new SitemapPlugin({ base: 'https://veranda-adc.ac', paths }),

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
      template: './src/index.ejs',
      filename: './index.html',
      chunks: ['index', 'menubar']
    }),
    new HtmlWebpackPlugin({
      template: './src/search-vanila.html',
      filename: './search-vanila.html',
      chunks: ['search_vanila']
    }),
    // searchPage
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['search', 'menubar']
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'filterTag']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles.ejs',
      filename: './articles.html',
      chunks: ['index', 'menubar', 'filterTag', 'addNone']
    }),
    new HtmlWebpackPlugin({
      template: './src/queAnswer.ejs',
      filename: './queAnswer.html',
      chunks: ['index', 'menubar', 'filterTag']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleGuide.html',
      filename: './styleGuide.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas.ejs',
      filename: './ideas.html',
      chunks: ['index', 'menubar', 'filterTag']
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html',
      chunks: ['index', 'filterTag']
    }),
    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: './500.html',
      chunks: ['index', 'filterTag']
    }),
    new HtmlWebpackPlugin({
      template: './src/505.html',
      filename: './505.html',
      chunks: ['index', 'filterTag']
    }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/articles/ecoHobby.html',
      filename: './articles/ecoHobby.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/cultureCode.html',
      filename: './articles/cultureCode.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/cherryJam.html',
      filename: './articles/cherryJam.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/creativeCountryside.html',
      filename: './articles/creativeCountryside.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/decoration.html',
      filename: './articles/decoration.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/flowersForYou.html',
      filename: './articles/flowersForYou.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/mayChillOut.html',
      filename: './articles/mayChillOut.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/nutriciolog.html',
      filename: './articles/nutriciolog.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/picnicCountry.html',
      filename: './articles/picnicCountry.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/restzone.html',
      filename: './articles/restzone.html',
      chunks: ['index']
    }),
    // Question-Answers
    new HtmlWebpackPlugin({
      template: './src/QA/queAns.html',
      filename: './QA/queAns.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/activeGames.html',
      filename: './QA/activeGames.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/carrot.html',
      filename: './QA/carrot.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/fence.html',
      filename: './QA/fence.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/findDecor.html',
      filename: './QA/findDecor.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/komari.html',
      filename: './QA/komari.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/mushrooms.html',
      filename: './QA/mushrooms.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/notFreeze.html',
      filename: './QA/notFreeze.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/summerDrinks.html',
      filename: './QA/summerDrinks.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/taxes.html',
      filename: './QA/taxes.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/watering.html',
      filename: './QA/watering.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/QA/whichFlowers.html',
      filename: './QA/whichFlowers.html',
      chunks: ['index']
    }),
    // IdeasPage
    new HtmlWebpackPlugin({
      template: './src/ideas/ideaPage.html',
      filename: './ideas/ideaPage.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/kite.html',
      filename: './ideas/kite.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/collectingFlowers.html',
      filename: './ideas/collectingFlowers.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/drinks.html',
      filename: './ideas/drinks.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rainwalker.html',
      filename: './ideas/rainwalker.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rayPhoto.html',
      filename: './ideas/rayPhoto.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/romantice.html',
      filename: './ideas/romantice.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/sports.html',
      filename: './ideas/sports.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/rainday.html',
      filename: './ideas/rainday.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/banya.html',
      filename: './ideas/banya.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/ideas/herbs.html',
      filename: './ideas/herbs.html',
      chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/searchbar.html'),
        location: 'searchbar',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
