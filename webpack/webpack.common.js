const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', //helps transpile the ts and js files and attach that to bundle.js
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js', 
  },
  plugins: [
    new HtmlWebpackPlugin({ //inject bundle.js file in to index.html file - creates a script tag and attaches bundle.js to index.html
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: {
    children:true
  },
  
  externals: {
      config: JSON.stringify({
          apiUrl: 'https://localhost:4000'
      })
  }
}