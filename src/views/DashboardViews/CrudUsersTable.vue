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
							<!-- Headers array object 'value'(value: "first_name") must be the same name as one of your items array(userList) objects propertys(first_name: George)  -->
							<!-- search: Text input used to filter items, binded to the search data prop which is two way binded via v-model in v-text-field  -->
							<v-data-table
								:headers="headers"
								:items="userList"
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

		<!-- second table -->
		<v-row justify-md="center" wrap>
			<v-col class="d-flex justify-center" md12>
				<!-- lets you change the props/options for the data table. vuetify iterates through the arrays you feed the headers & items props
				the headers(array of objects) and items(array of objects)  prop is v-binded into the data () props and passed into the table
				-->
				<!-- Headers array object 'value'(value: "first_name") must be the same name as one of your items array(userList) objects propertys(first_name: George)  -->
				<!-- search: Text input used to filter items, binded to the search data prop which is two way binded via v-model in v-text-field  -->
				<v-data-table
					:headers="headers"
					:items="userList"
					sort-by="id"
					class="elevation-1 secondary"
					:mobile-breakpoint="0"
				>
					<template v-slot:top>
						<v-toolbar color="primary" flat>
							<v-toolbar-title>Users CRUD 2</v-toolbar-title>
							<v-divider class="mx-4" inset vertical></v-divider>
							<v-spacer></v-spacer>
							<!-- this dialog section controls the new item button/pop-up functionality v-model controls dialog pop up -->
							<v-dialog v-model="dialog" max-width="500px">
								<!-- controls sending and capturing 'on' event to open v-card dialog pop up -->
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										color="primary"
										dark
										class="mb-2"
										v-bind="attrs"
										v-on="on"
									>
										New Item
									</v-btn>
								</template>
								<!-- this pops up after the new item button is hit, controls the editing pop up -->
								<v-card>
									<v-card-title>
										<!-- changes title based on formTitle index, -1 shows 'New item' any other index shows 'Edit Item' as the title -->
										<span class="text-h5">{{ formTitle }}</span>
									</v-card-title>
									<!-- you add the fields you want to edit here. the v-model needs to bind to the edited item  -->
									<v-card-text>
										<v-container>
											<v-row>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.first_name"
														label="First Name"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.last_name"
														label="Last Name"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.email"
														label="Email"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.isAdmin"
														label="Adminstrator?"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.isActive"
														label="Active"
													></v-text-field>
												</v-col>
												<v-col cols="12" sm="6" md="4">
													<v-text-field
														v-model="editedItem.lastSeen"
														label="Last Seen"
													></v-text-field>
												</v-col>
											</v-row>
										</v-container>
									</v-card-text>
									<!--  -->
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue darken-1" text @click="close">
											Cancel
										</v-btn>
										<v-btn color="blue darken-1" text @click="save">
											Save
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
							<v-dialog v-model="dialogDelete" max-width="500px">
								<v-card>
									<v-card-title class="text-h5"
										>Are you sure you want to delete this item?</v-card-title
									>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="blue darken-1" text @click="closeDelete"
											>Cancel</v-btn
										>
										<v-btn color="blue darken-1" text @click="deleteItemConfirm"
											>OK</v-btn
										>
										<v-spacer></v-spacer>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</v-toolbar>
					</template>
					<!-- TABLE ACTIONS -->
					<!-- the v-table has slots you can use to change column content. We use this for actions column 
					this allows us to pass in the edit and delete icons to the actions column
					we then use the item object passed with scoped slot from v-table(child)-->
					<template v-slot:[`item.actions`]="{ item }">
						<!-- used Dynamic Slot Names with string template to get around linting error -->
						<!-- this is the actions edit button -->
						<v-icon small class="mr-2" @click="editItem(item)">
							mdi-pencil
						</v-icon>
						<!-- this is the actions delete button -->
						<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
					</template>
					<template v-slot:no-data>
						<!-- this is the actions reset button that shows when you delete -->
						<v-btn color="primary" @click="getusernames"> Reset </v-btn>
					</template>
				</v-data-table>
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
		userList: [],
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
			{
				text: "ID",
				align: "start",
				sortable: false,
				value: "id",
			},
			{ text: "Avatar", value: "avatar" },
			{ text: "First Name", value: "first_name" },
			{ text: "Last Name", value: "last_name" },
			{ text: "Email", value: "email" },
			{ text: "Actions", value: "actions", sortable: false },
			{ text: "Admin", value: "isAdmin" },
			{ text: "Active", value: "isActive" },
			{ text: "Last Seen", value: "lastSeen" },
		],
		editedIndex: -1,
		//this is the new item created by copying the userList item. its used in editing menu
		editedItem: {
			first_name: "",
			last_name: "",
			email: "",
			isAdmin: true,
			isActive: true,
		},
		defaultItem: {},
		//second table
		dialogDelete: false,
	}),

	computed: {
		//Changes the title of the v-card based on if the editied index is the same as -1
		//the default index is -1 so it assumes if there is no item index then its a new item
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		},
	},

	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},
	// called when page is created before dom
	created() {
		this.getusernames();
		// this.$store.dispatch('autoRefreshToken')
		// .then(response => console.log(response))
		// .catch(error => console.log(error))
	},
	//These are for both tables unless specified
	methods: {
		//uses axios to send get request to api in genericAPI
		getusernames() {
			genericApi
				.get("users")
				.then((response) => {
					this.userList = response.data.data;
					console.log(this.userList);
				})
				.catch((error) => console.log(error));
		},

		// object.assign fills in the empty object with the properties of item
		editItem(item, dialogbox = true) {
			/* sets the index that controls the title text in the new item pop up
			this updates the editedIndex from being -1 to whatever the index of the table item is that you are editing
			this function is called by the @click edit icons in table actions
			*/
			this.editedIndex = this.userList.indexOf(item);
			item.isAdmin = this.checkboxAdmin;
			item.isActive = this.checkboxActive;
			// makes a new object with the same properties as the item object
			this.editedItem = Object.assign({}, item);
			//opens the dialog editing box connected to v-dialog v-model="dialog"
			this.dialog = dialogbox;
		},
		/* This is a dynamic method that handles sending vuex actions to call different axios endpoints with different methods
		you get the index of the item passed in via another method, 
		you use the edited item created in the method that called this one and assign to tableITem to use later
		you then dispatch the updateTableItem action with the new edited from html item
		you then remove the item from the list as well to update the table
		 */
		callTableAction(item, endpoint, method) {
			const index = this.userList.indexOf(item);
			let tableItem = this.editedItem;
			this.$store
				.dispatch("updateTableItem", { endpoint, tableItem, method })
				.then(() => {
					this.userList.splice(index, 1);
					this.saveInline(); //calls snackbar noticiation
				})
				.catch((error) => {
					console.log(error);
					this.cancelInline; //calls snackbar noticiation
				});
		},
		// this sets the item, url path endpoint and the type of api method(delete) for calltableAction
		deleteItem(item) {
			if (confirm("Are you sure you want to delete this item?")) {
				this.editedItem = Object.assign({}, item);
				let endpoint = `users/delete/${this.editedItem.username}`;
				let method = "delete";
				// calls callTableActions which is a method above that handles calling axios via vuex actions
				this.callTableAction(item, endpoint, method);
			}
		},
		// closes the dialog pop up and resets index until its opened again
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1; // resets the index that controls the title text in the new item pop up
			}, 300);
		},

		save() {
			//if editedIndex is greater than -1 then the item we are trying to save is an already exisiting item, so we update the table differently
			//when you open the editItem menu it sets the index to the items index, which then is used here to determine what to do
			if (this.editedIndex > -1) {
				let tableItem = this.editedItem;
				let endpoint = `users/update/${this.editedItem.username}`;
				let method = "patch";
				this.$store
					.dispatch("updateTableItem", { endpoint, tableItem, method })
					.then(() => {
						// merge both objects to update the original object in userList to update table
						Object.assign(this.userList[this.editedIndex], this.editedItem);
						this.saveInline(); //calls snackbar noticiation
					})
					.catch((error) => {
						console.log(error);
						this.cancelInline; //calls snackbar noticiation
					});
			} else {
				//if the editedIndex isnt greater than -1 then its a new item/user so we do a different set of actions to add a new item
				let tableItem = this.editedItem;
				let endpoint = `users/new-user`;
				let method = "post";
				this.$store
					.dispatch("updateTableItem", { endpoint, tableItem, method })
					.then(() => {
						// instead of merging objects in userList we add new object to user list with .push()
						console.log("new user");
						this.userList.push(this.editedItem);
					})
					.catch((error) => {
						console.log(error);
						this.cancelInline; //calls snackbar noticiation
					});
			}
			this.close();
		},
		// second table only
		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1; // sets the index that controls the title text in the new item pop up
			});
		},
		deleteItemConfirm() {
			this.userList.splice(this.editedIndex, 1);
			this.closeDelete();
		},
		// toasts/snackbar/pop-up messages when you pressactions
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
