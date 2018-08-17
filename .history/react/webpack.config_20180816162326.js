const path = require('path');
const PORT = 3000;
const HOST = '0.0.0.0';

module.exports = () => {
  const options = {
    mode: 'development',
    devServer: {
      port: PORT,
      host: HOST,
      hot: true,
      inline: true,
      open: true,
      historyApiFallback: true
    },
    output: {
      path: path.resolve(__dirname, 'dist')
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
    }
  };

  return options;
};
