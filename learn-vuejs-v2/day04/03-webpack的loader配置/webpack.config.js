const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname ,'dist'),
    filename:'bundle.js',
    //本项目url默认路径都已这个开始
    publicPath:'dist/',
  },

  module:{
    //css
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader','css-loader' ]
      },

      //less
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },

        //图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //果图片小于这个，那么在浏览器以base64的形式显示
              //如果图片大于这个，那么将使用file-loder解析，把图片放到dist目录
              limit: 20000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },


    ]

  }




}


