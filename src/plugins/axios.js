// Lib imports
import axios from "axios";
import NProgress from "nprogress";


const token = localStorage.getItem("token");
if (token) {
	restApi.defaults.headers.common["Authorization"] = "Bearer " + token;
}

// creates a new instance that you will call instead of axios.
export const restApi = axios.create({
	baseURL: "http://127.0.0.1:8001/admin/",
	timeout: 3000,
	headers: {
		Authorization: "Bearer " + token,
	},
});
// Sets the default global url used by all of this axios instance's requests
export const genericApi = axios.create({
	baseURL: "https://reqres.in/api",
	timeout: 3000,
	headers: {
		Authorization: "Bearer " + token,
		Accept: "application/json",
	},
});

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



export default {};
