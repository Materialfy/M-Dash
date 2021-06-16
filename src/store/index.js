/**
 * Vuex
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import state from './state'
import drawerapp from './modules/drawer,js'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  drawerapp,
  state
})

export default store
