const path = require("path")
const PORT = 8080
const HOST = "0.0.0.0"

module.exports = () => {
  const options = {
    mode:"development",
    devServer: {
      port:PORT,
      host:HOST,
      hot:true,
      inline:true,
      open:true,
      historyApiFallback: true
    },
    output: {
      path: path.resolve(__dirname,"dist")
    }
  }

  return options
}