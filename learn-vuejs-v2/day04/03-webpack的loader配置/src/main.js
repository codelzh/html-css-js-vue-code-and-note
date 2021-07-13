import {add} from './js/mathUtils';


console.log(add(1,20))

//依赖css文件，使得webpack在用这一个main.js文件，把css也给我打包了
require("./css/ordinary.css")

//依赖less文件
require("./css/ordinary2.less")