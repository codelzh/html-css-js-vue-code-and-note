import axios from "axios"

const a = axios.create({
  baseURL: "http://152.136.185.210:7878/api/m5",
  timeout: 5000,
})

export function request(config, success, fail) {


  return a(config)


  // return new Promise((resolve, reject) => {



  //   a(config).then(function (res) {
  //     success(res)
  //   }).catch(function (erro) {
  //     fail(erro)
  //   })




  // })
}