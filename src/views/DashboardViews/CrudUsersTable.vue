<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<template>
	<v-container fill-height grid-list-xl>
		<v-row justify-md="center" wrap>
			<v-col class="d-flex justify-center" md12>
				<div>
					<materialfy-header-card
						color="tertiary"
						cardTitle="Usernames Table"
						cardOverlineText="Such a classic table"
						:cardShowAvatar="false"
						:cardShowActions="false"
						:cardShowInnerList="false"
						class="pa-3"
					>
						<!-- passing the data table into materialfy card slot  -->
						<template v-slot:crdInner>
							<v-spacer />
							<v-text-field
								v-model="search"
								append-icon="search"
								label="Search"
								single-line
								hide-details
							/>
							<!-- New item button section  -->
							<v-dialog v-model="dialog" max-width="500px">
								<!-- activates the pop-up v-card by recieving 'on' event(v-on="on")  -->
								<template #activator="{ on }">
									<v-btn color="tertiary" class="my-2" v-on="on">
										New Item
									</v-btn>
								</template>
								<!-- Content of the add new item popup  -->
								<v-card>
									<v-card-text>
										<v-container grid-list-md>
											<v-row wrap>
												<v-col xs12 sm6 md4>
													<v-text-field
														v-model="editedItem.username"
														label="Username"
													/>
												</v-col>
												<v-col xs12 sm6 md4>
													<v-text-field
														v-model="editedItem.password"
														label="Password"
													/>
												</v-col>
												<v-col xs12 sm6 md4>
													<v-text-field
														v-model="editedItem.email"
														label="Email"
													/>
												</v-col>
												<v-col xs12 sm6 md4>
													<v-checkbox
														v-model="checkboxAdmin"
														:label="`IsAdmin`"
													/>
												</v-col>
												<v-col xs12 sm6 md4>
													<v-checkbox
														v-model="checkboxActive"
														:label="`IsActive`"
													/>
												</v-col>
											</v-row>
										</v-container>
									</v-card-text>
									<!-- this is the actions section which calls close or save methods of the popup -->
									<v-card-actions>
										<v-spacer />
										<v-btn color="blue darken-1" text @click="close">
											Cancel
										</v-btn>
										<v-btn color="blue darken-1" text @click="save">
											Save
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
							<!-- lets you change the props/options for the data table. vuetify iterates through the arrays you feed the headers & items props
							the headers(array of objects) and items(array of objects)  prop is v-binded into the data () props and passed into the table
							-->
							<!-- Headers array object 'value'(value: "first_name") must be the same name as one of your items array(UserList) objects propertys(first_name: George)  -->
							<!-- search: Text input used to filter items, binded to the search data prop which is two way binded via v-model in v-text-field  -->
							<v-data-table
								:headers="headers"
								:items="UserList"
								:items-per-page-options="rowsAmount"
								:search="search"
								class="elevation-1"
							>
								<!-- change table header background color and text--color inside the headers data prop(class: "tertiary--text text-h6")-->
								<template v-slot:headerCell="{ header }">
									<!-- you get the value of the header objects property 'text'  -->
									<span v-text="header.text" />
								</template>
								<!--  named(items) scoped(props) v-slot -->
								<!-- This uses the array you passed into the items prop above -->
								<!-- for item in items -->
								<!-- You can use the dynamic slots item.<name> to customize only certain columns. <name> is the name of the value property in the corresponding header item sent to headers -->
								<!--  -->
								<template #items="props">
									<!--  -->
									<td>{{ props.item.id }}</td>
									<td class="justify-center">
										<!--  -->
										<v-icon medium class="mr-2" @click="editItem(props.item)">
											edit
										</v-icon>
										<v-icon medium @click="deleteItem(props.item)">
											delete
										</v-icon>
									</td>
									<!--  -->
									<td>
										<v-edit-dialog
											:return-value.sync="props.item.first_name"
											large
											lazy
											persistent
											@save="saveInline"
											@cancel="cancelInline"
											@open="openInline"
											@close="closeInline"
										>
											<div>{{ props.item.first_name }}</div>
											<template #input>
												<v-text-field
													v-model="props.item.first_name"
													:rules="[max25chars]"
													label="Edit"
													single-line
													counter
													autofocus
												/>
											</template>
										</v-edit-dialog>
									</td>
									<!--  -->
									<td>
										<v-edit-dialog
											:return-value.sync="props.item.email"
											large
											lazy
											persistent
											@save="save"
											@cancel="cancelInline"
											@open="openInline"
											@close="closeInline"
										>
											<div>{{ props.item.email }}</div>
											<template #input>
												<v-text-field
													v-model="props.item.email"
													:rules="[max25chars]"
													label="Edit"
													single-line
													counter
													autofocus
												/>
											</template>
										</v-edit-dialog>
									</td>
									<!--  -->
									<td class="">
										{{ props.item.isAdmin }}
									</td>
									<td class="">
										{{ props.item.isActive }}
									</td>
									<td class="">
										{{ props.item.lastSeen }}
									</td>
								</template>
							</v-data-table>
							<v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
								{{ snackText }}
								<v-btn text @click="snack = false"> Close </v-btn>
							</v-snackbar>
						</template>
					</materialfy-header-card>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { genericApi } from "../../plugins/axios";
	export default {
		data: () => ({
			snack: false,
			snackColor: "",
			snackText: "",
			max25chars: (v) => v.length <= 25 || "Input too long!",
			pagination: {},
			UserList: [],
			checkboxAdmin: true,
			checkboxActive: true,
			rowsAmount: [
				15,
				20,
				25,
				{ text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 },
			],
			dialog: false,
			search: "",
			headers: [
				{ text: "Id", align: "left", value: "id" },
				{ text: "-----Actions-----", value: "actions", sortable: false },
				{ text: "Avatar", value: "Avatar" },
				{ text: "First Name", value: "first_name" },
				{ text: "Last Name", value: "last_name" },
				{ text: "email", value: "email" },
				{ text: "isAdmin", value: "isAdmin" },
				{ text: "isActive", value: "isActive" },
				{ text: "lastSeen", value: "lastSeen" },
			],
			editedIndex: -1,
			editedItem: {
				username: "",
				password: "",
				email: "",
				isAdmin: true,
				isActive: true,
			},
			defaultItem: {},
		}),

		computed: {
			formTitle() {
				return this.editedIndex === -1 ? "New Item" : "Edit Item";
			},
		},

		watch: {
			dialog(val) {
				val || this.close();
			},
		},
		// called when page is created before dom
		created() {
			this.getusernames();
			// this.$store.dispatch('autoRefreshToken')
			// .then(response => console.log(response))
			// .catch(error => console.log(error))
		},

		methods: {
			getusernames() {
				genericApi
					.get("users")
					.then((response) => {
						this.UserList = response.data.data;
						console.log(this.UserList);
					})
					.catch((error) => console.log(error));
			},

			// object.assign fills in the empty object with the properties of item
			editItem(item, dbox = true) {
				this.editedIndex = this.UserList.indexOf(item);
				item.isAdmin = this.checkboxAdmin;
				item.isActive = this.checkboxActive;
				// makes a new object with the same properties as the item object
				this.editedItem = Object.assign({}, item);
				//short for dialogbox
				this.dialog = dbox;
			},

			callTableAction(item, endpoint, method) {
				const index = this.UserList.indexOf(item);
				let tableItem = this.editedItem;
				this.$store
					.dispatch("updateTableItem", { endpoint, tableItem, method })
					.then(() => {
						this.UserList.splice(index, 1);
						this.saveInline();
					})
					.catch((error) => {
						console.log(error);
						this.cancelInline;
					});
			},

			deleteItem(item) {
				if (confirm("Are you sure you want to delete this item?")) {
					this.editedItem = Object.assign({}, item);
					let endpoint = `users/delete/${this.editedItem.username}`;
					let method = "delete";
					this.callTableAction(item, endpoint, method);
				}
			},

			close() {
				this.dialog = false;
				setTimeout(() => {
					this.editedItem = Object.assign({}, this.defaultItem);
					this.editedIndex = -1;
				}, 300);
			},

			save() {
				if (this.editedIndex > -1) {
					let tableItem = this.editedItem;
					let endpoint = `users/update/${this.editedItem.username}`;
					let method = "patch";
					this.$store
						.dispatch("updateTableItem", { endpoint, tableItem, method })
						.then(() => {
							Object.assign(this.UserList[this.editedIndex], this.editedItem);
							this.saveInline();
						})
						.catch((error) => {
							console.log(error);
							this.cancelInline;
						});
				} else {
					let tableItem = this.editedItem;
					let endpoint = `users/new-user`;
					let method = "post";
					this.$store
						.dispatch("updateTableItem", { endpoint, tableItem, method })
						.then(() => {
							console.log("new user");
							this.UserList.push(this.editedItem);
						})
						.catch((error) => {
							console.log(error);
							this.cancelInline;
						});
				}
				this.close();
			},
			// toasts/snackbar messages for actions
			saveInline() {
				this.snack = true;
				this.snackColor = "success";
				this.snackText = "Data saved";
			},
			cancelInline() {
				this.snack = true;
				this.snackColor = "error";
				this.snackText = "Canceled";
			},
			reset() {
				this.snack = true;
				this.snackColor = "success";
				this.snackText = "Data reset to default";
			},
			openInline() {
				this.snack = true;
				this.snackColor = "info";
				this.snackText = "Dialog opened";
			},
			closeInline() {
				console.log("Dialog closed");
			},
		},
	};
</script>

<style>
	table.v-table thead tr {
		color: red !important;
	}
	tbody tr:nth-of-type(odd) {
		background-color: rgba(0, 0, 0, 0.05);
	}
</style>
