

//need to create some gettersand replace some code in the drawer componentfiles with this
const getters = {

}

// actions
const actions = {

}

//mutations
const mutations = {
  //these are nested arrow functions aka curried functions
  set = property => (state, payload) => (state[property] = payload),
  toggle = property => state => (state[property] = !state[property]),

  // calls just the first part of the nested functions, but the second part still happens
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  toggleDrawer: toggle('drawer')

}

export default {
  mutations,
  actions,
  getters,
  drawer: null,
  color: 'general',
  image: '' // change if you want a picture in the drawer but if you want to rid of the pictures, remove links here and in filter.vue
}
