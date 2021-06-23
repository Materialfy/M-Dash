import { set, toggle } from '../setToggle.js'

// calls just the first part of the nested functions, but the second part still happens
	// they are called in toolbar.vue, filter.vue and drawer.vue
	//they change the state of what they are setting(image,color etc)
  //idk why this isnt a block comment lol but its exporting an object with imported methods
export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  toggleDrawer: toggle('drawer')
}
