import {number,test,sum} from "./aaa.js";

console.log(number);
console.log(test);

sum("调sum")

//导入default 这个名字可以自定义..但是只能存在一个
import zs from "./aaa.js";
console.log(zs)


//全部导入的写法
import * as all from "./aaa.js";
console.log(all.falg)