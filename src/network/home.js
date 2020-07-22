import {request, request2} from "./request";

export function getHomeMultiData() {
    return request({
        url: "/home/multidata"
    })
}

//http://157.122.54.189:9088/image/v1/vertical/category/4e4d610cdf714d2966000000/vertical?skip=0&limit=30&order=hot
//http://157.122.54.189:9088/image/v1/vertical/category/4e4d610cdf714d2966000003/vertical?skip=130&limit=30&order=hot
//http://157.122.54.189:9088/image/v1/vertical/category/4e4d610cdf714d2966000002/vertical?skip=130&limit=30&order=hot
export function getGoodsData(id, skip) {
    const url = "/api/image/v1/vertical/category/" + id + "/vertical"
    return request2({
        url: url,
        params: {
            skip,
            limit: 30,
            order: "hot"
        }
    })
}