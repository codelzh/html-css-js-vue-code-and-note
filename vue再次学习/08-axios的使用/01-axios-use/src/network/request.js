import axios from "axios"

const a = axios.create({
  baseURL:"http://httpbin.org/get",
  timeout:5000,
})

export function network1(config,success,fail){
  a(config).then((res)=>{
    success(res);
  }).catch(()=>{
    fail(fail);
  })
}