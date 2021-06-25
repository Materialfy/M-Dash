
/*
This is generic actions that you can import to use in any module
these are nested arrow functions aka curried functions
this passes in the state to thats gonna be changed and the payload with the data to change it
example: set = color => return (state, newcolor) => return (state[color] = newcolor)
you're adding new data to which ever state object property passed in
drawerapp state: color, drawer, image
*/
//state[property] and state.property mean the same thing
const set = property => (state, newdata) => (state[property] = newdata)

const toggle = property => 
      state => {
        console.log("setToggle:  " + state.drawerState)
        //state.drawerState = true
        state.skip = true
        return (state[property] = !state[property])
      } 

const toggleDrawerState = state => {
    console.log("toggleDrawerState mutation before:  " + state.drawerState)
    state.drawerState = true
    console.log("toggleDrawerState mutation after:  " + state.drawerState)
}
/* 
  calls just the first part of the nested arrow functions, but the second nested arrow function executes
	they are called in toolbar.vue, filter.vue and drawer.vue
	they change the state of what they are setting(image,color etc)
  we are exporting an object with methods
*/
export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  toggleDrawer: toggle('drawerState'),
  toggleDrawerState
}
