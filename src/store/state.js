// https://vuex.vuejs.org/en/state.html

export default {
	authStatus: "",
	token: localStorage.getItem("token") || "",
	user: {},
	tableList: [],
	notifications: [
		{
			avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
			title: "Brunch this weekend?",
			subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; 
      I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
			divider: true,
			inset: true,
		},
		{
			avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
			title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
			subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
			divider: true,
			inset: true,
		},
		{
			avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
			title: "Oui oui",
			subtitle:
				'<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
			divider: true,
			inset: true,
		},
	],
	currentTime: new Date().toLocaleString(),
	avatarURL: "https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg",
};
