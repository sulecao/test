import {request} from './request.js'

export function getHomeMultidata() {
    return request({
        url:'/'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    });
}