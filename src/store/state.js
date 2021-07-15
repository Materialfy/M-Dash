// https://vuex.vuejs.org/en/state.html
import SecureLS from 'secure-ls'

let ls = new SecureLS()

export default {
	authStatus: '',
	token: ls.get('tokenKey') || '',
	user: {},
	tableList: [],
	notifications: [
		{
			avatar: null,
			//'https://banner2.cleanpng.com/20180820/iyz/kisspng-computer-icons-vector-graphics-image-icon-design-i-flat-delete-icon-bing-images-5b7b43bfdfb3e4.1170827415348049279163.jpg',
			title: 'Server error',
			subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be a hero and fix this bug team member`,
			divider: true,
			inset: true,
			icon: 'mdi-close-circle',
		},
		{
			avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
			title: 'Summer BBQ <span class="grey--text text--lighten-1">@4</span>',
			subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
			divider: true,
			inset: true,
		},
		{
			avatar: null,
			title: 'Reminder: Meeting with person in 30 mins',
			subtitle:
				'<span class="font-weight-bold">Sandra Adams</span> &mdash; You have an very important meeting thats important.',
			divider: true,
			inset: true,
			icon: 'mdi-chat-alert',
		},
	],
	currentTime: new Date().toLocaleString(),
	avatarURL:
		'https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg',
}
