import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 50000000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://60.28.246.105:80/my012tradcent/';
axios.defaults.baseURL = 'http://localhost:8080/my012tradcent/';
// axios.defaults.baseURL = 'http://www.my012.com/my012tradcent/';
//axios.defaults.withCredentials=true;

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
  if(config.type === "json") {

  } else {
    config.data = qs.stringify(config.data, {arrayFormat: 'repeat'});
  }
  return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
// 对响应数据做点什么
	return response;
}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400: err.message = '请求错误(400)' ; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
    }else{
        err.message = '连接服务器失败!'
    }
    alert(err.message)
    return Promise.reject(err);
});


export default axios;
