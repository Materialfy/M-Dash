/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

//import store from "../store";
export default [
	// This section is primarily for the login but it allows you to add external other pages to be rendered outside the dashboard layout like the login
	//if you want to add more external routes make them in the children array
	{// using the named route option 
		path: "/login",
		meta: {
			name: "External",
			requiresAuth: false,
		},
		component: () => import(`@/components/views/ExternalView.vue`), // this renders the children in this layout
		children: [
			//any components in this path auto render in External
			{
				path: "", // you leave this blank if you want it to default to the parents path
				name: "login",
				component: () => import(`@/components/core/LoginForm.vue`),
			},
			{
				path: "/home", // you leave this blank if you want it to default to the parents path
				name: "home",
				component: () => import(`@/components/unused/Home.vue`),
			},
		],
	},
	
	{
		path: '/',
		meta: {
			name: 'dashboard-view',
			requiresAuth: false,
		},
		component: () => import(`@/components/views/DashboardView.vue`),
		children: [
			{
				path: "", //defaults to /dashboard if left blank
				meta: {
					name: 'Dashboard',
				},
				component: () => import(`@/components/DashboardViews/Dashboard.vue`),
			},
			{
				path: "user-profile", // ends up as /dashboard/user-profile
				meta: {
					name: "UserProfile",
					
				},
				component: () => import(`@/components/DashboardViews/UserProfile.vue`),
			},
			{
				path: "table-list",
				meta: {
					name: "TableList",
				},
				component: () => import(`@/components/DashboardViews/SimpleTablesView.vue`),
			},
			{
				path: "user-tables",
				meta: {
					name: "UserTable",
					
				},
				component: () => import(`@/components/DashboardViews/UsersTable.vue`),
			},
			{
				path: "tablestest",
				meta: {
					name: "ComplexTablesTest",
				},
				component: () => import(`@/components/DashboardViews/TableListView.vue`),
			},
			{
				path: "typography",
				meta: {
					name: "Typography",
				},
				component: () => import(`@/components/DashboardViews/Typography.vue`),
			},
			{
				path: "icons",
				meta: {
					name: "Icons",
				},
				component: () => import(`@/components/DashboardViews/Icons.vue`),
			},
			{
				path: "maps",
				meta: {
					name: "Maps",
				},
				component: () => import(`@/components/DashboardViews/Maps.vue`),
			},
			{
				path: "notifications",
				meta: {
					name: "Notifications",	
				},
				component: () =>
					import(`@/components/DashboardViews/Notifications.vue`),
			},
		],
		//per route guard if you dont want to use the global version in /router/index
		// beforeEnter: (to, from, next) => {
		// 	// checks to see if you are trying to go to dashboard and are logged in
		// 	if (to.name !== 'dashboard' && store.getters.authorized) {
		// 		next("/dashboard");
		// 	} 
		// 	// sends you to login if you arent authorized
		// 	else if (to.name !== 'dashboard' && !store.getters.authorized) { //
		// 		next("/login");
		// 	}
		// 	else {
		// 		next(to.name); // this sends you to your original route if you arent trying to go to login
		// 	}
		// },
	},
	// This is a catch all aka page not found route. it will send you to the dashboard
	{
		path: "*",
		redirect: {
			name: 'catchAll',
			path: "/dashboard",
		},
		meta: {
			requiresAuth: true,
		},
	},
	//Error component fallback
	{
		path: "/:catchAll(.*)",
		component: () => import(`@/components/error/NotFound.vue`),
		name: "NotFound",
	},
];
