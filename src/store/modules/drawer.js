

//need to create some getters and replace some code in the drawer component files with this
const getters = {

}

// actions
const actions = {

}

//mutations
const mutations = {
  //these are nested arrow functions aka curried functions
  // this passes in the state to thats gonna be changed and the payload with the data to change it
  // example: set = color => return (state, newcolor) => return (state[color] = newcolor)
  set = property => (state, payload) => (state[property] = payload),
  toggle = property => state => (state[property] = !state[property]),

  // calls just the first part of the nested functions, but the second part still happens
  // they are called in toolbar.vue, filter.vue and drawer.vue
  //they change the state of what they are setting(image,color etc)
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  toggleDrawer: toggle('drawer')

}

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  drawer: null,
  color: 'general',
  image: '' // change if you want a picture in the drawer but if you want to rid of the pictures, remove links here and in filter.vue
}
