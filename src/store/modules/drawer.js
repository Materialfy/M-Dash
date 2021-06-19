import { set, toggle } from "./drawersettoggle";

state: () => ({
	drawer: null,
	color: 'general',
	image: '' // change if you want a picture but if you are using this internally get rid of the picture links here and in filter.vue
})

//need to create some getters and replace some code in the drawer component files with this
const getters = {};

// actions
const actions = {};

//mutations
const mutations = {
	// calls just the first part of the nested functions, but the second part still happens
	// they are called in toolbar.vue, filter.vue and NavDrawer.vue
	//they change the state of what they are setting(image,color etc)
	setDrawer: set("drawer"),
	setImage: set("image"),
	setColor: set("color"),
	toggleDrawer: toggle("drawer"),
};

export default {
	namespaced: true,
	mutations,
	actions,
	getters,
	drawer: null,
	color: "general",
	image: "", // change if you want a picture in the drawer but if you want to rid of the pictures, remove links here and in filter.vue
};
