import axios from "axios";

// 引入 axios
export function request(config) {
    // 1、创建 axios 实例
    const instance = axios.create({
        baseURL:'http://127.0.0.1:8081/',
        timeout:5000
    });
    // 2、axios 的拦截
    // 2、1 请求拦截
    instance.interceptors.request.use((config)=>{
        return config
    },(err)=>{
        console.log(err)
    });
    // 2、2响应拦截器
    instance.interceptors.response.use((res)=>{
        return res.data
    },(err)=>{
        console.log(err)
    });
    //3、发送真正的网络请求
    return instance(config); //返回一个Promise
}