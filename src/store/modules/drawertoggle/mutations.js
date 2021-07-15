
/*
these are nested arrow functions aka curried functions
this passes in the state to thats gonna be changed and the payload with the data to change it
example: set = color => return (state, newcolor) => return (state[color] = newcolor)
you're adding new data to which ever state object property passed in
drawerapp state: color, drawer, image
*/
//state[property] and state.property mean the same thing
const set = property => (state, dataPayload) => (state[property] = dataPayload)

// const toggle = property => 
//       state => {
//         return (state[property] = !state[property])
//       } 

const toggleDrawerState = state => {
    state.drawerState = true
}
/* 
	these are called in navbar.vue, settings.vue and sidedrawer.vue
*/
export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  toggleDrawerState
}
