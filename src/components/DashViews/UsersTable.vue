<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <div>
          <material-card
            color="general"
            title="Usernames Table"
            text="Such a classic table"
          >
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details>
            </v-text-field>
            <v-dialog
              v-model="dialog"
              max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="general"
                  dark
                  class="mb-2"
                  v-on="on">New Item</v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <v-container grid-list-md >
                    <v-layout wrap>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.username"
                          label="Username" />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.password"
                          label="Password" />
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"/>
                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-checkbox v-model="checkboxAdmin" :label="`IsAdmin`"></v-checkbox>

                      </v-flex>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-checkbox v-model="checkboxActive" :label="`IsActive`"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="close">Cancel</v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-data-table
              :headers="headers"
              :items="UserList"
              :rows-per-page-items ="rowsAmount"
              :search="search"
              class="elevation-1"
            >
              <!-- change table header background and text color(or other properties) -->
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="subheading font-weight-light text-general text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td class="justify-center ">
                  <v-icon
                    medium
                    class="mr-2"
                    @click="editItem(props.item)">edit</v-icon>
                  <v-icon
                    medium
                    @click="deleteItem(props.item)">delete</v-icon>
                </td>
                <td>
                  <v-edit-dialog
                    :return-value.sync="props.item.username"
                    large
                    lazy
                    persistent
                    @save="saveInline"
                    @cancel="cancelInline"
                    @open="openInline"
                    @close="closeInline"
                  > 
                  <div>{{ props.item.username }}</div>
                    <template v-slot:input>
                      <v-text-field
                        v-model="props.item.username"
                        :rules="[max25chars]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                      />
                    </template>
                  </v-edit-dialog>
                </td> 
                
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
                    <template v-slot:input>
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
                <td class="">{{ props.item.isAdmin }}</td>
                <td class="">{{ props.item.isActive }}</td>
                <td class="">{{ props.item.lastSeen }}</td>
                <td v-show = false>{{ props.item.password }}</td>  
              </template>
            </v-data-table>
            <v-snackbar
              v-model="snack"
              :timeout="3000"
              :color="snackColor">
              {{ snackText }}
              <v-btn
                flat
                @click="snack = false">Close</v-btn>
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
    snackColor: '',
    snackText: '',
    max25chars: v => v.length <= 25 || 'Input too long!',
    pagination: {},
    UserList: [],
    checkboxAdmin: true,
    checkboxActive: true,
    rowsAmount: [15,20,25,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}],
    dialog: false,
    search: '',
    headers: [
      { text: 'Id', align: 'left', value: 'id'},
      { text: '-----Actions-----', value: 'actions', sortable: false },
      { text: 'username', value: 'username' },
      { text: 'email', value: 'email' },
      { text: 'isAdmin', value: 'isAdmin' },
      { text: 'isActive', value: 'isActive' },
      { text: 'lastSeen', value: 'lastSeen' },
      { text: 'password', value: 'password' },


    ],
    editedIndex: -1,
    editedItem: {
      username: '',
      password: '',
      email: '',
      isAdmin : true,
      isActive : true,
    },
    defaultItem: {

    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  // called when page is created before dom
  created () {
    this.getusernames()
    // this.$store.dispatch('autoRefreshToken')
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
  },

  methods: {
    getusernames () {
      this.$http.get('/users')
      .then(response => {
        this.UserList = response.data.Users
        })
      .catch(error => console.log(error))
    },


    // object.assign fills in the empty object with the properties of item
    editItem (item, dbox=true ) {
      this.editedIndex = this.UserList.indexOf(item)
      item.isAdmin = this.checkboxAdmin
      item.isActive = this.checkboxActive
      this.editedItem = Object.assign({}, item)
      this.dialog = dbox
    },

    callTableAction (item, endpoint, method) {
      let tableItem = this.editedItem
      this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
      .then((response) => this.saveInline())
      .catch(error =>{ 
        console.log(error)
        this.cancelInline
      }) 
    },
    
    deleteItem (item) {
      const index = this.UserList.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.UserList.splice(index, 1)
      this.editedItem = Object.assign({}, item)
      let endpoint = `users/delete/${this.editedItem.username}`
      let method = 'delete'
      this.callTableAction(item, endpoint, method);
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.UserList[this.editedIndex], this.editedItem)
        let tableItem = this.editedItem
        let endpoint = `users/update/${this.editedItem.username}`
        let method = 'patch'
        this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
        .then((response) => this.saveInline())
        .catch(error =>{ 
          console.log(error)
          this.cancelInline
        }) 
      } else {
        let tableItem = this.editedItem
        this.UserList.push(this.editedItem)
        let endpoint = `users/new-user`
        let method = 'post'
        this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
        .then((response) => console.log('new user'))
        .catch(error =>{ 
          console.log(error)
          this.cancelInline
          })

      }
      this.close()
    },
    //toasts/snackbar messages for actions
    saveInline () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancelInline () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    reset () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data reset to default'
    },
    openInline () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    closeInline () {
      console.log('Dialog closed')
    }
  }
}
</script>

<style>
table.v-table thead tr {
  color: red !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}
</style>
