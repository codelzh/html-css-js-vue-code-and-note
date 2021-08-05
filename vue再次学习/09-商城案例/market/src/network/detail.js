import {
  request
} from "@/network/request.js";


export const getdetaildata = function (id) {
  return request({
    url: "/detail",
    params:{
      iid:id
    }
  })
}