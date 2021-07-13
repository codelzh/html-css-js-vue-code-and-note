import axios from "axios";

export function increment(config,success,fail){

  //第一种封装  使用回调函数
  // let axios1 = axios.create({
  //   baseURL:'http://httpbin.org',
  //   method:'get'
  // })
  // axios1(config).then((res)=>{
  //   success(res)
  // }).catch((error)=>{
  //   fail(error)
  // })

  let axios1 = axios.create({
    baseURL:'http://httpbin.org',
    method:'get'
  })

  //请求拦截器 拦截下来。可以更改请求头的内容
  axios1.interceptors.request.use(success=>{
    // console.log(success);

    //return ==放行
    return success
  },error => {
    //拦截失败
    // console.log(error);
  })


  //响应拦截
  axios1.interceptors.response.use(success=>{
    console.log(success);
  },error=>{
    console.log(error);
  })

  //第二种封装 promise
  return new Promise((resolve,reject)=>{

    axios1(config).then((res)=>{
      resolve(res)
    }).catch((error)=>{
      reject(error)
    })



  })


}
