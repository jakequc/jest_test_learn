import axios from "axios";
import './../mockData/mockData'

// 这是一个普通的请求数据的异步函数
export const fetchData = (fn) => {
    axios.get('/test').then((response) => {
        fn(response.data);
    });
}

// 这是一个请求promise的函数，本身返回一个promise
export const fetchPromiseData = () => {
    return axios.get('/promise')
}

// 这是一个请求promise的函数，本身返回一个promise
export const fetchNotExistURL_PromiseData = () => {
    return new Promise((resolve, reject) => reject('Error'))
}

//  
export const fetchTestData = (fn) => {
    return axios.get('/test')
}