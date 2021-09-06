const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    filenameHashing: true,
    pages: {
        index: {
            entry: "./src/pages/index/index.js", // 配置入口js文件
            template: "./src/pages/index/index.html", // 主页面
            filename: "index.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        user: {
            entry: "./src/pages/user/user.js", // 配置入口js文件
            template: "./src/pages/user/user.html", // 主页面
            filename: "user.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'user']
        },
    },

    chainWebpack: (config) => {
        config.resolve.alias
        config.resolve.alias.set('@', resolve('src'))
            .set('assets', resolve('src/assets/'))
            .set('img', resolve('src/assets/img'))

            .set('components', resolve('src/components'))
            .set('common', resolve('src/components/common'))
            .set('context', resolve('src/components/context'))

            .set('views', resolve('src/views'))
            .set('home', resolve('src/views/home'))


    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "src/global.less")]
        }
    },
}