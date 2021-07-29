//引入node包
const path = require('path')


module.exports = {
  //入口
  entry: './src/main.js',
  //出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "dist/",
  },

  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: "img/[name].[hash:8].[ext]"
          },
        }, ],
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },



    ],



  },

  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }

}