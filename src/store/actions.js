// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
import { restApi } from '../plugins/axios'
import SecureLS from 'secure-ls'

let ls = new SecureLS()
/* The login action(function) first param is the vuex commit destructured object, 
second is userData which is passed from where-ever you call that action.
You then create a promise in the "login"'s return which is where we put the code
that we will use to trigger mutations.
*/

async function login({ commit }, userData) {
	// one day ill implement snackbars with the auth state or use it in a component or footer
	commit('auth_request')
  let response = await restApi
		.post('login', {
			username: userData.username,
			password: userData.password,
		})
		.then((response) => {
			// we use the data we get back in the response object after the promise succeeds
			//you can change the data object props to match whatever your sever sends
			const token = response.data.token
			const user = response.data.username
			// storing jwt in localStorage. https cookie is safer place to store
			ls.set('tokenKey', { token: token }) // using secure-ls to encrypt local storage
			ls.set('userKey', { user: user })
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
			// calling the mutation "auth_success" to change/update state.properties to the new values passed along in the second param
			commit('auth_success', { token, user })
		})
		.catch((err) => {
			console.log('login error' + err)
			commit('auth_error')
			ls.remove('token')
		})
  return response
}

export default {
	login,
	logout({ commit }) {
		return new Promise((resolve, reject) => {
			commit('logout')
			ls.remove('token')
			delete restApi.defaults.headers.common['Authorization']
			resolve()
				//catches any errors and passed them to the promise for you to do something with
				.catch((error) => reject(error))
		})
	},
	refreshtoken({ commit }) {
		restApi
			.get('/refresh')
			.then((response) => {
				const token = response.data.access_token
				ls.set('tokenKey', { token: token })
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
				commit('auth_success', { token })
			})
			.catch((error) => {
				console.log('refresh token error')
				commit('logout')
				ls.remove('token')
				console.log(error)
			})
	},
	getTableList({ commit }, tableName) {
		restApi
			.get(`/${tableName}`)
			.then((response) => {
				console.log(response)
				let tableList = response.data.Keys
				commit('setTableList', { tableList })
			})
			.catch((error) => console.log(error))
	},
	updateTableItem(tableData) {
		return new Promise((resolve, reject) => {
			let httpmethod = tableData.method //allows you to delete/update and change the request method type without hardcoding
			axios({
				url: `/${tableData.endpoint}`,
				method: httpmethod,
				data: tableData.tableItem,
			})
				.then((response) => {
					// you can also do some kind of data alteration here if you want
					resolve(response)
				})
				.catch((error) => {
					console.log(error)
					reject(error)
				})
		})
	},

	// autoRefreshToken ({ commit }) {
	//   return new Promise((resolve, reject) => {
	//     setInterval(function () {
	//       // code goes here that will be run every 20 minutes.
	//       axios.get('/refresh')
	//         .then(response => {
	//           const token = response.data.access_token
	//           localStorage.setItem('token', token)
	//           axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
	//           commit('auth_success', { token })
	//           resolve(response)
	//         })
	//         .catch(error => {
	//           console.log('refresh token error')
	//           console.log(error)
	//           reject(error)
	//         })
	//     }, 1200000)
	//   }
	//   )
	// },
}
