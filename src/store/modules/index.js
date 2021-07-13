// https://vuex.vuejs.org/en/modules.html
//module names are set in here automatically, the name will be modulefoldername to access that modules state
import createPersistedState from "vuex-persistedstate";
// eslint-disable-next-line no-undef
const requireModule = require.context(
	".", // The relative path of this folder
	true, //This turns on  check subfolders
	/\.js$/ //regex is searching for ".js"
);
//create modules object to export and set a level up in "const store = new Vuex.Store({""
const modules = {};

/* 
iterates through the .keys array with foreach.
passes in each filename and checks to see if any of them matches ./index.js
line:19 just checks for and stops this if index is returned
*/
requireModule.keys().forEach((fileName) => {
	if (fileName === "./index.js") return;

	//if not index.js, Remove ./ and .js with with replace() which returns: modulename/file.js i.e app/state.js
	const path = fileName.replace(/(\.\/|\.js)/g, "");
	//split into two different variables based on '/', modulename is the folder name of each module i.e drawertoggle
	const [moduleName, imported] = path.split("/"); //imported is the file.js that was inside the module
	// if the modules exists, turn on name spacing for modules
	if (!modules[moduleName]) {
		modules[moduleName] = {
			namespaced: true,
		};
	}

	modules[moduleName][imported] = requireModule(fileName).default;
});

export let plugins = [
	createPersistedState({
		paths: ["drawertoggle"],
	}),
];

export default modules
