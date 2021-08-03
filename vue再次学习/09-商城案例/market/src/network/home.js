import {
  request
} from "@/network/request.js";


export const gethomedata = function () {
  return request({
    url: "/home/multidata"
  })
}

export const getgoods = function(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}