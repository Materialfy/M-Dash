// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'

/* The login action(function) first param is the vuex commit object, 
second is userData which is passed from where-ever you call that action.
You then create a promise in the "login"'s return which is where we put the code
that we will use to trigger mutations.

you want to set your userData properties to the same as mine(i.e username, password) or change them below to match what you have

This same format is carried with the rest of the functions.

Some do not need anything passed in besides the commit object like "logout"
*/
export default {
  login ({ commit }, userData) {
    return new Promise((resolve, reject) => {
      //why am i commiting a mutation this early, should be getter? it is for an feature not implemented in this version
      commit('auth_request')
      axios.post('/auth', { username: userData.username, password: userData.password })
        .then(response => {
          // we use the data we get back in the response object after the promise succeeds
          //i know the object im getting back has an access_token and username prop
          const token = response.data.access_token
          const user = response.data.username
          console.log(response) // lazy error handling its everywhere lol
          // storing jwt in localStorage. https cookie is safer place to store
          localStorage.setItem('token', token)
          localStorage.setItem('user', user)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          // calling the mutation "auth_success" to change/update state.properties to the new values passed along in the second param
          commit('auth_success', { token, user })
          resolve(response)
        })
        .catch(err => {
          console.log('login error')
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
      //catches any errors and passed them to the promise for you to do something with
      .catch(error => reject(error))
    })
  },
  refreshtoken ({ commit }) {
    axios.get('/refresh')
      .then(response => {
        const token = response.data.access_token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        commit('auth_success', { token })
      })
      .catch(error => {
        console.log('refresh token error')
        commit('logout')
        localStorage.removeItem('token')
        console.log(error)
      })
  },
  getTableList ({ commit }, tableName) {
    this.$http.get(`/${tableName}`)
      .then(response => {
        console.log(response)
        let tableList = response.data.Keys
        commit('setTableList', { tableList })
      })
      .catch(error => console.log(error))
  },
  updateTableItem ( tableData) {
    return new Promise((resolve, reject) => {
      let httpmethod = tableData.method //allows you to delete/update and change the request method type without hardcoding
      axios({ url: `/${tableData.endpoint}`, method: httpmethod, data: tableData.tableItem })
        .then(response => { // you can also do some kind of data alteration here if you want
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }

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
