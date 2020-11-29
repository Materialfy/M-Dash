export default {
    data: () => ({
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      pagination: {},
      itemsList: [],
      checkboxAdmin: true,
      checkboxActive: true,
      rowsAmount: [15, 20, 25, {'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1}],
      dialog: false,
      search: '',
      headers: [
        { text: 'Id', align: 'left', value: 'id'},
        { text: '-----Actions-----', value: 'actions', sortable: false },
        { text: 'name', value: 'name' },
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
      },
      defaultItem: {}
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
      this.getItems()
      // this.$store.dispatch('autoRefreshToken')
      // .then(response => console.log(response))
      // .catch(error => console.log(error))
    },
  
    methods: {
      getItems () {
        this.$http.get('tags')
          .then(response => {
            console.log(response.data.data.items)
            this.itemsList = response.data.data.items
          })
          .catch(error => console.log(error))
      },
  
      // object.assign fills in the empty object with the properties of item
      editItem (item, dbox = true) {
        this.editedIndex = this.itemsList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = dbox
      },
  
      callTableAction (item, endpoint, method) {
        let tableItem = this.editedItem
        this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
          .then((response) => this.saveInline())
          .catch(error => {
            console.log(error)
            this.cancelInline
          })
      },
  
      deleteItem (item) {
        const index = this.itemsList.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.itemsList.splice(index, 1)
        this.editedItem = Object.assign({}, item)
        let endpoint = `tags/${this.editedItem.id}`
        let method = 'delete'
        this.callTableAction(item, endpoint, method)
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
          Object.assign(this.itemsList[this.editedIndex], this.editedItem)
          let tableItem = this.editedItem
          let endpoint = `tags/${this.editedItem.id}`
          let method = 'put'
          this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
            .then((response) => this.saveInline())
            .catch(error => {
              console.log(error)
              this.cancelInline
            })
        } else {
          let tableItem = this.editedItem
          this.itemsList.push(this.editedItem)
          let endpoint = `tags`
          let method = 'post'
          this.$store.dispatch('updateTableItem', {endpoint, tableItem, method})
            .then((response) => console.log('new Item'))
            .catch(error => {
              console.log(error)
              this.cancelInline
            })
        }
        this.close()
      },
      // toasts/snackbar messages for actions
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
  