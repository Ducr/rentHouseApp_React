import axios from 'axios';

// 获取 配置文件中的 baseURL
const baseURL = process.env.REACT_APP_API_URL;

// 定义公共请求头
const instance = axios.create({
  baseURL: baseURL
})

export default instance;