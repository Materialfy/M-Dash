<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex md12>
        <div>
          <material-card
            color="general"
            title="CRUD Table"
            text="Such a classic table"
          >
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template #activator="{ on }">
                <v-btn
                  color="general"
                  class="mb-2"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex
                        xs12
                        sm6
                        md4
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Dessert name"
                        />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4
                      >
                        <v-text-field
                          v-model="editedItem.calories"
                          label="Calories"
                        />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4
                      >
                        <v-text-field
                          v-model="editedItem.fat"
                          label="Fat (g)"
                        />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4
                      >
                        <v-text-field
                          v-model="editedItem.carbs"
                          label="Carbs (g)"
                        />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4
                      >
                        <v-text-field
                          v-model="editedItem.protein"
                          label="Protein (g)"
                        />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <!-- change table header color(or other properties) -->
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="
										subheading
										font-weight-light
										text-general text--darken-3
									"
                  v-text="header.text"
                />
              </template>
              <template #items="props">
                <td>{{ props.item.name }}</td>
                <td class="">
                  {{ props.item.calories }}
                </td>
                <td class="">
                  {{ props.item.fat }}
                </td>
                <td class="">
                  {{ props.item.carbs }}
                </td>
                <td class="">
                  {{ props.item.protein }}
                </td>
                <td class="justify-center">
                  <v-icon
                    medium
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    medium
                    @click="deleteItem(props.item)"
                  >
                    restore
                  </v-icon>
                  <v-icon
                    medium
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template #no-data>
                <v-btn
                  color="primary"
                  @click="initialize"
                >
                  Reset
                </v-btn>
              </template>
            </v-data-table>
          </material-card>
        </div>
      </v-flex>

      <!-- inline edit table -->
      <v-flex md12>
        <div>
          <material-card
            color="general"
            title="Inline Edit Table(Fat & Protein)"
            text="Such a classic table pt.2: revenge of the crud"
          >
            <v-data-table
              :headers="headers"
              :items="desserts"
              class="elevation-1"
            >
              <!-- change table header color(or other properties) -->
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="
										subheading
										font-weight-light
										text-general text--darken-3
									"
                  v-text="header.text"
                />
              </template>
              <!-- inline editing data table -->
              <template #items="props">
                <td>
                  <v-edit-dialog
                    :return-value.sync="props.item.name"
                    lazy
                    @save="save"
                    @cancel="cancel"
                    @open="open"
                    @close="close"
                  >
                    {{ props.item.name }}
                    <template #input>
                      <v-text-field
                        v-model="props.item.name"
                        :rules="[max25chars]"
                        label="Edit"
                        single-line
                        counter
                      />
                    </template>
                  </v-edit-dialog>
                </td>
                <td class="t">
                  {{ props.item.calories }}
                </td>
                <td class="text-right">
                  <v-edit-dialog
                    :return-value.sync="props.item.fat"
                    large
                    lazy
                    persistent
                    @save="saveInline"
                    @cancel="cancelInline"
                    @open="openInline"
                    @close="closeInline"
                  >
                    <div>{{ props.item.fat }}</div>
                    <template #input>
                      <div class="mt-3 text-h6">
                        Update Fat
                      </div>
                      <v-text-field
                        v-model="props.item.fat"
                        :rules="[max25chars]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                      />
                    </template>
                  </v-edit-dialog>
                </td>
                <td class="">
                  {{ props.item.carbs }}
                </td>
                <td class="text-right">
                  <v-edit-dialog
                    :return-value.sync="props.item.protein"
                    large
                    lazy
                    persistent
                    @save="saveInline"
                    @cancel="cancelInline"
                    @open="openInline"
                    @close="closeInline"
                  >
                    <div>{{ props.item.protein }}</div>
                    <template #input>
                      <div class="mt-3 text-h6">
                        Update Protein
                      </div>
                      <v-text-field
                        v-model="props.item.protein"
                        :rules="[max25chars]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                      />
                    </template>
                  </v-edit-dialog>
                </td>
              </template>
            </v-data-table>
            <v-snackbar
              v-model="snack"
              :timeout="3000"
              :color="snackColor"
            >
              {{ snackText }}
              <v-btn
                text
                @click="snack = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </material-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		data: () => ({
			snack: false,
			snackColor: "",
			snackText: "",
			max25chars: (v) => v.length <= 25 || "Input too long!",
			pagination: {},
			// data above is for inline edit
			dialog: false,
			headers: [
				{
					text: "Dessert (100g serving)",
					align: "left",
					sortable: false,
					value: "name",
				},
				{ text: "Calories", value: "calories" },
				{ text: "Fat (g)", value: "fat" },
				{ text: "Carbs (g)", value: "carbs" },
				{ text: "Protein (g)", value: "protein" },
				{ text: "Actions", value: "name", sortable: false },
			],
			desserts: [],
			editedIndex: -1,
			editedItem: {
				name: "",
				calories: 0,
				fat: 0,
				carbs: 0,
				protein: 0,
			},
			defaultItem: {
				name: "",
				calories: 0,
				fat: 0,
				carbs: 0,
				protein: 0,
			},
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

		created() {
			this.initialize();
		},

		methods: {
			initialize() {
				this.desserts = [
					{
						name: "Frozen Yogurt",
						calories: 159,
						fat: 6.0,
						carbs: 24,
						protein: 4.0,
					},
					{
						name: "Ice cream sandwich",
						calories: 237,
						fat: 9.0,
						carbs: 37,
						protein: 4.3,
					},
					{
						name: "Eclair",
						calories: 262,
						fat: 16.0,
						carbs: 23,
						protein: 6.0,
					},
					{
						name: "Cupcake",
						calories: 305,
						fat: 3.7,
						carbs: 67,
						protein: 4.3,
					},
					{
						name: "Gingerbread",
						calories: 356,
						fat: 16.0,
						carbs: 49,
						protein: 3.9,
					},
					{
						name: "Jelly bean",
						calories: 375,
						fat: 0.0,
						carbs: 94,
						protein: 0.0,
					},
					{
						name: "Lollipop",
						calories: 392,
						fat: 0.2,
						carbs: 98,
						protein: 0,
					},
					{
						name: "Honeycomb",
						calories: 408,
						fat: 3.2,
						carbs: 87,
						protein: 6.5,
					},
					{
						name: "Donut",
						calories: 452,
						fat: 25.0,
						carbs: 51,
						protein: 4.9,
					},
					{
						name: "KitKat",
						calories: 518,
						fat: 26.0,
						carbs: 65,
						protein: 7,
					},
				];
			},

			editItem(item) {
				this.editedIndex = this.desserts.indexOf(item);
				this.editedItem = Object.assign({}, item);
				this.dialog = true;
			},

			deleteItem(item) {
				const index = this.desserts.indexOf(item);
				confirm("Are you sure you want to delete this item?") &&
					this.desserts.splice(index, 1);
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
					Object.assign(this.desserts[this.editedIndex], this.editedItem);
				} else {
					this.desserts.push(this.editedItem);
				}
				this.close();
			},
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
