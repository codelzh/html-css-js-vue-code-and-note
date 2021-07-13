let number = 1
let name = 'abc'
let falg = true

//第一种导出，export以对象形式
export {
  number,name,falg
}

//第二种，在对象前面加关键字export
export let test = 'aaaaa'

//第三种导出function/class
function sum(t){
  console.log(t)
}

//导出
export{
  sum
}

// export  function sum(t){
//   console.log(t)
// }


//第四种 default导出
let test1='zhangsan'
export default  test1

