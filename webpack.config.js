const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test:  /\.(js$|jsx)/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test:/\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test:/\.html$/,
        use:["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devtool: 'sourcemap',
  mode: "development",
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }

};
