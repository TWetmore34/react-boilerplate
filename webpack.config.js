const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
      mode: "development",
      entry: './src/index.js',
      optimization: {
        minimize: true,
      },    
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
      },
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true,
        open: true
      },
    
      target: 'web',
      plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({template: "./src/index.html"})],
      module: {
          rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                    "@babel/preset-env", 
                    "@babel/preset-react"
                ],
              }
            }
          },
        ]
      }
      
    };
  