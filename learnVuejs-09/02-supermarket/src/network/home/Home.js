import request from "@/network/request";


export function HomeImgRequest(){
  return request({
    url:'home/multidata',
    method:'get'
  })
}

export function GetHomeGoods(type,page){
  return request({
    url:"home/data",
    params:{
      type:type,
      page:page
    }
  })
}
