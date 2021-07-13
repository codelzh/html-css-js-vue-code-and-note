import axios from "axios";
import Vue from 'vue'

export default function (config){
  const axios1 = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5/'
  })

  return new Promise((resolve,reject)=>{
    axios1(config).then((res)=>{
      resolve(res)
    }).catch((error)=>{
      reject(error)
    })
  })
}