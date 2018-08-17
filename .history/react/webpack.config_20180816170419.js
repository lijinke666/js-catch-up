const path = require('path');
const PORT = 3000;
const HOST = 'localhost';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const options = {
    mode: 'development',
    devServer: {
      contentBase: [
        path.resolve(__dirname, "dist"),
      ],
      port: PORT,
      host: HOST,
      hot: true,
      inline: true,
      open: true,
      historyApiFallback: true
    },
    entry: [
      `webpack-dev-server/client?${HOST}:${PORT}`,
      path.resolve(__dirname, 'src/index.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "build.js",
      publicPath: `${HOST}:${PORT}/`
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ],
          exclude: '/node_modules/',
          include: [path.resolve('src')]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html') //模板文件
      })
    ]
  };

  return options;
};
