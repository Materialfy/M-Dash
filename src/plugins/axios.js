// Lib imports
import axios from "axios";
import NProgress from "nprogress";
import SecureLS from 'secure-ls'

let ls = new SecureLS()

// state set to the previous token, the authorization Axios header set to same
const token = ls.get('tokenKey')
//const token = localStorage.getItem("token");


// creates a new instance that you will call instead of axios.
const restApi = axios.create({
	baseURL: 'https://reqres.in/api/',
	timeout: 3000,
	headers: {
		Authorization: 'Bearer ' + token,
	},
})
// Sets the default global url used by all of this axios instance's requests
 const genericApi = axios.create({
		baseURL: 'https://reqres.in/api/',
		timeout: 3000,
		headers: {},
 })
 if (token) {
		restApi.defaults.headers.common['Authorization'] = 'Bearer ' + token
 }
 axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
 restApi.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
restApi.defaults.headers.get["Accepts"] = "application/json";
genericApi.defaults.headers.get["Accepts"] = "application/json";

restApi.interceptors.request.use(
	function (request) {
		// Do something before request is sent
		NProgress.start();
		return request;
	},
	function (error) {
		// Do something with request error
		console.log(error);
		NProgress.done();
		return Promise.reject(error);
	}
);

// Add a response interceptor
restApi.interceptors.response.use(
	function (response) {
		NProgress.done();
		return response;
	},
	function (error) {
		// Do something with response error
		console.log(error);
		NProgress.done();
		return Promise.reject(error);
	}
);



export  {
  restApi,
  genericApi
};
