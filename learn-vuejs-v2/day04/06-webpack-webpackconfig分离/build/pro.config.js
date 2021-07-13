const uglify = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseconfig = require('./base.config')

module.exports = webpackMerge(baseconfig,{

  plugins:[
    new uglify(),
  ]

})







