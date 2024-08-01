const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    order: './src/view/order/order.js',
    agree: './src/view/agree/agree.js',
    card: './src/view/card/card.js',
    cpc: './src/view/cpc/cpc.js',
    complete: './src/view/complete/complete.js'
  },
  output: {
    filename: './js/[name].[chunkhash].js',
    // chunkFilename: './js/[name].js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'asset/[hash][ext][query]'
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      templateParameters: {
        title: '티몬 마크업샘플 리스트',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/view/order/order.html',
      filename: './view/order/index.html',
      chunks: ['order'],
      templateParameters: {
        title: '구독 신청하기',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/view/agree/agree.html',
      filename: './view/agree/index.html',
      chunks: ['agree'],
      templateParameters: {
        title: '구독 신청하기 - 약관동의',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/view/card/card.html',
      filename: './view/card/index.html',
      chunks: ['card'],
      templateParameters: {
        title: '구독 신청하기 - 카드 등록',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/view/cpc/cpc.html',
      filename: './view/cpc/index.html',
      chunks: ['cpc'],
      templateParameters: {
        title: '구독 신청하기 - 카드발급',
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/view/complete/complete.html',
      filename: './view/complete/index.html',
      chunks: ['complete'],
      templateParameters: {
        title: '구독 신청하기 - 신청 완료',
      }
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      // chunkFilename: './css/[id].[chunkhash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|apng|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'asset/img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'asset/font/[name][ext]',
        },
      },
      {
        test: /\.txt/,
        type: 'asset/resource',
        generator: {
          filename: 'asset/txt/[name][ext]',
        },
      }
  	]
  },
}