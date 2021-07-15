<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<!-- This is a data table with dynamically generated headers using props to change url -->
<template>
		<!-- older style data table with v-card header and search seperate from table portion-->
		<v-row justify-md="center" wrap>
			<v-col class="d-flex justify-center" md12>
				<div>
					<materialfy-header-card
						color="tertiary"
						cardTitle="Inline Edit Crud Table"
						cardOverlineText="Such a classic table"
						:cardShowAvatar="false"
						:cardShowActions="false"
						:cardShowInnerList="false"
						:cardShowDivider="false"
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
								class="ma-2 px-8"
								color="secondary"
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
							</v-dialog>
							<!-- lets you change the props/options for the data table. vuetify iterates through the arrays you feed the headers & items props
							the headers(array of objects) and items(array of objects)  prop is v-binded into the data () props and passed into the table
							-->
							<!-- Headers array object 'value'(value: "first_name") must be the same name as one of your items array(userList) objects propertys(first_name: George)  -->
							<!-- search: Text input used to filter items, binded to the search data prop which is two way binded via v-model in v-text-field  -->
							<v-data-table
								:headers="headers"
								:items="userList2"
								:items-per-page-options="rowsAmount"
								:search="search"
								class="secondary"
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
								<template #[`item.avatar`]="{ item }">
									<v-avatar>
										<img :src="item.avatar" :alt="item.first_name" />
									</v-avatar>
								</template>
								<!-- controls inline edit -->
								<template #[`item.first_name`]="props">
									<!-- these set up each individual column to inline ediot   -->
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
								</template>
								<!-- props is userList data sent from the child, use it to access item data -->
								<template #[`item.last_name`]="props">
									<!-- they are just hooked up to snackbar messages, they dont do anything -->
									<v-edit-dialog
										:return-value.sync="props.item.last_name"
										large
										lazy
										persistent
										@save="saveInline"
										@cancel="cancelInline"
										@open="openInline"
										@close="closeInline"
									>
										<div>{{ props.item.last_name }}</div>
										<!-- this area is for the inline edit pop up -->
										<template #input>
											<v-text-field
												v-model="props.item.last_name"
												:rules="[max25chars]"
												label="Edit"
												single-line
												counter
												autofocus
											/>
										</template>
									</v-edit-dialog>
								</template>
								<!-- email inline edit pop up -->
								<template #[`item.email`]="props">
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
									<!-- turn these into inline edits per column -->
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
</template>

<script>
export default {
	
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
